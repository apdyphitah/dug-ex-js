const list = document.querySelector('.list');

function addItem() {
    const liEL = document.createElement('li');
    liEL.textContent = 'new Item';
    list.appendChild(liEL);
}

function removeItem() {

    if(list.lastElementChild) {
    list.removeChild(list.lastElementChild);
   
}else {
    alert('No more items to remove');
}
}
