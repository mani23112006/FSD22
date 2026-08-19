function addParagraph(){
    const para=document.createElement("p");
    para.innerHTML="This is a new paragraph";
    para.style.color="red";
    const el=document.getElementById("para");
    el.appendChild(para);
}

function removeParagraph(){
    const el=document.querySelector("#para");
    el.removeChild(el.lastChild);
}
function removeAllParagraphs(){
    const el=document.querySelectorAll("#para");
parent.remove(el);
}