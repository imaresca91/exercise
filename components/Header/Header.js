function drawerToggleClicked(){
    $('#BackdropElement').removeClass('Close');
    $('#BackdropElement').addClass('Open');
    $('#SideDrawerElement').removeClass('Close');
    $('#SideDrawerElement').addClass('Open');
}

function backdropClicked(){
    $('#BackdropElement').addClass('Close');
    $('#BackdropElement').removeClass('Open');
    $('#SideDrawerElement').addClass('Close');
    $('#SideDrawerElement').removeClass('Open');
}

function showModalSignIn(){
    $('#modalSignIn').modal('show');
}

function showModalSignUp(){
    $('#modalSignUp').modal('show');
}

function goHome(){
    window.location.href = window.location.origin + '/~nachomaresca/exercise/home.html';
}