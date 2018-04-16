import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService, textModel, idsTextModel } from '../data.service';

@Component({
  selector: 'app-design-one',
  templateUrl: './design-one.component.html',
  styleUrls: ['./design-one.component.css']
})
export class DesignOneComponent implements OnInit {

  notes: textModel;
  notesObjects: idsTextModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDesignOneData().subscribe(result => {
      this.notes = result;
      this.notesObjects = this.dataService.textModelToIdsTextModel(result);
    });
  }

  onInnerHtmlChange(newHtml: string, index: number) {
    this.notesObjects.data[index].row = newHtml;
    this.notes = this.dataService.idsTextModelToTextModel(this.notesObjects);
  }

  onAddNoteEvent(index: number) {
    this.notesObjects.data.splice(index + 1, 0, {id: this.notes.data.length + 1, row: ""});
    this.notes = this.dataService.idsTextModelToTextModel(this.notesObjects);
  }

  onDeleteNoteEvent(index: number) {
    this.notesObjects.data.splice(index, 1);
    this.notes = this.dataService.idsTextModelToTextModel(this.notesObjects);
  }

  isLast() {
    return this.notesObjects.data.length < 2;
  }

}
