import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/index';
import { PostService, AlertService } from '../../services/index';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css'],
  providers: [ PostService ]
})

export class ChecklistListComponent implements OnInit {
  checklist: Post = null;
  checklists: Post = null;

  constructor(
    private alertService: AlertService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.postService.getPosts()
    .subscribe(
      (res) => {
        console.log('resultado: ', res);
        this.checklists = res;
      },
      (error) => {
        console.log(error);
      });
  }

  getChecklist(cod: number) {
    this.postService.getPost(cod)
      .subscribe(
        (res) => {
          console.log('resultado: ', res);
          this.checklist = res;
        },
        (error) => {
          console.log(error);
        });
  }
}
