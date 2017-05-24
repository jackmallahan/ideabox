//*********************Variables***************************//
var ideaTitle = $('.title-input').val();
var ideaBody = $('.body-input').val();
var ideaList = $('.idea-container');
var myIdeas = []

//*********************EVENT LISTENERS**********************//

//create new card on button click
// $('.save-button').on('click', function(){
//   newIdeaCard();
// })

$('.save-button').on('click', function() {
  console.log('array before adding: ', myIdeas)
  var ideaTitle = $('.title-input').val();
  var ideaBody = $('.body-input').val();
  var newIdea = {title: ideaTitle, body: ideaBody}
  var ideaCard = $('.idea-container').prepend(`
    <article class="idea-card">
      <div class="card-top">
        <h2>${ideaTitle}</h2>
        <button class="delete icon"></button>
      </div>
      <p class="idea-text">${ideaBody}</p>
      <div class="card-bottom">
        <button class="up-vote icon"></button>
        <button> class="down-vote icon"></button>
        <p class="quality">quality: swill</p>
      </div>
      <hr>
    </article>
    `)
  console.log(newIdea)
//push into the array
  myIdeas.push(newIdea);
  console.log(myIdeas);
//stringify that shit
  var stringifiedIdea = JSON.stringify(myIdeas);
//add that shit to localStorage
  localStorage.setItem('idea', stringifiedIdea)
});
//get shit back from JSON
  function getIdeasFromStorage () {
    if (localStorage.getItem('idea')) {
      var storedIdeas = localStorage.getItem('idea');
      var parsedIdeas = JSON.parse(storedIdeas);
      console.log("log idea", parsedIdeas);

      parsedIdeas.forEach(function(idea){
        var ideaCard = `<article class="idea-card">
            <div class="card-top">
              <h2>${ideaTitle}</h2>
              <button class="delete icon"></button>
            </div>
            <p class="idea-text">${ideaBody}</p>
            <div class="card-bottom">
              <button class="up-vote icon"></button>
              <button class="down-vote icon"></button>
              <p class="quality">quality: swill</p>
            </div>
            <hr>
          </article>
          `

          ideaList.append(ideaCard);
      })
    } else {console.log("nothing here bitch")}
  }
    $(document).ready(function() {
      getIdeasFromStorage();
    })
//**********************Functions**************************//

//function for creating new idea card
function newIdeaCard(){
  var ideaTitle = $('.title-input').val();
  var ideaBody = $('.body-input').val();
  var ideaCard = $('.idea-container').prepend(`
    <article class="idea-card">
      <div class="card-top">
        <h2>Example Idea 1</h2>
        <button class="delete icon"></button>
      </div>
      <p class="idea-text">I have no ideas because my brain is filled with coding stuff...</p>
      <div class="card-bottom">
        <button class="up-vote icon"></button>
        <button class="down-vote icon"></button>
        <p class="quality">quality: swill</p>
      </div>
      <hr>
    </article>
    `)
  };

//******************Local Storage***************************//



// var Idea = function(title, body){
//   this.title = title;
//   this.body = body;
// };
//
// var stringifiedIdeas = JSON.stringify(ideaTitle)
// var parsedIdeas = JSON.parse()
//
// localStorage.setItem('ideas', stringifiedIdeas)
