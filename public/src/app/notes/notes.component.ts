import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [];
  @Input() inputNotes;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getNotes()
    .then( data => { 
                    console.log('Showing notes...', data);
                    for (var i=0; i<data.length; i++) {
                      this.notes.push(data[i]);
                    }
                    console.log('notes is:', this.notes);
                   })
    .catch( err => { 
                    console.log('Notes not found...', err);  
                   })
  }

}
