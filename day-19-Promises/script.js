function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data loaded");
        }, 2000);
    });
};

async function loadData() {
    let data= await fetchData();
    console.log(data);
};
loadData();

// mini-task

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("42");
        }, 2000);
    });
}

getNumber().then(function (result) {
    console.log(result);
});

async function showNumber() {
    let number=await getNumber();
    console.log(number);
};
showNumber();