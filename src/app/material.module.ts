import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatToolbarModule, MatCardModule, MatIconModule, MatMenuModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatNativeDateModule, MatSlideToggleModule,
  MatAutocompleteModule, MatDatepickerModule, MatDialogModule, MatCheckboxModule, MatRadioModule,
  MatExpansionModule, MatSnackBarModule, MatTabsModule, MatSidenavModule, MatListModule, MatChipsModule,
  MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatSortModule
  , MatTooltipModule, DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS, MatPaginatorIntl
} from '@angular/material';

export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${year}-${month}-${day}`;
    } else {
      return date.toDateString();
    }
  }
}
const APP_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};


@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule
  ],

  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
  ],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})


export class MaterialModule {

}

