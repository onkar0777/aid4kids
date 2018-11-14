import { Component, OnInit } from '@angular/core';
import { ChildService } from '@app/child/child.service';
import { Observable } from 'rxjs';
import { Child } from '@app/child/child';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  entities$: Observable<Child[]>

  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.entities$ = this.childService.getMyKids()
  }

  unsponsor(event: any) {
    this.childService.unsponsor(event)
  }

}
