import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world-list/hello-world-list.component";
import { RouterModule } from "@angular/router";
import { ListsModule, routs } from "./list-components/index";
import { CounterComponent } from "./counter-component/counter.component";
import { TimerComponent as Timer } from "./timer-component/timer.component";


@NgModule({
    imports: [
        BrowserModule,
        ListsModule,
        RouterModule.forRoot(routs)
    ],
    declarations: [AppComponent, HelloWorldComponent, CounterComponent, Timer],
    bootstrap: [AppComponent]
})
export class AppModule {

}