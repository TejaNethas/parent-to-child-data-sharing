import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child msgTypeRothit="{{localMessageType2}}"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  localMessageType2:string = "Rohit input type message passing";
  constructor() { }
}
