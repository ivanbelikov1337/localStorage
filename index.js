
let data  = localStorage.getItem("msgList");
let msgList = [];


if (data !== "" && data !== null) {
    msgList = JSON.parse(data)
}


function creatNewMsg(obj) {
    const itemMsg = document.createElement("li");
    itemMsg.classList.add("list-item");

    const itemTitle = document.createElement("h2");
    itemTitle.textContent = obj.name

    const itemText = document.createElement("p");
    itemText.classList.add("lead");
    itemText.textContent = obj.msg;
    itemMsg.append(itemTitle);
    itemMsg.append(itemText);

    document.getElementById("msg-list").append(itemMsg);
}


for (const msg of msgList) {
    creatNewMsg(msg)
}


document.getElementById("add-msg-form").addEventListener("submit", function (event) {
    event.preventDefault()
    let userName  = document.getElementById("name-in").value
    let msg = document.getElementById("msg-in").value

    let msgObj = {
        name: userName,
        msg: msg
    }

    msgList.push(msgObj)

    localStorage.setItem("msgList", JSON.stringify(msgList))

    creatNewMsg(msgObj)

    let clearName = document.getElementById("name-in").value = "";
    let clearMsg = document.getElementById("msg-in").value = "";
})


const b = document.querySelector(".clear-local");
b.addEventListener("click", clearLocal)


function clearLocal() {
    localStorage.clear()
    let clearTextLocal = document.getElementById("msg-list").innerText = ""
}