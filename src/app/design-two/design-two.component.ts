import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Input } from '@angular/core';
import { textModel, DataService, idsTextModel } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-design-two',
  templateUrl: './design-two.component.html',
  styleUrls: ['./design-two.component.css']
})
export class DesignTwoComponent implements OnInit {

  @Input() notes: Observable<textModel>;
  notesDataObjects = {data:[]};
  notesData: textModel = {data:[]}
  generation = 0;

  constructor(private dragulaService: DragulaService) {
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
   }

  ngOnInit() {
    this.notes.subscribe(result => {
      result.data.forEach((value, index) => {
        this.notesDataObjects.data.push({id: index, row: value});
      });
      this.notesData.data = result.data.slice(0);
    });
  }

  onInnerHtmlChange(newHtml: string, index: number) {
    this.notesDataObjects.data[index].row = newHtml;
    this.notesData.data = this.notesDataObjects.data.map(ob => ob.row);
  }

  onAddNoteEvent(index: number) {
    this.notesDataObjects.data.splice(index + 1, 0, {id: index + 1, row: ""});
    this.notesData.data = this.notesDataObjects.data.map(ob => ob.row);
  }

  onDeleteNoteEvent(index: number) {
    this.notesDataObjects.data.splice(index, 1);
    this.notesData.data = this.notesDataObjects.data.map(ob => ob.row);
  }

  isLast() {
    return this.notesDataObjects.data.length < 2;
  }

  onDragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  onDrop(e) {
    this.notesData.data = this.notesDataObjects.data.map(ob => ob.row);
  }

  onOver(args) {
    let [e, el] = args;
    
  }

  onDragover(e) {
    e.preventDefault();
  }
}
