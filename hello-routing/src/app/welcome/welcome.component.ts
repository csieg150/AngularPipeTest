import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';
import { RocpService } from '../services/rocp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // Below we inject our Service into the constructor, making it a dependency.
  constructor(private pokes: PokeService, private rocp: RocpService, private router: Router) { }

  swapView(): void{
    this.router.navigate(['/superheroes']); // Reminder to make it an array.
  }

  pokemonButton1(): void{
    console.log('hi, button clickt');
    this.pokes.retrievePokemon().subscribe( // When new info is published to the stream, activate the callback
      // Passing in an arrow function for our callback
      response => {
        const name = 'name';
        console.log(response);
        console.log(response[name]);
      }
    ); // Activates a callback function
  }

  pokemonButton2(): void{
    console.log('2nd button');
    this.pokes.retrievePokemon2().subscribe(
      response => {
        console.log(response);
        console.log(response.name);
        console.log(response.id);
        console.log(response.base_experience);
      }
    );
  }

  getTodos(): void{
    this.rocp.getTodos().subscribe(
      response => {
        console.log(response);
        for (const temp of response){
          console.log(temp);
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
