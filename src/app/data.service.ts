import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface textModel {
  data: Array<string>
}

export interface idsTextModel {
  data: Array<{id:number, row: string}>
}

@Injectable()
export class DataService {

  private url = 'http://localhost:4200/assets/';

  constructor(private http: HttpClient) { }

  getDesignOneData(): Observable<textModel> {
    return this.http.get<textModel>(`${this.url}design-one.json`);
  }

  getDesignTwoData(): Observable<textModel> {
    return this.http.get<textModel>(`${this.url}design-two.json`);
  }

  getDesignTreeData(): Observable<textModel> {
    return this.http.get<textModel>(`${this.url}design-three.json`);
  }

  textModelToIdsTextModel(textModel: textModel): idsTextModel {
    let idsTextModel: idsTextModel = {data:[]};
    textModel.data.forEach((tm, index) => {
      idsTextModel.data.push({id: index, row: tm})
    });
    return idsTextModel;
  }

  idsTextModelToTextModel(idsTextModel: idsTextModel): textModel {
    let textModel: textModel = {data: []};
    idsTextModel.data.forEach(itm => {
      textModel.data.push(itm.row);
    });
    return textModel;
  }

}
