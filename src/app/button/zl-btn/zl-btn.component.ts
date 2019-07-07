import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zl-btn',
  templateUrl: './zl-btn.component.html',
  styleUrls: ['./zl-btn.component.less']
})
export class ZlBtnComponent implements OnInit {
  @Input()
  text: string = ''
  @Input()
  type: string = ''

  constructor() { }

  ngOnInit() {
  }

}
