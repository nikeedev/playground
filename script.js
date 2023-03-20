console.log("Made with " + "%c\u2764", "color:#fc4444; font-family: ; font-size: 25px;", "by nikeedev!");

const token = "4f6tfh83h782r88d98u2f82e9u";

let show_secret = document.getElementById("show_secret");

let token_text = document.createElement("span");
token_text.innerText = token;
token_text.style.display = "none";
token_text.style.color = "cornflowerblue";

let button = document.createElement("span");
button.style.textDecoration = "underline";
button.innerText = "Show token";
button.style.color = "cornflowerblue";
button.style.cursor = "pointer";

button.onclick = () => {
    token_text.style.display = "block";
    button.style.display = "none";
}

show_secret.appendChild(button);
show_secret.appendChild(token_text);