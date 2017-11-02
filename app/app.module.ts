import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world-list/hello-world-list.component";
import { RouterModule } from "@angular/router";
import { ListsModule, routs } from "./list-components/index";
import { CounterModule } from "./counter-component/counter.module";

@NgModule({
    imports: [
        BrowserModule,
        ListsModule,
        CounterModule,
        RouterModule.forRoot(routs)
    ],
    declarations: [AppComponent, HelloWorldComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}