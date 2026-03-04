async function getRepos(username) {
    let response= await fetch(`https://api.github.com/users/${username}/repos`);
    let repos= await response.json();
    console.log(repos);
    let repoNames=repos.map(repo=>repo.name);
    console.log("repository names:",repoNames);
    let popularRepos=repos.filter(repo=> repo.stargazers_count>10000);
    console.log(popularRepos);
    let linuxRepo=repos.find(repo=>repo.name==="linux");
    console.log(linuxRepo);
    let languages=repos.map(repo=>repo.language).filter(lang=>lang!=="null");
    let uniqueLanguages=[new Set(languages)];
    console.log("languages used:",uniqueLanguages);
};
getRepos("torvalds");
