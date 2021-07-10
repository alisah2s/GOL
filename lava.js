class Lava extends LivingCreature{
    constructor(x, y) {
        super(x, y)    
        this.multiply = 0;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 1000) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 7;

            var newLava = new Lava(newX, newY, 1);
            lavaArr.push(newLava);
            this.multiply = 0;
        }
    }
}


