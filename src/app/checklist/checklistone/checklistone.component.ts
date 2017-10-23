import { Binary } from '@angular/compiler';
import { SectionCommentary } from '../../models/checklist.model';
import { CheckOneTopicHeaders, CheckOneCommentaries, CheckOneFirstTopic, CheckOneEighthTopic, CheckOneFifthTopic,
CheckOneFourthTopic, CheckOneSecondTopic, CheckOneSixthTopic,
CheckOneSeventhTopic, CheckOneThirdTopic, IteratorArray} from './../../models/checklistForms';
import { Component, OnInit } from '@angular/core';
import { FormsMenu, FormMenuTwo, CommentBinaryForm, CommentForm, BinaryForm, FormBinary, ConfirmComentary} from '../../models/index';
import { ChecklistService } from '../../services/index';
import { Http, HttpModule } from '@angular/http';
@Component({
  selector: 'app-checklistone',
  templateUrl: './checklistone.component.html',
  styleUrls: ['./checklistone.component.css'],
  providers: [ChecklistService],
})
export class ChecklistoneComponent implements OnInit {
  // This component is destined to the checklist corresponding to
  // LISTA PARA VERIFICAÇÃO DAS BOAS PRÁTICAS DE FABRICAÇÃO
    iteratorArray: Array<Object>= IteratorArray;
    topicHeaders: Array<string> = CheckOneTopicHeaders;
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

  constructor() {}

  ngOnInit(): void {
    // this.checkoneService.getCheckOneFirstTopicAnswers()
    // .then((checkOneFirstTopic: BinaryForm[]) => {
    //     this.checkOneFirstTopic = checkOneFirstTopic;
    // }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneSecondTopicAnswers()
    // .then((checkOneSecondTopic: BinaryForm[]) => {
    //    this.checkOneSecondTopic = checkOneSecondTopic;
    // }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneThirdTopicAnswers()
    // .then((checkOneThirdTopic: BinaryForm[]) => {
    //    this.checkOneThirdTopic = checkOneThirdTopic;
    // }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneFourthTopicAnswers()
    // .then((checkOneFourthTopic: BinaryForm[]) => {
    //        this.checkOneFourthTopic = checkOneFourthTopic;
    //     }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneFifthTopicAnswers()
    // .then((checkOneFifthTopic: BinaryForm[]) => {
    //    this.checkOneFifthTopic = checkOneFifthTopic;
    // }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneSixthTopicAnswers()
    // .then((checkOneSixthTopic: BinaryForm[]) => {
    //    this.checkOneSixthTopic = checkOneSixthTopic;
    // }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneSeventhTopicAnswers()
    // .then((checkOneSeventhTopic: CommentBinaryForm[]) => {
    //    this.checkOneSeventhTopic = checkOneSeventhTopic;
    // }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneEighthTopicAnswers()
    // .then((checkOneEighthTopic: BinaryForm[]) => {
    //    this.checkOneEighthTopic = checkOneEighthTopic;
    // }).catch(err => console.log(err));

    // this.checkoneService.getCheckOneCommentaries()
    // .then((commentaries: SectionCommentary[]) => {
    //     this.commentaries = commentaries;
    // }).catch(err => console.log(err));
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
}
