
function generator(matLen, gr, grEat, pr, sn, cw, vl, la) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < sn; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < cw; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < vl; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < la; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }
    return matrix;
}

let side = 20;

let matrix = generator(15, 0, 0, 0, 0, 0, 0, 10);
var grassArr = []

var grassEaterArr = []

var predatorArr = []

var sunkArr = []

var cowArr = []

var volcanoArr = []

var lavaArr = []

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y);
                grassEaterArr.push(ge);

            }
            else if (matrix[y][x] == 3) {
                var ge = new Predator(x, y);
                predatorArr.push(ge);

            }
            else if (matrix[y][x] == 4) {
                var ge = new Sunk(x, y);
                sunkArr.push(ge);

            }
            else if (matrix[y][x] == 5) {
                var ge = new Cow(x, y);
                cowArr.push(ge);

            }
            else if (matrix[y][x] == 6) {
                var ge = new Volcano(x, y);
                volcanoArr.push(ge);

            }
            else if (matrix[y][x] == 7) {
                var ge = new Lava(x, y);
                lavaArr.push(ge);

            }
            else if (matrix[y][x] == 8) {

            }
        }
    }

}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 4) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("black");
                rect(x * side, y * side, side, side);

            }        
            else if (matrix[y][x] == 7) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
        }

    }
    for (i in grassArr) {
        grassArr[i].mul()

    }
    for (i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()

    }
    for (i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }

    for (i in cowArr) {
        cowArr[i].mul()
        cowArr[i].eat()

    }
    for (i in lavaArr) {
        lavaArr[i].mul()

    }
}



