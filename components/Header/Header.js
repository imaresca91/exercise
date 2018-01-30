function drawerToggleClicked(){
    $('#backdropElement').removeClass('Close');
    $('#backdropElement').addClass('Open');
    $('#sideDrawerElement').removeClass('Close');
    $('#sideDrawerElement').addClass('Open');
}

function backdropClicked(){
    $('#backdropElement').addClass('Close');
    $('#backdropElement').removeClass('Open');
    $('#sideDrawerElement').addClass('Close');
    $('#sideDrawerElement').removeClass('Open');
}

function showModalSignIn(){
    $('#modalSignIn').modal('show');
}

function showModalSignUp(){
    $('#modalSignUp').modal('show');
}