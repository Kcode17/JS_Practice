let loc = {
    xPos: 0,
    yPos: 0,
    direction: 0,
}

function move(instructions){
    let len = instructions.length;
    currentLocation = loc;
    for(let i=0; i<len; i++){
        switch (instructions[i]){
            case 'G':
                if (currentLocation.direction == 0 || currentLocation.direction%360 == 0){
                    currentLocation.yPos += 1;
                }
                else if(currentLocation.direction == 180 || currentLocation.direction == -180){
                    currentLocation.yPos -= 1;
                }
                else if (currentLocation.direction == -90 || currentLocation.direction == -450){
                    currentLocation.xPos -= 1;
                }
                else if (currentLocation.direction == 90 || currentLocation.direction == 450){
                    currentLocation.xPos += 1;
                }
                break;
            case 'L':
                currentLocation.direction -= 90;
                break;
            case 'R':
                currentLocation.direction += 90;
                break;
            default:
                return nothing;
        }
    }
    if ((currentLocation.direction != 0) || (currentLocation.xPos == 0 && currentLocation.yPos == 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}
   

let input = prompt('Enter the Movements');
steps = input.split('');
result = move(steps);
console.log(result);
