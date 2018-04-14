import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css']
})
export class EditableComponent implements OnInit, AfterViewInit {

  @Input() innerHtml: string;
  @Input() isLastElement = false;
  @Output() innerHtmlChange: EventEmitter<string> = new EventEmitter();
  @Output() addNoteEvent: EventEmitter<null> = new EventEmitter();
  @Output() deleteNoteEvent: EventEmitter<null> = new EventEmitter();
  @ViewChild('editable') editable: ElementRef;
  editableDiv: HTMLDivElement;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.editableDiv = this.editable.nativeElement;
    this.editableDiv.innerHTML = this.innerHtml;
  }

  onKeydown(keyboardEvent) {
    const metaPressed = keyboardEvent.ctrlKey || keyboardEvent.metaKey;

    if (metaPressed && keyboardEvent.keyCode === 66) {
      document.execCommand('bold');
      return false;
    }
    
    if (metaPressed && keyboardEvent.keyCode === 73) {
      document.execCommand('italic');
      return false;
    }
  }

  onEditableInput(inputEvent) {
    this.innerHtmlChange.emit(inputEvent.target.innerHTML);
  }

  addNote() {
    this.addNoteEvent.emit();
  }

  deleteNote() {
    this.deleteNoteEvent.emit();
  }

}
