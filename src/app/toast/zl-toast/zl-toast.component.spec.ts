import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlToastComponent } from './zl-toast.component';

describe('ZlToastComponent', () => {
  let component: ZlToastComponent;
  let fixture: ComponentFixture<ZlToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlToastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
