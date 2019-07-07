import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { maskFadeAnimation } from '../../share/animation'

@Component({
  selector: 'zl-toast',
  templateUrl: './zl-toast.component.html',
  styleUrls: ['./zl-toast.component.less'],
  animations: [maskFadeAnimation]
})
export class ZlToastComponent implements OnInit, OnChanges {

  @Input()
  show: boolean = false
  @Output()
  showChange: EventEmitter<boolean> = new EventEmitter()
  @Input()
  time: number = 2000
  @Input()
  text: string = ''

  timer: any

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(changes.show && changes.show) {
      this.setTimer()
    }
  }

  setTimer() {
    this.timer&&clearTimeout(this.timer)
    this.timer = setTimeout(()=>{
      this.showChange.emit(false)
      clearTimeout(this.time)
    }, this.time)
  }
}
