//Simulation
const SIM = ([width, height], [x, y], commands) => {
    createTable(width, height);
    moveItem(x, y, commands);
}

//SIM(table-width and heigh, item position x, y axis, array of commands);
SIM([4, 4], [2, 2], [1, 4, 1, 3, 2, 3, 2, 4, 1, 0]);