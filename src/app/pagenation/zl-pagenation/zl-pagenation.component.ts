import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'zl-pagenation',
  templateUrl: './zl-pagenation.component.html',
  styleUrls: ['./zl-pagenation.component.less']
})
export class ZlPagenationComponent implements OnInit, OnChanges {
  @Input()
  total: number = 0;
  @Input()
  size: number = 10;
  @Input()
  page: number = 1;
  @Output()
  pageChange: EventEmitter<number> = new EventEmitter()
  @Output()
  onPageChange: EventEmitter<number> = new EventEmitter()

  pageNum: number = 0
  pageArr: number[] = []
  preMore: boolean = false
  nextMore: boolean = false

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if(changes.total||changes.size||changes.page) {
      this.update()
      console.log(changes)
    }
    if(changes.page&&!changes.page.firstChange) {
      this.onPageChange.emit(this.page)
    }
  }

  update() {
    if(this.total>0) {
      this.pageNum = Math.floor(this.total/this.size) + 1
      this.makePageArr()
    }
  }

  makePageArr() {
    let arr: number[] = []
    if(this.page-1 <= 3 && this.page-1>0) {
      for(let i=2; i<=this.page; i++) {
        arr.push(i)
        this.preMore = false
      }

    }else if(this.page-1 > 3){
      for(let i=this.page-2; i<=this.page; i++) {
        arr.push(i)
        this.preMore = true
      }
    }

    if(this.pageNum+1-this.page <=3 && this.pageNum+1-this.page > 0) {
      for(let i=this.page+1; i<this.pageNum+1; i++) {
        arr.push(i)
        this.nextMore = false
      }
    } else if(this.pageNum+1-this.page > 3) {
      for(let i=this.page+1; i<=this.page+2; i++) {
        arr.push(i)
        this.nextMore = true
      }
    } else if(this.pageNum+1 === this.page) {
      arr.pop()
      this.nextMore = false
    }

    this.pageArr = arr
  }

  handlePageClick(pageIndex: number) {
    this.pageChange.emit(pageIndex)
  }

  handlePre() {
    (this.page > 1) && this.pageChange.emit(this.page-1)
  }

  handleNext() {
    (this.page < this.pageNum+1) && this.pageChange.emit(this.page+1)
  }
}
