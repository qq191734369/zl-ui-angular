import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlPagenationComponent } from './zl-pagenation.component';

describe('ZlPagenationComponent', () => {
  let component: ZlPagenationComponent;
  let fixture: ComponentFixture<ZlPagenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlPagenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlPagenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
