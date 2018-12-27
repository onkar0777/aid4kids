import { Component, OnInit } from "@angular/core";
import { ChildService } from "@app/child/child.service";
import { Observable } from "rxjs";
import { Child } from "@app/child/child";
import { ParentService } from "@app/parent/parent.service";
import { Parent } from "@app/parent/parent";
import { AuthenticationService } from "@app/core";

@Component({
  selector: "app-myprofile",
  templateUrl: "./myprofile.component.html",
  styleUrls: ["./myprofile.component.scss"]
})
export class MyprofileComponent implements OnInit {
  entities$: Observable<Child[]>;
  entity: Parent;

  constructor(private childService: ChildService,
    private parentService: ParentService,
    private authenticationService: AuthenticationService) {
    parentService.getById(
      this.authenticationService.localUser.id).subscribe(
        x => this.entity = x
      );
  }

  onSubmit(e: any) {
    this.parentService.upsert(this.authenticationService.localUser.id, e);
  }

  ngOnInit() {
    this.entities$ = this.childService.getMyKids();
  }

  unsponsor(event: any) {
    this.childService.unsponsor(event);
  }
}
