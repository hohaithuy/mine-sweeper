function Cell(i, j, w){
    this.i = i;
    this.j = j;
    this.x = i * w + 1;
    this.y = j * w + 1;
    this.w = w;
    this.neigborCount = 0;
    this.bee = false;
    this.revealed = false;
}


Cell.prototype.show = function(){
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    if (this.revealed){
        if(this.bee){
            fill(135);
            ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
        }
        else{
            fill(200);
            rect(this.x, this.y, this.w, this.w);
            if (this.neigborCount > 0){
                textAlign(CENTER);
                fill(0); 
                text(this.neigborCount, this.x + this.w * 0.5, this.y + this.w - 6);
            }
        }
    }
};

Cell.prototype.countBees = function(){
    if (this.bee) return -1;
    var total = 0;
    for(var i = -1; i <= 1; i++){
        for(var j = -1; j <= 1; j++){
            if(this.i + i > -1 && this.j + j > -1 && this.i + i < cols && this.j + j < rows){
                var neigbor = grid[this.i + i][this.j + j];
                if (neigbor.bee){
                    total++;
                }
            }
        }
    }
    this.neigborCount = total;
};

Cell.prototype.contains = function(x, y){
    return x > this.x && x < this.w + this.x && y > this.y && y < this.w + this.y;
};

Cell.prototype.reveal = function(){
    this.revealed = true;
    if(this.neigborCount == 0){
        this.floodFill();
    }
    if(this.bee == true){
        this.revealALl();
    }
};


Cell.prototype.floodFill = function(){
    for(var i = -1; i <= 1; i++){
        for(var j = -1; j <= 1; j++){
            if(this.i + i > -1 && this.j + j > -1 && this.i + i < cols && this.j + j < rows){
                var neigbor = grid[this.i + i][this.j + j];
                if (!neigbor.bee && !neigbor.revealed){
                    neigbor.reveal();
                }
            }
        }
    }
};

Cell.prototype.revealALl = function(){
    for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
            grid[i][j].revealed = true;
        }
    }
};