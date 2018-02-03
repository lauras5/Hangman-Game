$(document).ready(function(){
    var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var show = ["rugrats", "doug", "daria", "pokemon", "recess", "anamaniacs", "hey arnold"]
    var randomShow = show[Math.floor(Math.random() * 
    show.length)]
    var score = 0
    var lives = 6
    var space;

    console.log(randomShow)
    console.log(score)
    console.log(lives)

    var buttons = function (ID) {
        var ul = document.createElement('ul');
        ul.id = 'letterArray';
        for (var i = 0; i < letterArray.length; i++) {
                li = document.createElement('li'); 
                li.id = 'letter'+ i;  
                //increases by 1 letter
                li.innerHTML = letterArray[i];
                ul.appendChild(li);
            }
        ID.appendChild(ul);
      }
    
     var myButtons = document.getElementById("buttons");
     buttons(myButtons);

     $("#buttons").on("click", function() {
         alert("you chose " + li.innerHTML)
     })

    $("#newGame").on("click", function(){
        console.log("the answer was " + randomShow) //alert isnt showing updated answers...loop?
        var newShow = $("#show").html(show[Math.floor(Math.random() * show.length)])
    })

})