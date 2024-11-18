let modal = document.getElementById('modal');

let closeBtn = document.querySelector('.closeBtn');

let modalBtn = document.getElementById('modalBtn');

modalBtn.onclick = function(){
    modal.style.display = 'flex'
}

closeBtn.onclick = function(){
    modal.style.display = 'none'
}

window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}
