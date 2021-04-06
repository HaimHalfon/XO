class Board_ui {

    constructor(parentElement, eventBus, size) {
        this.parentElement = parentElement;
        this.eventBus = eventBus;
        this.size = size;
        this.board = new Board(size);
        this.setupUi();
    }

    setupUi() {
        this.boardElement = document.createElement("div");
        this.boardElement.classList.add("board");
        let row, card;
        for (let i = 0; i < this.size; i++) {
            row = document.createElement("div");
            row.classList.add("row");
            for (let j = 0; j < this.size; j++) {
                card = document.createElement("div");
                card.classList.add("card");
                card.index = { i, j };
                row.appendChild(card);
            }
            this.boardElement.appendChild(row);
        }
        this.parentElement.appendChild(this.boardElement);
        this.initalizeHandlers();
    }

    initalizeHandlers() {
        this.boardElement.addEventListener("click", (ev) => {
            const card = ev.target;
            if (!card.classList.contains("card"))
                return;
            const res = this.board.put(card.index.i, card.index.j);
            if (!res)
                return;
            card.textContent = res;
            if (this.board.checkWin())
                alert("win");
        });
    }
}