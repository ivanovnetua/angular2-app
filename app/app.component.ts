import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app/app.component.html",
    styleUrls: ["./app/app.component.css"]
})
export class AppComponent {
    tickHandler(value) {
        console.log(`Time: ${value}s`);
    }
}