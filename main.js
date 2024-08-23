let username = localStorage.getItem("username");
if(!username){
    username = window.prompt("What's your name?");
    localStorage.setItem("username",username);
}
const userMessage = document.getElementById("user-message");
const sendButton = document.getElementById("send");
const container = document.getElementById("container");
sendButton.addEventListener("click",function(){
    if(userMessage.value.trim() !== ""){
        createMessageBody();
        userMessage.value = "";
    }
});
document.addEventListener("keydown",function(event){
    if(event.key == "Enter"){
        if(userMessage.value.trim() !== ""){
            createMessageBody();
            userMessage.value = "";
        }
    }
});
function createMessageBody(){
    let box = document.createElement("div");
    let name = document.createElement("h4");
    let msg = document.createElement("p");
    let breakElement = document.createElement("br");
    let time = document.createElement("h6");
    box.className = "message";
    name.textContent = username;
    msg.textContent = userMessage.value;
    let now = new Date();
    time.textContent = `${now.getHours().toString().padStart(2,0)}:${now.getMinutes().toString().padStart(2,0)}`;
    box.append(name,breakElement,msg,time);
    document.getElementById("container").append(box);
    container.scrollTop = container.scrollHeight;
}
