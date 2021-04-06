class TextBox {

    constructor(parentElement, eventBus, initialValue) {
        this.parentElement = parentElement;
        this.eventBus = eventBus;
        this.initialValue = initialValue;
        this.setupUi();
    }

    setupUi() {
        this.textBoxElement = document.createElement("input");
        this.textBoxElement.classList.add("text-box");
        this.textBoxElement.type = "number";
        this.textBoxElement.min = "3";
        this.textBoxElement.max = "10";
        this.textBoxElement.value = this.initialValue;
        this.parentElement.appendChild(this.textBoxElement);
        this.initalizeHandlers();
    }

    initalizeHandlers() {
        this.textBoxElement.addEventListener("change", () => {
            this.eventBus.emit("changeBoardSize", this.textBoxElement.value);
        });
    }
}