import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { textModel, DataService, idsTextModel } from '../data.service';

@Component({
  selector: 'app-design-two',
  templateUrl: './design-two.component.html',
  styleUrls: ['./design-two.component.css']
})
export class DesignTwoComponent implements OnInit {

  notes: textModel;
  notesObjects: idsTextModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDesignTwoData().subscribe(result => {
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

  onDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
    console.log(e)
  }

  onDrop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
  }

  onDragover(e) {
    e.preventDefault();
  }
}
