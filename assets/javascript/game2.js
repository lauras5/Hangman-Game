//research for assignment, might need in code

charAt() //returns the character at the specified index, written as...
length //returns the length of the string, written as...
charCodeAt()//returns the unicode of the character at specified index, written as...
fromCharCode()//converts Unicode values to characters, written as..
indexOf() //returns the position of the first found occurence of a specified value in a string, written as..
split() //splits a string into an array of substrings


var buttons = function (ID) {
    //created element for ul to hold li
    var ul = document.createElement('ul');
    ul.id = 'letterArray';
    for (var i = 0; i < letters.length; i++) {
        li = document.createElement('li'); 
        li.id = 'letter'+ i;  
            //increases by 1 letter
            li.innerHTML = letters[i];
            ul.append(li);
        }
    ID.append(ul);
}

    var myLetters = document.getElementById("buttons");
    buttons(myLetters);


     //cant pick specific letter
     $("#buttons").on("click", function() {
         console.log("you chose " + letters)
     })

         // //array of letters
    // var a = 65;
    // var charArray = {};
    // for (var i = 0; i<26; i++)
    // charArray[String.fromCharCode(a + i)] = String.fromCharCode(a + i);


        
    //check letters
    //WHEN KEY IS PRESSED, 
    //RUN IT THROUGH THE GENERATED WORD,
    //IF VAR E = LETTER IN THAT STRING
    //CHANGE LETTER IN STRING FROM _ TO PRESSED KEY
    //KEY COLOR CHANGES TO LIGHT BLUE

    //ELSE IF LETTER IS NOT IN STRING, 
    //LIVES --
    //KEY COLOR CHANGES TO NAVY


    //alert key pressed
    //create loop to connect to letters array

<body>
    <h1 id = "numGuess"></h1>
    <h3 id="myNum"><h3>
    <div id="crystals"></div>
</body>

<script>
    {
    //script

    //get random #
    var total = 0
    var randNum = Math.floor(Math.random * 100)
    $("#numGuess").text("click...blah")

    for (var i=0; i<4; i++) {
        //gives image new value
        var myImage = $("<img>")
        //gives div an image
        myImage.attr("src", "crystal.jpg")
        myImage.attr("class", "myCrystal")
        myImage.attr("date-crystalValue", Math.floor(Math.random()* 20))
        $("#crystals").append(myImage)
    }

    $(".myCrystal".on("click", function()
        var crystalNum = parseInt//takes string and converts into number//($(this).attr("data-crystalValue"))
        total += crystalNumb //will bring string
        $("#myNum").text(total)
        if(total === randNum) {
            alert(you win)
        }
        else if ( total > )
    })


    //conditions to check win or lose
}
    
    //check letters
    //WHEN KEY IS PRESSED, 
    //RUN IT THROUGH THE GENERATED WORD,
    //IF VAR E = LETTER IN THAT STRING
    //CHANGE LETTER IN STRING FROM _ TO PRESSED KEY
    //KEY COLOR CHANGES TO LIGHT BLUE

    //ELSE IF LETTER IS NOT IN STRING, 
    //LIVES --
    //KEY COLOR CHANGES TO NAVY


    //alert key pressed
    //create loop to connect to letters array
    </script>