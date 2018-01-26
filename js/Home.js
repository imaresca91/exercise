$(document).ready(function(){
    $('#Header').load('components/Header/Header.html');
    $('#SideDrawer').load('components/SideDrawer/SideDrawer.html');
    $('#Footer').load('components/Footer/Footer.html');
    var countries = [
        {
            name: 'Spain',
            flag: 'utils/country_flags/Spain.png',
            description: 'The design of the Spanish flag was changed many times, especially during the times of Spanish expansionist policy in the 16th and 17th century.'
        },
        {
            name: 'Belgium',
            flag: 'utils/country_flags/Belgium.png',
            description: 'The Belgian flag, which was inspired by the French tricolor, was adopted in 1831, shortly after gaining independence from the Netherlands.'
        },
        {
            name: 'France',
            flag: 'utils/country_flags/France.png',
            description: 'The traditional French red-blue-white tricolor became a symbol of freedom during the French Revolution in the late 18th century.'
        },
        {
            name: 'Germany',
            flag: 'utils/country_flags/Germany.png',
            description: 'The black-red-yellow tricolor of the current German flag experienced remarkable development hand in hand with historical events.'
        },
        {
            name: 'Italy',
            flag: 'utils/country_flags/Italy.png',
            description: 'Italian national flag was inspired by the French flag, which was brought there in 1796 when Napoleon attacked Italy.'
        },
        {
            name: 'United Kingdom',
            flag: 'utils/country_flags/UnitedKingdom.png',
            description: 'Flag of the United Kingdom - also known to the British as a Union Jack, has been used since 1603 when the Scottish King James VI became the king of England.'
        }
    ];
    loadCountries(countries);
});

function loadCountries(countries){
    var content = '';
    countries.forEach(function(c){
        content +=
            '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" style="margin-top: 20px;">'+
                '<div class="card Card">'+
                    '<img class="card-img-top" src="'+c['flag']+'" alt="Card image cap">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+c['name']+'</h5>'+
                        '<p class="card-text">'+c['description']+'</p>'+
                    '</div>'+
                '</div>'+
          '</div>';
    });
    $('#Countries').html(content);
}