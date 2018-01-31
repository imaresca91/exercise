$(document).ready(function(){
    $('#header').load('components/header/header.html');
    $('#sideDrawer').load('components/sideDrawer/sideDrawer.html');
    $('#footerElement').load('components/footer/footer.html');
    $('#modalSignInElement').load('components/modals/signIn/signIn.html');
    $('#modalSignUpElement').load('components/modals/signUp/signUp.html');
    if ($(window).width() > 500) {
        searchHome();
    }

    var countries = [
        {
            id: 1,
            name: 'Spain',
            flag: 'utils/country_flags/Spain.png',
            description: 'The design of the Spanish flag was changed many times, especially during the times of Spanish expansionist policy in the 16th and 17th century.'
        },
        {
            id: 2,
            name: 'Belgium',
            flag: 'utils/country_flags/Belgium.png',
            description: 'The Belgian flag, which was inspired by the French tricolor, was adopted in 1831, shortly after gaining independence from the Netherlands.'
        },
        {
            id: 3,
            name: 'France',
            flag: 'utils/country_flags/France.png',
            description: 'The traditional French red-blue-white tricolor became a symbol of freedom during the French Revolution in the late 18th century.'
        },
        {
            id: 4,
            name: 'Germany',
            flag: 'utils/country_flags/Germany.png',
            description: 'The black-red-yellow tricolor of the current German flag experienced remarkable development hand in hand with historical events.'
        },
        {
            id: 5,
            name: 'Italy',
            flag: 'utils/country_flags/Italy.png',
            description: 'Italian national flag was inspired by the French flag, which was brought there in 1796 when Napoleon attacked Italy.'
        },
        {
            id: 6,
            name: 'United Kingdom',
            flag: 'utils/country_flags/UnitedKingdom.png',
            description: 'Flag of the United Kingdom - also known to the British as a Union Jack, has been used since 1603 when the Scottish King James VI became the king of England.'
        },
        {
            id: 7,
            name: 'Uruguay',
            flag: 'utils/country_flags/Uruguay.png',
            description: 'The flag of Uruguay consists of nine horizontal stripes where for of them are blue and five are white.'
        },
        {
            id: 8,
            name: 'Argentina',
            flag: 'utils/country_flags/Argentina.png',
            description: 'The flag of Argentine is strikingly similar to the flag of Uruguay, especially by its blue-and-white design and yellow symbol of sun, which represents the Inca god of sun called Inti.'
        }
    ];
    loadCountries(countries);
});

function loadCountries(countries){
    var content = '';
    countries.forEach(function(c){
        content +=
            '<div class="card" style="margin-top: 15px; cursor:pointer;" onclick="searchCountry(\''+c['id']+'\',\''+c['name']+'\',\''+c['flag']+'\',\''+c['description']+'\')">'+
                '<img class="card-img-top" src="'+c['flag']+'" alt="Card image cap">'+
                '<div class="card-body">'+
                    '<h5 class="card-title">'+c['name']+'</h5>'+
                    '<p class="card-text">'+c['description']+'</p>'+
                '</div>'+
            '</div>';
    });
    $('#countries').html(content);
}
