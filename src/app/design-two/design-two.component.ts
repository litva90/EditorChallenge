import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { textModel, DataService, idsTextModel } from '../data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-design-two',
  templateUrl: './design-two.component.html',
  styleUrls: ['./design-two.component.css']
})
export class DesignTwoComponent implements OnInit {

  @Input() notes: Observable<textModel>;
  notesData: textModel;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.notes.subscribe(result => {
      this.notesData = result;
    });
  }

  onInnerHtmlChange(newHtml: string, index: number) {
    //this.notesObjects.data[index].row = newHtml;
    //this.notes = this.dataService.idsTextModelToTextModel(this.notesObjects);
  }

  onAddNoteEvent(index: number) {
    //this.notesObjects.data.splice(index + 1, 0, {id: this.notes.data.length + 1, row: ""});
    //this.notes = this.dataService.idsTextModelToTextModel(this.notesObjects);
    //console.log('index: ', index, 'rows: ', this.notes.data);
  }

  onDeleteNoteEvent(index: number) {
    //this.notesObjects.data.splice(index, 1);
    //this.notes = this.dataService.idsTextModelToTextModel(this.notesObjects);
  }

  isLast() {
    //return this.notesObjects.data.length < 2;
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
