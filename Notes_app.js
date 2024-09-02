const notesContainer = document.querySelector('.notes-container')
const createBtn = document.querySelector('.btn')
let notes =document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function  updateStorage(){/* like save */
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener('click', ()=>{/* it CREATE TEXT BOX WHEN WE CLICK BUTTON */
    let inputBox = document.createElement("p")/*this is not class or id,but ONLY empty paragraph */
    let img = document.createElement("img")/* for cleare */
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src="./icons/check.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"/* Img is always uppercas,b/c it deceleared in .js */){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"/* must be upper case */){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();/* if once remove, u can't get it again,b/c it saved immidatly after removed();  */
            }
        })
    }
})
/* GO TO NEXT LINE WHEN WE PRESS 'enter key' */
document.addEventListener("keydown", event => {
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
