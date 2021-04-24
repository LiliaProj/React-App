export default function activeButton(elem){
    let siblings = elem.parentElement.childNodes;
    
    siblings.forEach(element => {
        element.classList.remove("active");
    });
    elem.classList.add("active");
}