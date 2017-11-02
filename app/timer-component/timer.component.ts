import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "timer",
    templateUrl: "./timer.component.html"

})
export class TimerComponent {

    private intervalObject: any;
    timerValue: number = 0;

    @Output()
    tick: EventEmitter<number> = new EventEmitter;

    start() {
        if (this.intervalObject) return;
        this.intervalObject = setInterval(() => { 
            this.addTime();
        }, 1000);

    }

    stop() {
        if (!this.intervalObject) return;
        clearInterval(this.intervalObject);
        this.intervalObject = false;
    }

    addTime() {
        this.timerValue++;
        this.tick.emit(this.timerValue);
    }

}