class Board {

    constructor(size) {
        this.size = size;
        this.array = [];
        for (let i = 0; i < this.size; i++) {
            this.array[i] = [];
            for (let j = 0; j < this.size; j++) {
                this.array[i][j] = undefined;
            }
        }
        this.flag = "X";
    }

    put(i, j) {
        if (!this.array[i][j]) {
            this.array[i][j] = this.flag;
            this.changeFlag();
        }
        return this.array[i][j];
    }

    checkWin() {
        const checkWinForRow = (row) => row.reduce(pairIsEqualAndNotEmpty) != undefined;
        const pairIsEqualAndNotEmpty = (x, y) => (x == y && x != undefined) ? x : undefined;
        const rotate = (arr) => arr.map((row, i) => row.map((val, j) => arr[arr.length - 1 - j][i]));
        const getDescendingDiagnoal = (arr) => arr.map((row, i) => row.filter((val, j) => i == j)).flat();

        // horizontal
        return this.array.some(checkWinForRow) ||
            // vertical
            rotate(this.array).some(checkWinForRow) ||
            // ascending diagnoal
            checkWinForRow(getDescendingDiagnoal(this.array)) ||
            // descending diagnoal
            checkWinForRow(getDescendingDiagnoal(rotate(this.array)));
    }

    changeFlag() {
        if (this.flag == "X")
            this.flag = "O";
        else
            this.flag = "X";
    }
}