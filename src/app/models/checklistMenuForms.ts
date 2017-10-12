import { FormCheck, FormCheckAnswer } from './index';

export const FormsMenu : Array<FormCheckAnswer> = [
        {question: "Houve falta de alimentação escolar durante o período letivo? Caso positivo informe o(s) períodos e os produtos?", check: false, answer: ""},
        {question: "A escola conseguiu dubstituir a preparação/produto que faltou por outra, para que não houvesse prejuízo aos alunos? Qual foi a substituição?", check: false, answer: ""},
        {question: "De maneira geral, os cardápios são bem elaborados?", check: false, answer: ""},
        {question: "De maneira geral, os cardápios são bem aceitos pelos alunos?", check: false, answer: ""},
        {question: "Há excesso de algum gênero alimentício no cardápio? Qual(ais)?", check: false, answer: ""},
        {question: "O cardápio fica exposto para os alunos e comunidade?", check: false, answer: ""},
        {question: "A escola complementa a alimentação escolar? Como?", check: false, answer: ""},
        {question: "A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos até que se proceda à próxima distribuição?", check: false, answer: ""},
        {question: "A escola recebe doação de alimentos?", check: false, answer: ""},
    ];

export const FormMenuTwo : Array<FormCheck> = [
        {question: "Qual a quantidade de frutas e hortaliças que estão sendo oferecidas por aluno, durante o período de uma semana?", answer: ""},
        {question: "Qual a preparação mais aceita?", answer: ""},
        {question: "Qual a preparação menos aceita?", answer: ""},
        {question: "Qual produto é mais aceito?", answer: ""},
        {question: "Qual produto é menos aceito?", answer: ""},
];
