import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Allows for HTTP Client Import

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './services/hero.service';
import { PokeService } from './services/poke.service';
import { RocpService } from './services/rocp.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProfileComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'profile/:heroname', component: ProfileComponent}, // the /:heroName signifies a path parameter
      {path: 'superheroes', component: HeroListComponent},
      // {path: '', redirectTo: 'superheroes', pathMatch: 'full'}, // In order to trigger route, have to exactly match
      {path: '**', redirectTo: 'superheroes'} // Any nonfound value goes to super hero - make it last path
    ])
  ],
  providers: [HeroService, PokeService, RocpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
