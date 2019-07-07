import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  dialogShow: boolean = false

  toastShow: boolean = false

  page: number = 1


  constructor() { }

  ngOnInit() {
  }

  pageChange(index) {
    console.log(index)
  }
}
