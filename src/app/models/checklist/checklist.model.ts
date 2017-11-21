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
      question?: number;
      answer?: boolean;
      commentary?: string;
  }

  export interface CommentForm {
      question?: number;
      answer?: string;
  }

  export interface BinaryForm {
    question?: number;
    answer?: boolean;
  }

  export interface SectionCommentary {
      sectionNumber?: number;
      commentary?: string;
  }

  export interface SectionCommentaryTwo {
    question?: number;
    obs?: string;
    answer?: boolean;
  }
