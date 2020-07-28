import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {
  
  @Input('valor')
  progress: number
  @Input()
  btnClass: string = 'btn btn-primary'
  
  @Output()
  onProgressChanged: EventEmitter<number> = new EventEmitter()
  
  ngOnInit(): void {
    this.btnClass = `btn btn-${this.btnClass}`
  }

  get percentage() {
    return `${ this.progress }%`
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value >= 0) {
      this.onProgressChanged.emit(100)
      return this.progress = 100
    }
    if (this.progress <= 0 && value <= 0) {
      this.onProgressChanged.emit(0)
      return this.progress = 0
    }
    
    this.progress += value
    this.onProgressChanged.emit(this.progress)
  }
  onChange(e: number) {
    if (e >= 100) {
      this.progress = 100
    } else if (e <= 0) {
      this.progress = 0
    } else {
      this.progress = e
    }

    this.onProgressChanged.emit(this.progress)
  }

}
