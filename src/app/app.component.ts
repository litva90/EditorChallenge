import { Component } from '@angular/core';
import { DataService, notesModel } from './data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Editor Challenge';

  designOneData: notesModel;
  designTwoData: notesModel;

  constructor(private dataService: DataService) {
    this.dataService.getDesignOneData().subscribe(data => this.designOneData = data);
    this.dataService.getDesignTwoData().subscribe(data => this.designTwoData = data);
  }
}
