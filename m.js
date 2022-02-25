



function AddText(){
    let txt = document.getElementById("txt").value
    let s = document.querySelector(".scond")
    let h2 = document.createElement("h2")
    h2.textContent = txt
    h2.style.cssText = "border-bottom:1px solid gray;color:white"
    s.appendChild(h2)
    
}

  