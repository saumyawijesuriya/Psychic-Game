


var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];


    var wins = 0;
    var losses = 0;
    var guesses = 5;
    var userChoices = [];
    
    

    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice)
    
    window.onload = event;
    
    document.onkeypress = function(event) {
    
    var uGuess = event.key;

    var computerChoice = letters[Math.floor(Math.random() * letters.length)];

     var userArray = ['a','b','c','d','e','f','g','h','i','j','k','l',
     'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
     
        if(userArray.indexOf(uGuess) > -1){

            if (uGuess === computerChoice){
    
                wins++;
                guesses = 5;
                userChoices =[];
            }
            else{
                
                userChoices.includes(uGuess);
            }
                
                
            if(uGuess != computerChoice){
                    guesses--;
                    userChoices.push(uGuess);}
            }   
             if(guesses===0){
                guesses=5;
                userChoices=[];
                losses++;
                alert("looser...!");
            }
        
        

    
    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
    document.getElementById('uChoices').innerHTML = "Your Guesses so far:" + userChoices.join(",");

}