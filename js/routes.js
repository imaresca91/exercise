function searchMobileHome(){
    window.location.href = window.location.origin + '/home-mobile.html';
}

function searchCountry(id, name, flag, description){
    window.location.href = 
    window.location.origin + '/country.html' +
    '?id=' + id +
    '&name=' + name +
    '&flag=' + flag +
    '&description=' + description;
}

function searchContactUs(){
    window.location.href = window.location.origin + '/contactus.html';
}

function searchHome(){
    window.location.href = window.location.origin + '/index.html';
}