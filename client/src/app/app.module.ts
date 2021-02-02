import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UsersComponent } from "./components/users/users.component";

import { UsersService } from "./services/users.service";
import { UserFormComponent } from "./components/user-form/user-form.component";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        UsersComponent,
        UserFormComponent,
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
    providers: [UsersService],
    bootstrap: [AppComponent],
})
export class AppModule {}
