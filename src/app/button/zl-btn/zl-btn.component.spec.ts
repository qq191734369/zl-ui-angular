import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlBtnComponent } from './zl-btn.component';

describe('ZlBtnComponent', () => {
  let component: ZlBtnComponent;
  let fixture: ComponentFixture<ZlBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
