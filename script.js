const inputs= document.querySelectorAll('.controls input');


function handleUpdate(){
    const suffix = this.dataset.sizing||'';
    //console.log(suffix)
    
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
    
    document.querySelector(".hl").style.setProperty(`--base`,"#acd123")
}
inputs.forEach(input=>input.addEventListener("change",handleUpdate))
