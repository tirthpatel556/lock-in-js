fetch("https://api.github.com/users/tirthpatel556").then(response => response.json()).then(data=>{
    console.log(data);
});

async function getUser(){
    let response = await 
    fetch("https://api.github.com/users/torvalds");
    let data = await response.json();
    console.log("Username:",data.login);
    console.log("Followers",data.followers);
    console.log("Public_repos",data.public_repos);
};
getUser();

async function getUserInfo(username) {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();
        console.log("Username:",data.login);
        console.log("followers:",data.followers);
        console.log("Repository count:",data.public_repos);
    } catch (error) {
        console.log("Error fetching user:",error);
    };
};
getUserInfo("tirthpatel556");