let fetched = fetch("https://nikeedev.github.io/welcome.txt").then(response => {return response});

let welcome = fetched.then(response => {
    return response.text();
});

welcome.then(response => {
    console.log(String.raw`${response}`)
});
