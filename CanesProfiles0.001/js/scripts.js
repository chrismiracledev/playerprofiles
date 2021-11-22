const api_url = 'https://statsapi.web.nhl.com/api/v1/teams/12/roster'
async function getPlayers() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  var card = ''
  var i = 0;
  data.roster.forEach(player => {
    const { id, fullName, link } = data.roster[i].person;
    const jerseyNumber = data.roster[i].jerseyNumber;
    const { code, name, type, abbreviation } = data.roster[i].position;
    console.log(jerseyNumber)
    console.log(fullName)
    console.log(link)
    console.log(id)

    var card__button__id = 'card__button__' + player.person.id

                card = card + `
                  <div class="col-12 col-lg-6 col-xl-4 my-1 my-lg-3">
                    <button class="card-button" id="card__button__${id}">
                      <div class="card" id="${id}">
                        <div class="card-block">
                          <div class="row">
                            <div class="col-5">
                              <img class="img-fluid" src="images/CanesHeadshots/${fullName}Headshot.jpg" alt="${fullName}Headshot">
                            </div> <!-- col -->
                            <div class="col-7">
                              <div class="card-body">
                                <h6 class="card-title">${fullName} - ${player.position.abbreviation}</h6>
                                <p class="card-text"></p>
                              </div> <!-- card body -->
                            </div> <!-- col -->
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                `;

    i++;
  })
  document.querySelector("#player__cards").innerHTML = card;
}


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