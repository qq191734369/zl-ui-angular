import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlMaskComponent } from './zl-mask.component';

describe('ZlMaskComponent', () => {
  let component: ZlMaskComponent;
  let fixture: ComponentFixture<ZlMaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlMaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
