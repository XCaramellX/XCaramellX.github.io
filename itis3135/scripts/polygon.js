let sidesOfShape = getPrompt();   
let i = 0;
while(i == 0) {
    if(validateEntry(sidesOfShape))
    {
        let shape = getShape(sidesOfShape);
        alert(shape);
        i = 1;

    } 
    else
    {
        sidesOfShape = getPromptError();
    }

}

    

function getPrompt() {
    let polySides = parseFloat(prompt("Plum Rabbit would like to know how many sides the shape is", "1"));
    
    return polySides;
}

function getPromptError(){
    let polySides = parseFloat(prompt("You've entered something other than a number or a number not 1-10"));
    return polySides;
}

function getShape(sides)
{
    sides = Math.round(Math.abs(sides));
    switch(sides)
    {
        case 1:
            
            return  "henagon";
             
            break;
        case 2:
            return "digon";
           
            break;
        case 3:
           return "trigon";
            
            break;
        case 4: 
        
            return "tetragon";
            
            break;
        case 5:
            return "pentagon";
            
            break;
        case 6:
            return "hexagon";
            break;
        case 7:
            return "heptagon";
            break;
        case 8:
            return "octagon";
            break;
        case 9:
            return "enneagon";
            break;
        case 10:
            return "decagon";
            break;
        default:
              break;

            

    }

}

function validateEntry(sides)
{

 if(typeof sides == 'number')
    {
    if(sides >= -10 && sides <= 10)
        {
        
       return (sides == sides);
        }

    }

 
}