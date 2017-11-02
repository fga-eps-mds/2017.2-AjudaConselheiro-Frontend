import { Binary } from '@angular/compiler';
import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { CheckOneTopicHeaders, CheckOneCommentaries, CheckOneFirstTopic, CheckOneEighthTopic, CheckOneFifthTopic,
CheckOneSecondTopic, CheckOneSixthTopic, CheckOneSeventhTopic, CheckOneFourthTopic, SectionCommentary,
CheckOneThirdTopic, IteratorArray, CommentBinaryForm, CommentForm, BinaryForm, ConfirmComentary, Post} from '../../models/index';
import { ChecklistService, AlertService, SchoolService } from '../../services/index';
import { PostService } from '../../services/posts/post.service';

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

  savePost() {
      const jsonChecklistOne = JSON.stringify({
        'interatorArray': this.iteratorArray,
        'commentaries': this.commentaries
      });

      this.postService.savePost(jsonChecklistOne).subscribe(
        result => console.log(result)
      );
    }
}
