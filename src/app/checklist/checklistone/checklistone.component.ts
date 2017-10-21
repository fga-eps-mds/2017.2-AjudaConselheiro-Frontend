import { Component, OnInit } from '@angular/core';
import { Binary } from '@angular/compiler';
import { Http, HttpModule } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { SectionCommentary } from '../../models/checklist.model';
import { CheckOneTopicHeaders, CheckOneCommentaries, CheckOneFirstTopic, CheckOneEighthTopic, CheckOneFifthTopic,
CheckOneFourthTopic, CheckOneSecondTopic, CheckOneSixthTopic,
CheckOneSeventhTopic, CheckOneThirdTopic, IteratorArray} from './../../models/checklistForms';
import { FormsMenu, FormMenuTwo, CommentBinaryForm, CommentForm, BinaryForm, FormBinary, ConfirmComentary} from '../../models/index';
import { ChecklistService } from '../../services/index';


@Component({
  selector: 'app-checklistone',
  templateUrl: './checklistone.component.html',
  styleUrls: ['./checklistone.component.css'],
  providers: [],
})
export class ChecklistoneComponent implements OnInit {

  base64Array: String[] = [];
  public base64Image: String;

  // This component is destined to the checklist corresponding to
    iteratorArray: Array<Object>= IteratorArray;
    topicHeaders: Array<String> = CheckOneTopicHeaders;
    commentaries: Array<SectionCommentary> = CheckOneCommentaries;
    checkOneFirstTopic: Array<BinaryForm> = CheckOneFirstTopic;
    checkOneSecondTopic: Array<BinaryForm> = CheckOneSecondTopic;
    checkOneThirdTopic: Array<BinaryForm> = CheckOneThirdTopic;
    checkOneFourthTopic: Array<BinaryForm> = CheckOneFourthTopic;
    checkOneFifthTopic: Array<BinaryForm> = CheckOneFifthTopic;
    checkOneSixthTopic: Array<BinaryForm> = CheckOneSixthTopic;
    checkOneSeventhTopic: Array<CommentBinaryForm> = CheckOneSeventhTopic;
    checkOneEighthTopic: Array<BinaryForm> = CheckOneEighthTopic;


    checkComentary: ConfirmComentary[]= [
      new ConfirmComentary(false, 'Comment1'),
      new ConfirmComentary(false, 'Comment2'),
      new ConfirmComentary(false, 'Comment3'),
      new ConfirmComentary(false, 'Comment4'),
      new ConfirmComentary(false, 'Comment5'),
      new ConfirmComentary(false, 'Comment6'),
      new ConfirmComentary(false, 'Comment7'),
      new ConfirmComentary(false, 'Comment8'),
    ];

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {

}

  onSubmit(): void {
      console.log(this.iteratorArray);
      console.log(this.checkOneSecondTopic);
      console.log(this.checkOneThirdTopic);
      console.log(this.checkOneFourthTopic);
      console.log(this.checkOneFifthTopic);
      console.log(this.checkOneSixthTopic);
      console.log(this.checkOneSeventhTopic);
      console.log(this.checkOneEighthTopic);
      console.log(this.commentaries);
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
