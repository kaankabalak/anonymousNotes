import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getNotes() {
    return this._http.get('/notes')
    .map( data => data.json() )
    .toPromise();
  }

  createNote(newnote) {
    console.log('The note is:', newnote);
    return this._http.post('/notes', newnote)
    .map( data => data.json() )
    .toPromise();
  }
}
