import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ShowDataModalComponent } from './show-data-modal/show-data-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'enginnerAI';
  dataSource = new MatTableDataSource();
  displayedColumns=['title','url','created_at','author'];
  constructor(private getDataService: GetDataService,  private dialog: MatDialog) { }

  ngOnInit() {
    // setInterval(()=>{
    //   this.getData();
    // },10000);
    this.getData();
    this.dataSource.filterPredicate = 
    (data, filtersJson: string) => {
        const matchFilter = [];
        const filters = JSON.parse(filtersJson);
        filters.forEach(filter => {
          const val = data[filter.id] === null ? '' : data[filter.id];
          matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
        });
          return matchFilter.every(Boolean);
      };
  }

  getData() {
    this.getDataService.getData().subscribe((res) => {
      this.dataSource.data=res['hits'];
    })
  }

  rowClicked(row){
    this.dialog.open(ShowDataModalComponent, {
      data: row
    });
  }

  filterData(filterValue){
    const tableFilters = [];
    tableFilters.push({
      id: 'title',
      value: filterValue
    });
    this.dataSource.filter = JSON.stringify(tableFilters);
  }
}
