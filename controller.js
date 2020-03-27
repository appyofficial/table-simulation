/*  COMMANDS:
    0: End Simulation
    1: Move Forward
    2: Move Backward
    3: Turn Right
    4: Turn Left
*/

//Tracking item and displaying it on table
function trackItem(x, y) {
    const itemFell = () => {
        try {
            throw 'Item fell';
        } catch (error) {
            console.log(error);
        }
    }
    (x < 0 || y < 0) || (tableCells[x] === undefined || tableCells[y] === undefined) ?
        itemFell() : tableCells[y][x].style.backgroundColor = 'lightgreen';
}

//Moving items on table
function moveItem(x, y, commands) {
    //directions
    let forwardDir = 'y -= 1';
    let backwardDir = 'y += 1';
    let turnRightForwardDir = ['x += 1', 'y += 1', 'x -= 1', 'y -= 1'];
    let turnRightBackwardDir = ['x -= 1', 'y -= 1', 'x += 1', 'y += 1']
    let turnLeftForwardDir = ['x -= 1', 'y += 1', 'x += 1', 'y -= 1'];
    let turnLeftBackwardDir = ['x += 1', 'y -= 1', 'x -= 1', 'y += 1'];

    const moveForward = () => {
        return eval(forwardDir);
    }

    const moveBackward = () => {
        return eval(backwardDir);
    }

    const turnRight = () => {
        if (turnRightForwardDir.indexOf(forwardDir) === turnRightForwardDir.length - 1) {
            forwardDir = turnRightForwardDir[0];
            backwardDir = turnRightBackwardDir[0];
        }
        else {
            forwardDir = turnRightForwardDir[turnRightForwardDir.indexOf(forwardDir) + 1];
            backwardDir = turnRightBackwardDir[turnRightBackwardDir.indexOf(backwardDir) + 1];
        }
    }

    const turnLeft = () => {
        if (turnLeftForwardDir.indexOf(forwardDir) === turnLeftForwardDir.length - 1) {
            forwardDir = turnLeftForwardDir[0];
            backwardDir = turnLeftBackwardDir[0];
        }
        else {
            forwardDir = turnLeftForwardDir[turnLeftForwardDir.indexOf(forwardDir) + 1];
            backwardDir = turnLeftBackwardDir[turnLeftBackwardDir.indexOf(backwardDir) + 1];
        }
    }

    commands.forEach(command => {
        if (command === 0) {
            try {
                tableCells[y][x].style.backgroundColor = 'darkgreen';
                tableCells[y][x].textContent = 'I am home';
                throw (`The position of item is ${x},${y}`);
            } catch (result) {
                console.log(result);
            }
        }
        else if (command === 1) { moveForward(); trackItem(x, y); }
        else if (command === 2) { moveBackward(); trackItem(x, y); }
        else if (command === 3) { turnRight() }
        else if (command === 4) { turnLeft() }
        else {
            console.log('Invalid Command');
            return 'Invalid command!'
        }
    });

}