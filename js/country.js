$(document).ready(function(){
    $('#header').load('components/header/header.html');
    $('#sideDrawer').load('components/sideDrawer/sideDrawer.html');
    $('#footerElement').load('components/footer/footer.html');
    $('#modalSignInElement').load('components/modals/signIn/signIn.html');
    $('#modalSignUpElement').load('components/modals/signUp/signUp.html');
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    var name = url.searchParams.get("name");
    var flag = url.searchParams.get("flag");
    var description = url.searchParams.get("description");
    loadContent(id, name, flag, description);
});

function loadContent(id, name, flag, description){
    content =
        '<img src="'+flag+'" style="width: 268px; height: 160px;">'+
        '<h1 class="country_name">'+name+'</h1>'+
        '<p style="margin-top: 20px;">'+description+'</p>'+
        '<hr>'+
        '<h3>Photos</h3>'+
        '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">'+
        '<ol class="carousel-indicators">'+
          '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>'+
          '<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>'+
          '<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>'+
          '<li data-target="#carouselExampleIndicators" data-slide-to="3"></li>'+
        '</ol>'+
        '<div class="carousel-inner">'+
          '<div class="carousel-item active">'+
            '<img class="d-block w-100" src="utils/img/'+id+'/1.jpg" alt="First slide">'+
          '</div>'+
          '<div class="carousel-item">'+
            '<img class="d-block w-100" src="utils/img/'+id+'/2.jpg" alt="Second slide">'+
          '</div>'+
          '<div class="carousel-item">'+
            '<img class="d-block w-100" src="utils/img/'+id+'/3.jpg" alt="Fourth slide">'+
          '</div>'+
          '<div class="carousel-item">'+
            '<img class="d-block w-100" src="utils/img/'+id+'/4.jpg" alt="Fifth slide">'+
          '</div>'+
        '</div>'+
        '<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">'+
          '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
          '<span class="sr-only">Previous</span>'+
        '</a>'+
        '<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">'+
          '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
          '<span class="sr-only">Next</span>'+
        '</a>'+
      '</div>';
    $('#content').html(content);
}
