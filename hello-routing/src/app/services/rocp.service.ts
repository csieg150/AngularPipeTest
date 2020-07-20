import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocpService {
  baseUrl = 'http://ec2-18-191-63-47.us-east-2.compute.amazonaws.com:8080/todos';
  constructor(private httpCli: HttpClient) {

  }

  /**
   * Now talking about Observers a bit more.
   * They follow the Publisher-Subscriber general pattern - though specifically the Observer Design pattern here.
   * There's direct interaction at the subject and observer.
   * The subject fires an event, like a notification, the observer directly subscribes
   * In Publisher-Subscriber (Pub-Sub) patterns there's usually a layer of abstraction that occurs.
   * There's no interaction between the two in Pub/Sub. Instead, there's an event stream where things
   * are published. The publisher puts stuff there, and the subscriber reads it when it sees new stuff.
   */
  postTodo(todoForm): Observable<string>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // ABSOLUTELY necessary. Allows control from the API
      })
    };
    // We send our 'todoForm' as the body of our request
    return this.httpCli.post<string>(this.baseUrl, todoForm, httpHead);
  }

  getTodos(): Observable<string[]>{
    // Our API needs a special HEAD to communicate.
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // ABSOLUTELY necessary. Allows control from the API
      })
    };

    return this.httpCli.get<string[]>(this.baseUrl, httpHead);
  }
}
