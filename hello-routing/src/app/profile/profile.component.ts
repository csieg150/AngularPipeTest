import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RocpService } from '../services/rocp.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentHero = 'No Hero';

  // The below is a singular object that will be connected to a web form.
  todos = new FormGroup({
    title: new FormControl(''),

  });

  constructor(private Route: ActivatedRoute, private rocp: RocpService) {  }

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

  postTodoEc2(todoStub: FormGroup): void{
    const form = JSON.stringify(todoStub.value); // Stringify values due to request body type content being json
    this.rocp.postTodo(form).subscribe(
      response => {
        console.log('Success');
      }
    );
  }

  ngOnInit(): void {
    this.currentHero = this.Route.snapshot.paramMap.get('heroname'); // Fetches 'heroname' from the route
  }

}
