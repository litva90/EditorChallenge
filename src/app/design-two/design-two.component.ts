import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { textModel, DataService } from '../data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-design-two',
  templateUrl: './design-two.component.html',
  styleUrls: ['./design-two.component.css']
})
export class DesignTwoComponent implements OnInit {

  stringNotes: textModel = {data: []};
  notesPreview: textModel = {data: []};
  @ViewChild('editable') editable: ElementRef;
  editableDiv: HTMLDivElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getDesignTwoData().subscribe(result => {
    //   this.stringNotes = _.cloneDeep(result);
    //   this.notesPreview = _.cloneDeep(result);
    // });
  }

  onInnerHtmlChange(newHtml: string, index: number) {
      //this.notesPreview.data[index] = newHtml;
  }

  onAddNoteEvent(index: number) {
    // this.stringNotes.data = [
    //   ...this.stringNotes.data.slice(0, index + 1),
    //   "",
    //   ...this.stringNotes.data.slice(index + 1, this.stringNotes.data.length)
    // ];

    // this.notesPreview.data = [
    //   ...this.notesPreview.data.slice(0, index + 1),
    //   "",
    //   ...this.notesPreview.data.slice(index + 1, this.notesPreview.data.length)
    // ]
  }

  onDeleteNoteEvent(index: number) {
    this.stringNotes.data.splice(index, 1);
    this.notesPreview.data.splice(index, 1);
  }

  isLast(): boolean {
    return this.stringNotes.data.length < 2;
  }

}
