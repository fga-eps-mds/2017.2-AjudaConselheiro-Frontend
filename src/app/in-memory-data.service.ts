import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CommentForm, CommentBinaryForm, BinaryForm } from './models/index';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

     createDb(): {} {

        const formsMenu: Array<CommentBinaryForm> = [
                {question: `Houve falta de alimentação escolar durante o período letivo?
                   Caso positivo informe o(s) períodos e os produtos?`,  answer: false, commentary: ''},
                {question: `A escola conseguiu dubstituir a preparação/produto que faltou por outra,
                   para que não houvesse prejuízo aos alunos? Qual foi a substituição?`,  answer: false, commentary: ''},
                {question: `Há excesso de algum gênero alimentício no cardápio? Qual(ais)?`,
                    answer: false, commentary: ''},
                {question: 'A escola complementa a alimentação escolar? Como?',  answer: false, commentary: ''},
                {question: `A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos até
                 que se proceda à próxima distribuição?`,  answer: false, commentary: ''},
            ];

            const formMenuTwo: Array<CommentForm> = [
                    {question: `Qual a quantidade de frutas e hortaliças que estão sendo oferecidas por aluno,
                     durante o período de uma semana?`, answer: ''},
                    {question: 'Qual a preparação mais aceita?', answer: ''},
                    {question: 'Qual a preparação menos aceita?', answer: ''},
                    {question: 'Qual produto é mais aceito?', answer: ''},
                    {question: 'Qual produto é menos aceito?', answer: ''},
            ];

            const formBinary: Array<BinaryForm> = [
              {question: 'De maneira geral, os cardápios são bem elaborados?', answer: false},
              {question: 'De maneira geral, os cardápios são bem aceitos pelos alunos?', answer: false },
              {question: 'De maneira geral, os cardápios são bem elaborados?', answer: false},
              {question: 'O cardápio fica exposto para os alunos e comunidade', answer: false},
              {question: 'A escola recebe doação de alimentos?', answer: false},
            ];



        return {formsMenu, formMenuTwo, formBinary};
    }
}
