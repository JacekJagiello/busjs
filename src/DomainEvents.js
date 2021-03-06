class DomainEvents {
    constructor() {
        this.events = []
        this.recording = false
    }

    recordThat(eventName, data) {
        if(!this.recording) {
            return
        }

        this.events.push(Object.assign({name: eventName}, data))
    }

    enableRecording() {
        this.recording = true
    }

    disableRecording() {
        this.recording = false
    }

    isRecording() {
        return this.recording
    }

    recordedEvents() {
        return this.events
    }

    erseEvents() {
        this.events = []
    }
}

export default new DomainEvents
