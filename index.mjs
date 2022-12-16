let combination = []
let playCom = []
let level = 1
let counter = 0 
let playing = true


function wrongAnswer() {
    let spaceElement = document.querySelector("#game" ).classList.add("wrong")

 
    setInterval(() =>{
        let spaceElement = document.querySelector("#game" ).classList.remove("wrong")
    }
, 1000)

function rightAnswer(){{

    let spaceElement = document.querySelector("#game" ).classList.add("right")


    setInterval(() =>{
        let spaceElement = document.querySelector("#game" ).classList.remove("right")
    }
    , 1000)
    playing=true
    nextLevel(++level)
    let levelIndicator = document.querySelector("#score")

    levelIndicator.textContent = "Level: "+level
    playCom = []

}}
}
function clickHandler(e){   
    console.log(playing)
    
    if (!playing){
        e.target.style = "background-color: red";
        setTimeout(() => {e.target.style = "background-color: lime" }, 100);
        playCom.push(Number(e.target.id[5]))
        console.log(playCom)
        
        for (let i = 0; i < playCom.length; i++) {
            if(combination[i] !== playCom[i]){
                combination = []
                playCom = []
                level = 1
                let levelIndicator = document.querySelector("#score")
                levelIndicator.textContent = "Level: 1"
                wrongAnswer()
                nextLevel(level)
                break
            }
            
        }
        if(playCom.toString() === combination.toString()){
            rightAnswer()
        }

    }
}
function nextLevel(lvl){
   
    function nextSpace(){
        let space = Math.floor(Math.random() * 9) +1
        
        combination.push(space)
    }
    
    function playSequence(){
        
        console.log(combination)
        space = combination[counter]
        let spaceElement = document.querySelector("#space" +space)

        spaceElement.style = "background-color: red";
        setTimeout(() => {spaceElement.style = "background-color: lime" }, 500);
        counter++
        if (counter === lvl){
            clearInterval(intId)
            setTimeout( () =>{playing=false}, 1000)
            counter = 0 
        }
    }
    
    nextSpace()
    if (level===10){
        document.querySelector("#secret").textContent = "You have unlocked the secret message, which is uh... this? Well I don't know what you wanted, its not very secret I did tell you exactly how to get to it. Well good memory I guess? And merry christmas! And good luck with level 11 lol."

        
        
    }
    let intId = setInterval(playSequence, 1000)

    }


function main(){

    const game = document.querySelector("#game")
    
    for(let i =1; i <= 9; i++ ){
        let div = document.createElement("div")
        div.id = "space" +i
        game.addEventListener("click", clickHandler)
        game.append(div)
    }
    
    nextLevel(level)

}


window.addEventListener("load", main)