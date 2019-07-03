import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { dialogFadeAnimation } from '../../share/animation';

@Component({
  selector: 'zl-dialog',
  templateUrl: './zl-dialog.component.html',
  styleUrls: ['./zl-dialog.component.less'],
  animations: [dialogFadeAnimation]
})
export class ZlDialogComponent implements OnInit {
  @Input()
  show: boolean = true
  @Input()
  closeOnMask: boolean = true
  @Output()
  showChange: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  handleMaskClick() {
    if(this.closeOnMask) {
      this.showChange.emit(false)
    }
  }

}
