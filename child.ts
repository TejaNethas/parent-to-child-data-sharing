import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say {{ msgTypeRothit }}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

   @Input() msgTypeRothit:string; //local var declare

  constructor() { }

}
