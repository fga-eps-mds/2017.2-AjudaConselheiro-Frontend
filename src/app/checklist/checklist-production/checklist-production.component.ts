import { Binary } from '@angular/compiler';
import { Http, HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { CheckOneTopicHeaders, CheckOneCommentaries, CheckOneFirstTopic, CheckOneEighthTopic, CheckOneFifthTopic,
CheckOneFourthTopic, CheckOneSecondTopic, CheckOneSixthTopic, CheckOneSeventhTopic, CheckOneThirdTopic,
IteratorArray, SectionCommentary, FormMenuCommentBinary, FormMenuComment, CommentBinaryForm,
CommentForm, BinaryForm, FormMenuBinary, ConfirmComentary, Post} from '../../models/index';
import { ChecklistService, AlertService, PostService } from '../../services/index';

@Component({
  selector: 'app-checklist-production',
  templateUrl: './checklist-production.component.html',
  styleUrls: ['./checklist-production.component.css'],
  providers: [ChecklistService, PostService, AlertService],
})
export class ChecklistProductionComponent implements OnInit {

    base64Array: String[] = [];
    public base64Image: String;
    iteratorArray: Array<Object>= IteratorArray;
    topicHeaders: Array<string> = CheckOneTopicHeaders;
    commentaries: Array<SectionCommentary> = CheckOneCommentaries;

  constructor(
    protected postService: PostService,
    protected alertService: AlertService
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

    changeListener($event): void {
      this.readThis($event.target);
    }

    readThis(inputValue: any): void {
      const file: File = inputValue.files[0];
      const myReader: FileReader = new FileReader();

      myReader.onloadend = (e) => {
        this.base64Image = myReader.result;
        this.base64Array.push(this.base64Image);
        console.log(this.base64Image);
      };
      myReader.readAsDataURL(file);
    }

}
