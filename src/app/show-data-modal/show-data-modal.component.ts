import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-show-data-modal',
  templateUrl: './show-data-modal.component.html',
  styleUrls: ['./show-data-modal.component.scss']
})
export class ShowDataModalComponent implements OnInit {
  showData: any;
  constructor(public dialogRef: MatDialogRef<ShowDataModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.showData = JSON.stringify(this.data);
  }

}
