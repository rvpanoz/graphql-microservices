import EventEmitter from "events";

class EventsBus extends EventEmitter {
  //@ts-ignore
  async publish(event, args) {
    return this.emit(event, args);
  }

  //@ts-ignore
  async subscribe(event, handler) {
    this.on(event, handler);
  }
}

export default EventsBus;
