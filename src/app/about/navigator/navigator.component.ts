import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  constructor() { }

  @Input() currentInd: number = 0;

  @Input() steps:any[]

  ngOnInit() {
  }

}
