const form = document.getElementById("myform");
const name = document.getElementById("namefield");
const msg = document.getElementById("msgfield");

console.log(form)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(name.value)
    console.log(msg.value)
})

