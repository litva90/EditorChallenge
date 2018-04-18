import { Component } from '@angular/core';
import { DataService, textModel } from './data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  designTwoData: Observable<textModel>;

  constructor(private dataService: DataService) {
    this.designTwoData = this.dataService.getDesignTwoData();
  }
}
