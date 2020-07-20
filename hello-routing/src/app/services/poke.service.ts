import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Has to be specifically this - allows HTTP methods
// The above has to be Imported with HttpClientModule in app.module
import { Observable } from 'rxjs';
// The RXJS is a library of synch/asynch things like Observables, Behavioral Subjects, Promises, etc

// You can make interfaces inside the file.
export interface Pokes{
  'name': string;
  'id': number;
  'base_experience': number;
}


@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private url = 'https://pokeapi.co/api/v2/pokemon/1';
  constructor(private httpCli: HttpClient) {

  }

  retrievePokemon(): Observable<string>{
    /**
     * An observable is like a promise, and is used to subscribe the information published to a stream.
     * AKA after we make a request, it'll watch for a response. There's a few unique features though.
     *
     * All subscribers are notified if new Info is available in the stream (where we got the info, the network)
     * The subscriber call-back function is then invoked.
     *
     * Unlike promises, Observables can be Sync or Async. They can provide 0 to many values.
     * Promises can only provide 1 activation and response.
     */

     return this.httpCli.get<string>(this.url); // Performs a GET to the URL.
  }

  retrievePokemon2(): Observable<Pokes>{
    return this.httpCli.get<Pokes>(this.url); // By casting it to 'pokes' it auto-types the response
  }
}
