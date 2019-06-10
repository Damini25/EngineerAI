import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDataModalComponent } from './show-data-modal.component';

describe('ShowDataModalComponent', () => {
  let component: ShowDataModalComponent;
  let fixture: ComponentFixture<ShowDataModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDataModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
