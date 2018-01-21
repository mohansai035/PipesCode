import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	  <div *ngFor="let detail of message | modifyName">
	    <p>{{detail.name}}: {{ detail.value }}</p> <br/>
    </div>`
})
export class  HelloComponent {
  public message = '123456mohan34566';
}
