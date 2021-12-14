const panels = document.querySelectorAll('.panel');
// fonction ici lorsque l'on clique ouvre un panneau et enclenche les animations
function toggleOpen(){
    this.classList.toggle('open');
}
// fonction ici lorsque l'on clique ferme le panneau et enclenche la transiition end
function toggleActive(e){
console.log(e.propertyName);
if(e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));