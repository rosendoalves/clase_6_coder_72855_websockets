console.log("conectado al script");

const socket = io();

const usersList = document.getElementById("users-list");
const registerForm = document.getElementById("register-form"); 


registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    socket.emit("new register", {name, lastName, email, password});
})
// CLIENT SIDE
socket.on("register", users => {
    renderUsers(users);
})

socket.on("update users", users => {
    renderUsers(users);
})

const renderUsers = (users) => {
    usersList.innerHTML = "";   
    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `${user.name} ${user.lastName} - ${user.email}`;
        usersList.appendChild(li);
    })
}
