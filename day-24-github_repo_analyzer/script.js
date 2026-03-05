async function analyzeRepos(username) {
    try {

       let response= await fetch(`https://api.github.com/users/${username}/repos`);

       if (!response.ok) {
            console.log("API request failed!",response.status);
            return;
        }
        let repos= await response.json();
        
        if (!Array.isArray(repos)) {
            console.log("unexpected response",repos);
            return;
        }
        console.log(repos);
    
        //repo-name
        let reposName= repos.map(repo=>repo.name);
        console.log(reposName);
        
        // most-stared-repo
        let mostStarred= repos.reduce((max,repo)=>{
            return repo.stargazers_count>max.stargazers_count ? repo : max;
        });
        console.log("Most starred repo:",mostStarred.name);
        console.log("star count:",mostStarred.stargazers_count);
        let totalStars= repos.reduce((sum,repo)=>{
            return sum + repo.stargazers_count;
        },0);
        console.log("total stars:",totalStars);
        
        // languages
        let languages=repos.map(repo=>repo.languese).filter(lang=>lang!==null);
        let uniqueLanguages=[...new set(languages)];
        console.log("languages used:",uniqueLanguages);
    } catch (error) {
        console.log("Error",error);
    }
};
analyzeRepos("tolvarlds");