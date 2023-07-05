import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-stepper',
  template: `
    <div style="justify-content: center; text-align: center; display: flex">
      <button style="margin-right: 15px" data-cy="decrement" (click)="decrement()">-</button>
      <span style="font-weight: bold" data-cy="counter">{{ count }}</span>
      <button style="margin-left: 15px" data-cy="increment" (click)="increment()">+</button>
    </div>
  `,
})
export class StepperComponent {
  constructor() {}

  ngOnInit(): void {}

  @Input() count = 0
  @Output() change = new EventEmitter()

  increment(): void {
    this.count++
    this.change.emit(this.count)
  }

  decrement(): void {
    this.count--
    this.change.emit(this.count)
  }
}
