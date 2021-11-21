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

                var card__button__id = 'card__button__' + player.person.id

                card = card + '<div class="col-12 col-lg-6 col-xl-4 my-1 my-lg-3"><button class="card-button" id="' + card__button__id + '"><div class="card"><div class="card-block"><div class="row"><div class="col-5"><img class="img-fluid" src="images/CanesHeadshots/' + player.person.fullName + 'Headshot.jpg" alt="' + player.person.fullName + 'Headshot"></div> <!-- col --><div class="col-7"><div class="card-body"><h6 class="card-title">' + player.person.fullName + ' - ' + player.position.abbreviation + '</h6><p class="card-text">' + player.position.name + ' - ' + player.jerseyNumber + '</p></div> <!-- card body --></div> <!-- col --></div></div></div></button></div>'
                
                i++;
            })
            document.getElementById("player__cards").innerHTML = card
        } else {
            console.log('error');
        }
    }

    request.send()
}


// Get the modal
var modal = document.getElementById("card__modal");

// Get the button that opens the modal
var btn = document.getElementById("card__button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}