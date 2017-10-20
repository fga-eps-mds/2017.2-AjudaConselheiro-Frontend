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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
      console.log(this.iteratorArray);
  }
}
