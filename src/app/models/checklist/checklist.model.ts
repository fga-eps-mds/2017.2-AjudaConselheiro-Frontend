export class ChecklistThree {
    constructor(
        public id?: number,
        public obs?: string,
        public FormMenuThree?: Array<SectionCommentaryTwo>,
    ) {}
  }

  export class ConfirmComentary {
    constructor(public value: boolean, public identificador: string) {}
  }

  // This interface represents the form with question, answer and yes/no.
  export interface CommentBinaryForm {
      question: string;
      answer: boolean;
      commentary: string;
  }

  export interface CommentForm {
      question: string;
      answer: string;
  }

  export interface BinaryForm {
    question: string;
    answer: boolean;
  }

  export interface SectionCommentary {
      sectionNumber: number;
      commentary: string;
  }

  export interface SectionCommentaryTwo {
    question: string;
    obs: string;
    answer: boolean;
  }
