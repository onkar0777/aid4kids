
import { Component, OnInit, Input } from '@angular/core';
import { Quote } from "../quote";
import { Router } from "@angular/router";
import { QuoteService } from "../quote.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-quote-list',
    templateUrl: './quote-list.component.html',
    styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent extends BaseListComponent<Quote> implements OnInit {


    constructor(protected quoteService: QuoteService, protected router: Router) {
        super(quoteService, router)
    }

    records: Quote[];
    startAt :any
    endAt :any
    lastKeypress: number = 0;
  
    //constructor(private moviesSvc: MoviesService) { }
  
    ngOnInit() {
      this.quoteService.getMovies(this.startAt, this.endAt)
                    .subscribe((x:any) => this.records = x)
    }
  
    search($event:any) {
        if ($event.timeStamp - this.lastKeypress > 200) {
            let q = $event.target.value
            this.startAt = q
            this.endAt = q+"\uf8ff"
            console.log(this.startAt, this.endAt)
          }
          this.lastKeypress = $event.timeStamp
    }

}