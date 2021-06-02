//Mine sweeper

function make2DArray(cols, rows){
    var arr = new Array(col);
    for (var i = 0; i < cols; i++){
        arr[i] = new Array(rows);
    }
}

function cell(){
    this.bee = true;
    this.revealed = true;
}

var grid;

function setup(){
    createCanvas(200, 200);
    grid = make2DArray(20, 20);
}

function draw(){

}