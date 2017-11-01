import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/index';
import { PostService, AlertService } from '../../services/index';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.css'],
  providers: [ PostService, AlertService ]
})

export class ChecklistListComponent implements OnInit {
  checklist: Post = null;
  checklists: Post[] = null;

  constructor(
    private alertService: AlertService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.getChecklist(10);
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
        switch (error) {
          case 204:
            this.alertService.warn('Nenhuma checklist encontrada!');
            break;
          case 400:
            this.alertService.error('Nenhuma checklist encontrada!');
            break;
          default:
            break;
        }
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
          switch (error) {
            case 401:
              this.alertService.warn('Usuário precisa estar logado!');
              break;
            case 404:
              this.alertService.error('Nenhuma checklist encontrada!');
              break;
            default:
              break;
          }
        });
  }
}
