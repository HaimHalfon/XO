class EventBus {

    constructor() {
        this.handlers = {};
    }

    on(eventName, handler) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(handler);
        return () => {
            this.handlers[eventName] = this.handlers[eventName].filter((h) => h !== handler);
        };
    }

    emit(eventName, ...args) {
        const handlers = this.handlers[eventName] || [];
        for (let handler of handlers) {
            handler(...args);
        }
    }

}

const eventBus = new EventBus();