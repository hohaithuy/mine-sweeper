//Mine sweeper

function make2DArray(cols, rows){
    var arr = new Array(cols);
    for (var i = 0; i < cols; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;
var cols;
var rows;
var w = 20;
var totalBees = 10;



function setup(){
    createCanvas(202, 202);
    cols = floor(width / w);
    rows = floor(height / w);
    grid = make2DArray(cols, rows);
    var i, j;
    for (i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            grid[i][j] = new Cell(i, j, w);
        }
    }

    for(var n = 0; n < totalBees; n++){
        var i = floor(random(cols));
        var j = floor(random(rows));
        if (grid[i][j].bee == true) n--;
        else grid[i][j].bee = true;
    }

    for (i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            grid[i][j].countBees();
        }
    }


}


function mousePressed(){
    for (var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            if(grid[i][j].contains(mouseX, mouseY)){
                grid[i][j].reveal();
            }
        }
    }
}






function draw(){
    background(255);
    for (var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].show();
        }
    }
}