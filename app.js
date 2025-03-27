import sanger from "/sanger.json" with { "type": "json"}

const sangliste = document.querySelector("#sangliste")
console.log(sanger)


sanger.forEach(sang => {
    const li = document.createElement("li")
    li.textContent = `${sang.tittel}  - Utgitt: ${sang.utgitt} - ${sang.artist} - `
    sangliste.appendChild(li)
})