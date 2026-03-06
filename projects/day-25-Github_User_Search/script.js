let usernameInput=document.getElementById("username");
let searchbutton=document.getElementById("searchBtn");
let profileDiv=document.getElementById("profile");

searchbutton.addEventListener("click",
    ()=>{
        let username=usernameInput.value;
        getProfile(username);
    }
);

//api-call

async function getProfile(username) {
    let response= await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    if (!data.login) {
        profileDiv.innerHTML="<h3>User Not Found!!!</h3>";
        return;
    }
    displayProfile(data);
};

//profile-data

function displayProfile(user){
    profileDiv.innerHTML=`
    <img src="${user.avatar_url}" width="100">
    <h3>${user.name}</h3>
    <p>Followers:${user.followers}</p>
    <p>Public repos:${user.public_repos}</P>
    `;
};