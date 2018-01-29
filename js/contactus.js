$(document).ready(function(){
    $('#Header').load('components/Header/Header.html');
    $('#SideDrawer').load('components/SideDrawer/SideDrawer.html');
    $('#FooterElement').load('components/Footer/Footer.html');
    $('#modalSignInElement').load('components/Modals/SignIn/signIn.html');
    $('#modalSignUpElement').load('components/Modals/SignUp/signUp.html');
});

function searchContactUs(){
    window.location.href = 
    window.location.origin + '/~nachomaresca/exercise/contactus.html';
}
