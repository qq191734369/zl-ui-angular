import { Component, OnInit, Renderer2, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { maskFadeAnimation } from '../../share/animation'

@Component({
  selector: 'zl-mask',
  templateUrl: './zl-mask.component.html',
  styleUrls: ['./zl-mask.component.less'],
  animations: [maskFadeAnimation]
})
export class ZlMaskComponent implements OnInit, OnChanges {
  @Input()
  show: boolean = false

  cacheOverflow: string

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.cacheOverflow = window.getComputedStyle(window.document.body).overflow
    console.log(this.cacheOverflow)
  }

  ngOnChanges(changes) {
    if(changes.show) {
      this.show = changes.show.currentValue
      if(changes.show.firstChange) {
        setTimeout(() => {
          this.lockScrollChange()
        }, 0);
      }else {
        this.lockScrollChange()
      }
    }
  }
  lockScrollChange() {
    let currentVal = this.show ? 'hidden' : this.cacheOverflow
    this.render.setStyle(document.body, 'overflow', currentVal)
  }

}
