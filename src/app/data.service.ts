import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface notesModel {
  data: Array<string>
}

@Injectable()
export class DataService {

  private url = 'http://localhost:4200/assets/';

  constructor(private http: HttpClient) { }

  getDesignOneData(): Observable<notesModel> {
    return this.http.get<notesModel>(`${this.url}design-one.json`);
  }

  getDesignTwoData(): Observable<notesModel> {
    return this.http.get<notesModel>(`${this.url}design-two.json`);
  }

  getDesignTreeData(): Observable<notesModel> {
    return this.http.get<notesModel>(`${this.url}design-three.json`);
  }

}
