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