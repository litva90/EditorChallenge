import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
  @ViewChild('editable') editable: ElementRef;
  editableDiv: HTMLDivElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDesignOneData().subscribe(result => {
      this.notes = result;
      this.stringNotes = result.data.slice(0);
      console.log(this.stringNotes);
    });
  }

  ngAfterViewInit() {

  }

  onInnerHtmlChange(newHtml: string, index: number) {
    this.stringNotes[index] = newHtml;
  }

  onAddNoteEvent(index: number) {
    this.stringNotes.splice(index + 1, 0, "");
  }

  onDeleteNoteEvent(index: number) {
    this.stringNotes.splice(index, 1);
  }

  isLast() {
    return this.stringNotes.length < 2;
  }

}
