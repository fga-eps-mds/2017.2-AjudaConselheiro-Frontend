import { FormCheck, FormCheckAnswer, BinaryFormCardapio } from './index';



export const FormMenuTwo: Array<FormCheck> = [
        {question: `Qual a quantidade de frutas e hortaliças que estão sendo oferecidas por aluno,
         durante o período de uma semana?`, answer: ''},
        {question: 'Qual a preparação mais aceita?', answer: ''},
        {question: 'Qual a preparação menos aceita?', answer: ''},
        {question: 'Qual produto é mais aceito?', answer: ''},
        {question: 'Qual produto é menos aceito?', answer: ''},
];

export const FormBinary: Array<BinaryFormCardapio> = [
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: null},
  {question: 'De maneira geral, os cardápios são bem aceitos pelos alunos?', answer: null },
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: null },
  {question: 'O cardápio fica exposto para os alunos e comunidade', answer: null},
  {question: 'A escola recebe doação de alimentos?', answer: null},
];

export const FormsMenu: Array<FormCheckAnswer> = [
        {question: `Houve falta de alimentação escolar durante o período letivo?
           Caso positivo informe o(s) períodos e os produtos?`, answer: null, commentary: ''},
        {question: `A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos
           até que se proceda à próxima distribuição?`, answer: null, commentary: ''},
        {question: 'Há excesso de algum gênero alimentício no cardápio? Qual(ais)?', answer: null, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: null, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: null, commentary: ''},
    ];
