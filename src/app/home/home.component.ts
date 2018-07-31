import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { ChildService } from '@app/child/child.service';
import { Observable } from 'rxjs';
import { Child } from '@app/child/child';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  entities$: Observable<Child[]>
  quote: string;
  isLoading: boolean;
  client = {
    firstName: 'dd',
    persons: [
      { firstName: "aaa", lastName: 'bbb' },
      { firstName: "aasssa", lastName: 'vvv' }
    ]
  }

  constructor(private childService: ChildService) {

  }

  sponsor(child: Child) {
    console.log("child " ,child)
    this.childService.sponsor(child)
  }

  ngOnInit() {
    this.entities$ = this.childService.getUnsponsored()
    // this.isLoading = true;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; });
  }

}


