class Application {

    constructor(parentElement, eventBus, sizeDefault) {
        this.parentElement = parentElement;
        this.eventBus = eventBus;
        this.sizeDefault = sizeDefault;
        this.setupUi();
    }

    setupUi() {
        this.applicationElement = document.createElement("div");
        this.applicationElement.classList.add("application");
        this.parentElement.appendChild(this.applicationElement);
        //
        this.textBox = new TextBox(this.applicationElement, this.eventBus, this.sizeDefault);
        this.board_ui = new Board_ui(this.applicationElement, this.eventBus, this.sizeDefault);
        //
        this.initalizeHandlers();
    }

    initalizeHandlers() {
        this.eventBus.on("changeBoardSize", (newSize) => {
            this.applicationElement.removeChild(this.board_ui.boardElement);
            this.board_ui = new Board_ui(this.applicationElement, this.eventBus, newSize);
        });
    }
}

const application = new Application(document.body, eventBus, 3);