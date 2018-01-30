function searchMobileHome(){
    window.location.href = window.location.origin + '/~nachomaresca/traveler/home-mobile.html';
}

function searchCountry(id, name, flag, description){
    window.location.href = 
    window.location.origin + '/~nachomaresca/traveler/country.html' +
    '?id=' + id +
    '&name=' + name +
    '&flag=' + flag +
    '&description=' + description;
}

function searchContactUs(){
    window.location.href = window.location.origin + '/~nachomaresca/traveler/contactus.html';
}

function searchHome(){
    window.location.href = window.location.origin + '/~nachomaresca/traveler/index.html';
}