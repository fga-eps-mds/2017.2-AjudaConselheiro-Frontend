import { ChecklistCafeteriaAnswers, ChecklistMenuAnswerIteratorArray, IteratorArray } from './checklistForms';
export class ChecklistCafeteria {
    constructor(
        public id?: number,
        public obs?: string,
        public ChecklistCafeteriaAnswers?: Array<SectionCommentaryTwo>,
    ) {}
  }
  export class ChecklistMenu {
      constructor(
          public id?: number,
          public obs?: string,
          public ChecklistMenuAnswerIteratorArray?: Array<CommentBinaryForm>,
      ) {}
  }
  export class ChecklistProduction {
      constructor(
          public id?: number,
          public obs?: string,
          public IteratorArray?: Array<CommentBinaryForm>,
      ) {}
  }

  export class ConfirmComentary {
    constructor(public value: boolean, public identificador: string) {}
  }

  // This interface represents the form with question, answer and yes/no.
  export interface CommentBinaryForm {
      Q?: number;
      A?: boolean;
      com?: string;
  }

  export interface CommentForm {
      Q?: number;
      A?: string;
  }

  export interface BinaryForm {
    Q?: number;
    A?: boolean;
  }

  export interface SectionCommentary {
      secNum?: number;
      obs?: string;
  }

  export interface SectionCommentaryTwo {
    Q?: number;
    obs?: string;
    A?: boolean;
  }
