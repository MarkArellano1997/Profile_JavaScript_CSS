const data = {
    name: "Marcos Arellano",
    description: "Programador frontend. Amante del futbol",
    email:"arellano.vilchez.marcos.alejandro@gmail.com",
    cellphone:"939827124"
}

let name = document.getElementById('name')
let description = document.getElementById('description')
let email = document.getElementById('email')
let cellphone = document.getElementById('cellphone')

const loading = () => {
    name.innerHTML = `${data.name}`
    description.innerText = `${data.description}`
    email.innerHTML = `${data.email}`
    cellphone.innerHTML = `${data.cellphone}`
}