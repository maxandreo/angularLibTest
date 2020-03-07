import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cgdm-lib-test',
  template: `

    <button type="text" class="btn btn-primary btn-block">
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class LibTestComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
