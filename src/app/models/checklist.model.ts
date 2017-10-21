export class ChecklistThree {
    constructor() {}
    public id?: number;
    public obs?: string;
    public question1?: boolean;
    public question2?: boolean;
    public question3?: boolean;
    public question4?: boolean;
    public question5?: boolean;
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
