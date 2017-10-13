// This interface represents the form with question, answer and yes/not.
export interface FormCheckAnswer {
    question: string;
    commentCheck: boolean;
    answer: boolean;
    commentary: string;
}

export interface FormCheck {
    question: string;
    answer: string;
}
export interface BinaryFormCardapio {
  question: string;
  answer: boolean;
}
