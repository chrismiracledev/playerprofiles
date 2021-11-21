console.log("1");
function getPlayers() {
    console.log("2");
    var request = new XMLHttpRequest()

    request.open('GET', 'https://statsapi.web.nhl.com/api/v1/teams/12/roster', true)
    request.onload = function() {
        //Begin accessing JSON Data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            var card = ''
            var i = 0;
            data.roster.forEach(player => {
                
                console.log(i);
                console.log(player);
                //getPlayer(player.person.id)
                card = card + '<div class="card col-12 col-lg-6 col-xl-4 my-3"><div class="row"><div class="col-5"><img class="img-fluid" src="images/CanesHeadshots/' + player.person.fullName + 'Headshot.jpg" alt="' + player.person.fullName + 'Headshot"></div> <!-- col --><div class="col-7"><div class="card-body"><h5 class="card-title">' + player.person.fullName + ' - ' + player.position.abbreviation + '</h5><p class="card-text">' + player.position.name + ' - ' + player.jerseyNumber + '</p></div> <!-- card body --></div> <!-- col --></div> <!-- row --></div> <!-- ' + player.person.fullName + ' card -->';

                i++;
            })
            document.getElementById("player__cards").innerHTML = card
        } else {
            console.log('error');
        }
    }

    request.send()
}