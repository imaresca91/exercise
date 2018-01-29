$(document).ready(function(){
    $('#Header').load('components/Header/Header.html');
    $('#SideDrawer').load('components/SideDrawer/SideDrawer.html');
    $('#FooterElement').load('components/Footer/Footer.html');
    $('#modalSignInElement').load('components/Modals/SignIn/signIn.html');
    $('#modalSignUpElement').load('components/Modals/SignUp/signUp.html');
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    var name = url.searchParams.get("name");
    var flag = url.searchParams.get("flag");
    var description = url.searchParams.get("description");
    loadContent(id, name, flag, description);
});

function loadContent(id, name, flag, description){
    content =
        '<h1>'+name+'</h1>'+
        '<img src="'+flag+'" style="width: 268px; height: 160px;">'+
        '<h4>'+description+'</h4>';
    $('#content').html(content);
}