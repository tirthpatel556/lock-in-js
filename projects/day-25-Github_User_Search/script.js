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
    try {
        let response= await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        if (!data.login) {
            profileDiv.innerHTML="<h3>User Not Found!!!</h3>";
            return;
        }
        let repos= await getRepos(username);
        let repoList= repos.slice(0,5).map(repo=>`
            <li>
            <a href="${repo.html_url}" target="_blank"> ${repo.name}
            </a>
            </li>`)
            .join("");
            displayProfile(data,repoList);
        } catch (error) {
            profileDiv.innerHTML="<p>Error loading profile!</p>"
            console.log("Error!",error)
        }
};

//profile-data

async function displayProfile(user,reposHTML){
    profileDiv.innerHTML=`
    <div class="profile-card">
    <img src="${user.avatar_url}" width="120">
    <h2>${user.name || user.login}</h2>
    <p>Followers:${user.followers}</p>
    <p>Public repos:${user.public_repos}</P>
    <h3>Repositories</h3>
    <ul>${reposHTML}</ul>
    </div>
    `;
};

async function getRepos(username) {
    let response= await fetch(`https://api.github.com/users/${username}/repos`);
    let repos= await response.json();
    return repos;
}