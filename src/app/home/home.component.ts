import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { ChildService } from '@app/child/child.service';
import { Observable } from 'rxjs';
import { Child } from '@app/child/child';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  entities: any[] = [];
  quote: string;
  isLoading: boolean;
  showLoadMore = false;
  limit = 2;
  client = {
    firstName: 'dd',
    persons: [
      { firstName: "aaa", lastName: 'bbb' },
      { firstName: "aasssa", lastName: 'vvv' }
    ]
  }

  constructor(
    private childService: ChildService,
    public authenticationService: AuthenticationService
  ) {}

  sponsor(child: Child) {
    console.log("child " , child)
    this.childService.sponsor(child)
  }

  ngOnInit() {
    this.childService.getUnsponsored(2, null).subscribe(data => {
      this.entities = data;
      if (this.entities.length === this.limit) {
        this.showLoadMore = true;
      } else {
        this.showLoadMore = false;
      }
    })
  }

  public loadMore(): void {
    console.log("Loading More Data - ");
    this.limit += 2;
    this.childService.getUnsponsored(this.limit, null).subscribe(data => {
      console.log(data);
      this.entities = data;
      if (this.entities.length === this.limit) {
        this.showLoadMore = true;
      } else {
        this.showLoadMore = false;
      }
    })
}

}


