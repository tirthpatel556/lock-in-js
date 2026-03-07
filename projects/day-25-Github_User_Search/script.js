let usernameInput=document.getElementById("username");
let searchbutton=document.getElementById("searchBtn");
let profileDiv=document.getElementById("profile");

searchbutton.addEventListener("click",
 (event)=>{   
            let username=usernameInput.value;
            getProfile(username);
        }
);

usernameInput.addEventListener("keydown",
    function(event){
        if (event.key==="Enter") {
            let username=usernameInput.value;
            getProfile(username);
        }
    }
)

//api-call

async function getProfile(username) {
    profileDiv.innerHTML="<p>Loading Profile...</p>";
    let response= await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    if (!data.login) {
        profileDiv.innerHTML="<h3>User Not Found!!!</h3>";
        return;
    }
    displayProfile(data);
};

//profile-data

async function displayProfile(user){
    let repos= await getRepos(user.login);
    let repoList= repos.slice(0,5).map(repo=>`<li>${repo.name}</li>`).join("");
    profileDiv.innerHTML=`
    <img src="${user.avatar_url}" width="100">
    <h3>${user.name}</h3>
    <p>Followers:${user.followers}</p>
    <p>Public repos:${user.public_repos}</P>
    <h3>Repositories</h3>
    <ul>${repoList}</ul>
    `;
};

async function getRepos(username) {
    let response= await fetch(`https://api.github.com/users/${username}/repos`);
    let repos= await response.json();
    return repos;
}