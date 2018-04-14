import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DataService, textModel } from '../data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-design-one',
  templateUrl: './design-one.component.html',
  styleUrls: ['./design-one.component.css']
})
export class DesignOneComponent implements OnInit, AfterViewInit {

  notes: textModel = {data: []};
  stringNotes: Array<string> = [];
  // previewNotes: textModel = {data: []};
  // tempNotes: textModel = {data: []};
  @ViewChild('editable') editable: ElementRef;
  editableDiv: HTMLDivElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDesignOneData().subscribe(result => {
      this.notes = result;
      this.stringNotes = result.data.slice(0);
    });
  }

  ngAfterViewInit() {

  }

  onInnerHtmlChange(newHtml: string, index: number) {
    //this.notes.data[index] = newHtml;
    //this.stringNotes[index] = newHtml;
  }

  i = 0;
  onAddNoteEvent(index: number) {
    this.i++;
    // tmp = this.stringNotes.slice(0, index);
    // tmp.push("");
    //tmp = this.stringNotes.slice(index);

    //this.stringNotes = tmp;

    this.stringNotes.splice(index + 1, 0, "");
    
    
    // let tmp = [
    //     ...this.stringNotes.slice(0, index + 1),
    //     "",
    //     ...this.stringNotes.slice(index + 1)
    //   ];
    // this.stringNotes = tmp;

    console.log('index: ', index, 'arr: ', this.stringNotes)
  }

  onDeleteNoteEvent(index: number) {
    this.notes.data.splice(index, 1);
  }

  onAddNote(index: number) {
    this.notes
  }

  isLast() {
    return this.notes.data.length < 2;
  }

}
