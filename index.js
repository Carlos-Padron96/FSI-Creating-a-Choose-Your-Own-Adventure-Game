let firstAnswer  = window.prompt('Do you head "left" or "right"?')
if(firstAnswer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you "follow it", or "continue on your path"?`)
if(secondAnswer === 'follow it'){
    let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, 
    nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. 
    They are content with you staying, 
    but you wonder if you should alert the world to this magical safe haven
    Do you "stay" or "spread the word".`)
if(thirdAnswer === 'spread the word'){
    let fourthAnswer = window.prompt(`After leaving the cat colony, 
    you are never able to find it again; without proof, 
    no one believes your story, which passes into legend nonetheless.`)
if(thirdAnswer === 'stay'){
    let fourthAnswer = window.prompt(`You live happily amongst the cats for the rest of your days.`)
            }
        }
    }
}    
else if(firstAnswer === 'right'){
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
if(secondAnswer === 'treasure'){
    let thirdAnswer = window.prompt (`You trip over a piece of treasure,
    waking the dragon!
    causing the dragon to breathe fire on you and ending your adventure`)
if(secondAnswer === 'another path'){
    let thirdAnswer = window.prompt (`You find a larger pile of treasure that is left unguarded, 
    You grab all that you can carry and leave the cave a very rich sorcerer`)
        }
    }
}