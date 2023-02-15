let fetched = fetch("https://nikeedev.github.io/welcome.txt").then(response => {return response})

fetched.then(response => {
    return response.text()
})

