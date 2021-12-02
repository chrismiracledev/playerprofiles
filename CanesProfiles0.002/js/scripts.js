const player_ids = []
const player_links = []

const player_info = []

const api_url = 'https://statsapi.web.nhl.com/api/v1/teams/12/roster'

function createModal(click) {
    var playerIndex = click.getAttribute('data-index');
    

    var modal = document.querySelector("#card__modal");
    modal.style.display = "block";

    document.querySelector("#modal__player__firstName").innerHTML = player_info[playerIndex].firstName;
    document.querySelector("#modal__player__lastName").innerHTML = player_info[playerIndex].lastName;
    document.querySelector("#modal__player__image").setAttribute("src", `images/canesHeadshots/${player_info[playerIndex].fullName}Headshot.jpg`);
    document.querySelector("#modal__player__number").innerHTML = `#${player_info[playerIndex].primaryNumber}`;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    console.log("click: ", click);
    console.log("playerIndex: ", playerIndex);
    console.log("player_info: ", player_info[playerIndex]);
    getPlayersYearlyStats(player_info[playerIndex].id, playerIndex);

}

async function getIndividualPlayer(player_id, player_link) {
    const player_url = 'https://statsapi.web.nhl.com' + player_link;
    const response = await fetch(player_url);
    const data = await response.json();
    console.log("data", data);
    var card = document.querySelector("#player__cards").innerHTML;
    // const { id, fullName, link, firstName } = data.people[0];
    var i = player_info.length;
    var currentPlayer = {}
    currentPlayer.id = data.people[0].id;
    currentPlayer.fullName = data.people[0].fullName;
    currentPlayer.link = data.people[0].link;
    currentPlayer.firstName = data.people[0].firstName;
    currentPlayer.lastName = data.people[0].lastName;
    currentPlayer.primaryNumber = data.people[0].primaryNumber;
    currentPlayer.birthDate = data.people[0].birthDate;
    currentPlayer.currentAge = data.people[0].currentAge;
    currentPlayer.birthCity = data.people[0].birthCity;
    currentPlayer.birthStateProvince = data.people[0].birthStateProvince;
    currentPlayer.birthCountry = data.people[0].birthCountry;
    currentPlayer.nationality = data.people[0].nationality;
    currentPlayer.height = data.people[0].height;
    currentPlayer.weight = data.people[0].weight;
    currentPlayer.shootsCatches = data.people[0].shootsCatches;
    currentPlayer.primaryPositionCode = data.people[0].primaryPosition.code;
    currentPlayer.primaryPositionName = data.people[0].primaryPosition.name;
    currentPlayer.primaryPositiontype = data.people[0].primaryPosition.type;
    currentPlayer.primaryPositionAbbreviation = data.people[0].primaryPosition.abbreviation;

    player_info[i] = currentPlayer
    

    const fullName = data.people[0].fullName;
    // build your card html and shove it in the div here
    card = card + `
        <div class="col-12 col-lg-6 col-xl-4 my-1 my-lg-3">
            <button class="card-button" id="card__button__${currentPlayer.id}" data-index="${i}" onclick="createModal(this)">
                <div class="card" id="${currentPlayer.id}">
                    <div class="card-block">
                        <div class="row">
                            <div class="col-4 pl-0">
                                <img class="img-fluid" src="images/CanesHeadshots/${currentPlayer.fullName}Headshot.jpg" alt="${currentPlayer.fullName}Headshot">
                            </div> <!-- col -->
                            <div class="col-8 pl-0">
                                <div class="row card-body px-0">
                                    <div class=" col-4 border-right border-secondary">
                                        <h6 class="card-title">#${currentPlayer.primaryNumber}</h6>
                                    </div>
                                    <div class="col-8 pr-0">
                                        <h6 class="text-left">${currentPlayer.firstName}</h6>
                                        <h6 class="text-left">${currentPlayer.lastName}</h6>
                                    </div>
                                </div> <!-- card body -->
                            </div> <!-- col -->
                        </div>
                    </div>
                </div>
            </button>
        </div>
    `;
    document.querySelector("#player__cards").innerHTML = card;
}



console.log("1. player info: ", player_info);


async function getPlayersYearlyStats(id, i) {
    player_stat_url = 'https://statsapi.web.nhl.com/api/v1/people/' + id + '/stats?stats=yearByYear';
    const response = await fetch(player_stat_url);
    const data = await response.json();
    console.log(player_info[i].fullName, " stats: ", data);

    var clickedPlayer = {}
}



async function getPlayers() {
    const response = await fetch(api_url);
    const data = await response.json();
    var i = 0;
    data.roster.forEach(player => {
        const { id, fullName, link } = data.roster[i].person;
        player_ids[player_ids.length] = id;
        player_links[player_links.length] = link;
        i++;
    });
    // loop over the players and fetch each player

    for (i=0;i<player_links.length;i++) {
        getIndividualPlayer(player_ids[i], player_links[i])
    }
};

console.log("player id's: ", player_ids);
console.log("player links: ", player_links);

// const player_ids = []
// const player_links = []

// const api_url = 'https://statsapi.web.nhl.com/api/v1/teams/12/roster'
// async function getPlayers() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   console.log(data);
//   var card = ''
//   var i = 0;
//   data.roster.forEach(player => {
//     const { id, fullName, link } = data.roster[i].person;
//     const jerseyNumber = data.roster[i].jerseyNumber;
//     const { code, name, type, abbreviation } = data.roster[i].position;

//     player_ids[player_ids.length] = id
//     player_links[player_links.length] = link

//     console.log(jerseyNumber)
//     console.log(fullName)
//     console.log(link)
//     console.log(id)

//     var card__button__id = 'card__button__' + player.person.id

//                 card = card + `
//                   <div class="col-12 col-lg-6 col-xl-4 my-1 my-lg-3">
//                     <button class="card-button" id="card__button__${id}">
//                       <div class="card" id="${id}">
//                         <div class="card-block">
//                           <div class="row">
//                             <div class="col-5">
//                               <img class="img-fluid" src="images/CanesHeadshots/${fullName}Headshot.jpg" alt="${fullName}Headshot">
//                             </div> <!-- col -->
//                             <div class="col-7">
//                               <div class="card-body">
//                                 <h6 class="card-title">${fullName} - ${player.position.abbreviation}</h6>
//                                 <p class="card-text"></p>
//                               </div> <!-- card body -->
//                             </div> <!-- col -->
//                           </div>
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 `;

//     i++;
//   })
//   document.querySelector("#player__cards").innerHTML = card;
// }



// console.log(player_ids)
// console.log(player_links)

// fetch('https://statsapi.web.nhl.com/api/v1/teams/12/roster')
//   .then(response => {
//     return response.json();
//   })
//   .then(players => {
//     console.log(players);
//   });




// console.log("1");
// function getPlayers() {
//     console.log("2");
//     var request = new XMLHttpRequest()

//     request.open('GET', 'https://statsapi.web.nhl.com/api/v1/teams/12/roster', true)
//     request.onload = function() {
//         //Begin accessing JSON Data here
//         var data = JSON.parse(this.response)
//         if (request.status >= 200 && request.status < 400) {
//             var card = ''
//             var i = 0;
//             data.roster.forEach(player => {
                
//                 console.log(i);
//                 console.log(player);
//                 //getPlayer(player.person.id)

//                 var card__button__id = 'card__button__' + player.person.id

//                 card = card + `
//                   <div class="col-12 col-lg-6 col-xl-4 my-1 my-lg-3">
//                     <button class="card-button" id="${card__button__id}">
//                       <div class="card" id="${player.person.id}">
//                         <div class="card-block">
//                           <div class="row">
//                             <div class="col-5">
//                               <img class="img-fluid" src="images/CanesHeadshots/${player.person.fullName}Headshot.jpg" alt="${player.person.fullName}Headshot">
//                             </div> <!-- col -->
//                             <div class="col-7">
//                               <div class="card-body">
//                                 <h6 class="card-title">${player.person.fullName} - ${player.position.abbreviation}</h6>
//                                 <p class="card-text"></p>
//                               </div> <!-- card body -->
//                             </div> <!-- col -->
//                           </div>
//                         </div>
//                       </div>
//                     </button>
//                   </div>
//                 `;

//                 i++;
                  
//             })

            
//             document.querySelector("#player__cards").innerHTML = card;
//         } else {
//             console.log('error');
//         }
//     }

//     request.send()
// }

// document.querySelectorAll(".card-text").forEach(item => console.log("3"))

// Get the modal
// var modal = document.getElementById("card__modal");

// // Get the button that opens the modal
// var btn = document.getElementById("card__button");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     // do things with the data here
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }