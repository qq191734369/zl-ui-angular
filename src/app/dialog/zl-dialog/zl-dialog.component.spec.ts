import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlDialogComponent } from './zl-dialog.component';

describe('ZlDialogComponent', () => {
  let component: ZlDialogComponent;
  let fixture: ComponentFixture<ZlDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
