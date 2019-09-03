import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testsol-web-part',
  templateUrl: './testsol-web-part.component.html',
  styleUrls: ['./testsol-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestsolWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
