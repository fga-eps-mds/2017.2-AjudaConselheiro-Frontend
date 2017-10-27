import { Binary } from '@angular/compiler';
import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { SectionCommentary } from '../../models/checklist.model';
import { CheckOneTopicHeaders, CheckOneCommentaries, CheckOneFirstTopic, CheckOneEighthTopic, CheckOneFifthTopic, CheckOneFourthTopic,
CheckOneSecondTopic, CheckOneSixthTopic, CheckOneSeventhTopic, CheckOneThirdTopic, IteratorArray} from './../../models/checklistForms';
import { FormsMenu, FormMenuTwo, CommentBinaryForm, CommentForm, BinaryForm, FormBinary, ConfirmComentary} from '../../models/index';
import { ChecklistService, AlertService } from '../../services/index';
import { PostService } from '../../services/posts/post.service';
import { Post } from '../../models/index';

@Component({
  selector: 'app-checklistone',
  templateUrl: './checklistone.component.html',
  styleUrls: ['./checklistone.component.css'],
  providers: [ChecklistService, PostService, AlertService],
})
export class ChecklistoneComponent implements OnInit {

    iteratorArray: Array<Object>= IteratorArray;
    topicHeaders: Array<string> = CheckOneTopicHeaders;
    commentaries: Array<SectionCommentary> = CheckOneCommentaries;

  constructor(
    private postService: PostService,
    private alertService: AlertService
  ) {}

  post: Post;
  loading = false;

  ngOnInit() {
    console.log('entrou!!');
    this.postService.getPosts();
  }

  onSubmit() {
      // Show questions and anwsers
      console.warn(this.iteratorArray);

      // Show commentaries for each section
      console.warn(this.commentaries);
  }

  isOtherQuestions (topic: number, question: number) {
    return (topic !== 6 && ( question !== 4 && question !== 5));
  }

  isRequiredQuestions(topic: number, question: number) {
    return (topic === 6 && ( question === 4 || question === 5));
  }

  isNotRequiredQuestions(topic: number, question: number) {
    return (topic === 6 && ( question >= 0 && question <= 3));
  }

  private loadAllUsers() {
      console.log('Deu certo');
      this.postService.getPosts().subscribe(posts => this.post = posts);
      console.log(this.post);
    }
}
