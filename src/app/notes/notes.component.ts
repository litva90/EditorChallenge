import { Component, Input, OnChanges } from '@angular/core';
import { notesModel } from '../data.service';
import { DragulaService } from 'ng2-dragula';

@Component({
	selector: 'app-notes',
	templateUrl: './notes.component.html',
	styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnChanges {

	@Input() notes: notesModel;
	notesDataConverted = { data: [] };

	constructor(private dragulaService: DragulaService) {
		this.dragulaService.dragend.subscribe(this.onDragEnd);
	}

	ngOnChanges() {
		this.notes.data.forEach((value, index) => this.notesDataConverted.data.push({ id: index, row: value }));
	}

	onInnerHtmlChange(newHtml: string, index: number) {
		this.notesDataConverted.data[index].row = newHtml;
		this.updateBaseRow();
	}

	onAddNoteEvent(index: number) {
		this.notesDataConverted.data.splice(index + 1, 0, { id: this.notesDataConverted.data.length, row: '' });
		this.updateBaseRow();
	}

	onDeleteNoteEvent(index: number) {
		this.notesDataConverted.data.splice(index, 1);
		this.updateBaseRow();
	}

	isLast() {
		return this.notesDataConverted.data.length === 1;
	}

	trackByIndex(index: number, row: any) {
		return row.id;
	}

	updateBaseRow() {
		this.notes.data = this.notesDataConverted.data.map(note => note.row);
	}

	onDragEnd = v => {
		this.updateBaseRow();
	}

}
