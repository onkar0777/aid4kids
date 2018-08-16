
import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import {Router} from "@angular/router";
import { PostService} from "../post.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-post-list',
templateUrl: './post-list.component.html',
styleUrls: ['./post-list.component.css']
})
export class PostListComponent extends BaseListComponent<Post>
    implements OnInit {

    constructor(protected postService: PostService, protected router: Router) {
        super(postService, router)
    }
}