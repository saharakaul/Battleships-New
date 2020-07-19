//Global Variables
let hits = 0;
let misses = 0;


function createGridArray() {
    //Create and return a grid array
    return [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ] 
}

function createDivGrid(grid){
    
    for (let row = 0; row < NUM_ROWS; row ++){
        for (let col = 0; col < NUM_COL; col ++){
            //Create a div for each element in 2d grid 
            let divEl = document.createElement("div");
            divEl.id = "points"
            
            //add Data values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            //Add an event listener to each divEl
            divEl.addEventListener("click", cellClicked)
            //Add div to container
            document.getElementById("container").append(divEl);
            //generateRandomLocation();
            //if (row == locationRow && col == locationCol) {
                grid[row][col] = 1;
            } 
        
    }





function cellClicked() {
    
    }
    //Get row and col of the clicked cell
    //Get row and col of the clicked cell
    //let row = event.target.dataset.row;
    //let col = event.target.dataset.col;

    //clear class list of cell
    //event.target.classList = "";
    //grid[row][col] = 0; // set grid to white
    
}


function checkIfEqual(arrayRow, arrayCol, num) {
//let locationRow = Math.randomInt(0, 10);
//let locationCol = Math.randomInt(0, 10);  

//let shipRow = []
let locationRow = Math.randomInt(0, 10);
let locationCol = Math.randomInt(0, 10);
arrayRow.push(location);
arrayCol.push(location);

for (let i = 0; i < num; i++) {
    array.push(location + i);
}
let locationX =  Number(document.getElementById("rowCoor").value);
let locationY = Number(document.getElementById("colCoor").value);

for (let n = 0; n< arrayRow.length; n++){
    if (locationX == arrayRow[n]) {
        for (let s = 0; s < arrayCol.length; s++) {
            if (locationY == arrayCol[s]) {
                hit ++;
                console.log("hit");
            }
        }
    } else {
        miss ++
        console.log("miss")
    }
}



//if (locationX == locationRow && locationY == locationCol) {
  //  hits++;
    // document.getElementById("hit").innerHTML = hits;
//} else {
  //  misses++;
    //document.getElementById("miss").innerHTML = misses;
//}

}
let shipRow = []
checkIfEqual(shipRow, shipCol, 10);
