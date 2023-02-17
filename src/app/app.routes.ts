import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

let routes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'contact', component: ContactComponent},
    {path:'sign-up', component: SignUpComponent},
    {path:'user', component: UserProfileComponent},
    {path:'', component: UserProfileComponent},
];

export {routes};