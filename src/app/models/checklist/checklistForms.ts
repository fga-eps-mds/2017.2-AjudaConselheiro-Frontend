import { SectionCommentary, SectionCommentaryTwo } from './checklist.model';
import { CommentForm, CommentBinaryForm, BinaryForm } from '../index';


export const FormMenuComment: Array<CommentForm> = [
        {question: `Qual a quantidade de frutas e hortaliças que estão sendo oferecidas por aluno,
         durante o período de uma semana?`, answer: ''},
        {question: 'Qual a preparação mais aceita?', answer: ''},
        {question: 'Qual a preparação menos aceita?', answer: ''},
        {question: 'Qual produto é mais aceito?', answer: ''},
        {question: 'Qual produto é menos aceito?', answer: ''},
];

export const FormMenuThree: Array<SectionCommentaryTwo> = [
  {question: 'O cantineiro tem conhecimento da Lei n.º5.146/2013?', obs: '', answer: false},
  {question: 'O cantineiro tem conhecimento do Decreto n.º36.900/2015?', obs: '', answer: false},
  {question: 'O cantineiro já recebeu a visita da vigilância sanitária para a fiscalização?', obs: '', answer: false},
  {question: 'Os funcionários possuem curso de boas práticas de manipulação de alimentos?', obs: '', answer: false},
  {question: 'Os atestados de saúde ocupacional estão em dia e de fácil acesso?', obs: '', answer: false},
];

export const FormMenuBinary: Array<BinaryForm> = [
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: false},
  {question: 'De maneira geral, os cardápios são bem aceitos pelos alunos?', answer: false },
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: false },
  {question: 'O cardápio fica exposto para os alunos e comunidade', answer: false},
  {question: 'A escola recebe doação de alimentos?', answer: false},
];

export const FormMenuCommentBinary: Array<CommentBinaryForm> = [
        {question: `Houve falta de alimentação escolar durante o período letivo?
           Caso positivo informe o(s) períodos e os produtos?`, answer: false, commentary: ''},
        {question: `A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos
           até que se proceda à próxima distribuição?`, answer: false, commentary: ''},
        {question: 'Há excesso de algum gênero alimentício no cardápio? Qual(ais)?', answer: false, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: false, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: false, commentary: ''},
];

export const ChecklistMenuIteratorArray: Array<Object> = [
  FormMenuCommentBinary,
  FormMenuBinary,
  FormMenuComment,
];
// production checklist section commentaries
export const CheckProdCommentaries: Array<SectionCommentary> = [
  {sectionNumber: 1, commentary: ''},
  {sectionNumber: 2, commentary: ''},
  {sectionNumber: 3, commentary: ''},
  {sectionNumber: 4, commentary: ''},
  {sectionNumber: 5, commentary: ''},
  {sectionNumber: 6, commentary: ''},
  {sectionNumber: 7, commentary: ''},
  {sectionNumber: 8, commentary: ''},
];
// production checklist topic headers
export const CheckProdTopicHeaders: Array<string> = [
  ('Higienização e organização dos ambientes área externa, cozinha e depósito'),
  ('Estrutura física da cozinha e do depósito'),
  ('Abastecimento de água e esgoto sanitário'),
  ('Equipamentos e utensílios'),
  ('Manipuladores de alimentos'),
  ('Pré-preparo, preparo dos alimentos e distruibuição dos alimentos'),
  ('Qualidade da alimentação escolar'),
  ('Documentação'),
];
// production checklist first section questions
export const ChecklistProductionQuestionsOne: Array<String> = [
  'Área externa livre de sujeiras, objetos em desuso, acúmulo de lixo',
  'Área da cozinha limpa e organizada',
  'Área do deposito limpa e organizada',
  'Os alimentos armazenados no depósito estão em conformidade',
  'Presença de alimentos vencidos ou impróprios para o consumo',
  'Presença de alimentos vencidos ou impróprios para o consumo',
  'Presença de planilha de rotina de higienização das instalações',
  'Produtos de higienização regularizados pelo Ministério da Saúde',
  'Presença da lixeira com tampa e pedal funcionando',
  'Sacos de lixo fora da lixeira'
];
// production checklist second section questions
export const ChecklistProductionQuestionsTwo: Array<String> = [
  'Tamanho da cozinha é adequado e em bom estado de conservação',
  'Tamanho do depósito é adeequado e em bom estado de conservação',
  'Existe mais de um depósito de alimentos',
  'Piso é adequado e em bom estado de conservação',
  'Presença de ralo sifonado com o sistema abre e fecha',
  'Parede é adequada e em bom estado de conservação',
  'Teto é adequado e em bom estado de conservação',
  'Portas são adequadas e em bom estado de conservação',
  'Todas as portas possuem rodinho de proteção contra a entrada de insetos e vetores',
  'As portas possuem telas milimétricas de proteção contra entrada de insetos e vetores',
  'Todas as janelas são adequadas e em bom estado de conservação',
  'A iluminação é adequada',
  `A ventilação e circulação de ar são adequadas e capazes de garantir o conforto térmico
  e o ambiente livre de sujidades`,
  'Existe a presença de equipamentos de ventilação artificial',
  'Os equipamentos de ventilação artificial são higienizados regularmente e com a manutenção adequada',
  'Instalações elétricas adequadas',
  `Lavatórios em condições de higiene, dotados de sabonete líquido inodoro antiséptico,toalhas de papel não reciclado
  ou outro sistema higiênico e seguro de secagem e coletorde papel acionados sem contato manual`,
  `Existência de lavatórios na área de manipulação com água corrente, em posições adequadas em relação ao fluxo de produção
  e serviço e em número suficiente de modo a atender toda a área de produção`,
];
// production checklist third section questions
export const ChecklistProductionQuestionsThree: Array<String> = [
  `Reservatório de água e encanamentos acessíveis, dotados de tampas, em satifatória condição de uso,
  livre de vazamentos, infiltrações e descasccamentos`,
  'Fossas e esgotos conectados à rede pública',
  'Caixas de gordura em adequado estado de conservação e funcionamento',
];
// production checklist fourth section questions
export const ChecklistProductionQuestionsFour:Array<String> = [
  'A quantidade de equipamentos é suficiente (geladeira, freezer, fogão, liquidificador,etc.)',
  'Presença de termômetro no freezer',
  'A quantidade de utensílios é suficiente(pratos, copos, talheres, etc)',
  'Existência de registro da higienização dos equipamentos',
  'A higienização é adequada',
  'Produtos de higienização identificados e guardados em local adequado, afastados dos alimentos',
  'Produtos de higienização regularizados pelo Ministério da Saúde',
];
// production checklist fifth section questions
export const ChecklistProductionQuestionsFive: Array<String> = [
  'Uniforme Completo',
  'Manipuladores com esmaltes e/ou unhas compridas',
  'Manipuladores usando adornos (brincos, anéis,pulseiras, relógio, etc.)',
  'Manipuladores com maquiagem (batom, sombra, lápis de olho,etc)',
  'Manipuladores doentes e/ou com cortes feridas nas mãos',
];
// production checklist Sixth section questions
export const ChecklistProductionQuestionsSix: Array<String> = [
  'Higienização de frutas e verduras é realizada de maneira adequada',
  'A água sanitária utilizada é própria para alimentos',
  'O descongelamento dos alimentos é feito na geladeira',
  'Uso de água potável no preparo de gelo e alimentos',
  `Os alimentos preparados, que serão congelados ou refrigerados, são adequadamente acondicionados e identificados com:
  nome da preparação, data de preparo e prazo de validade após a abertura ou retirada da embalagem original`,
  'A escola possui refeitório',
  'O refeitório encontra-se em boas condições (piso, teto, parede, mesas e bancos/cadeiras)',
  'Caso as refeições aconteçam em sala de aula, a escola possui carrinho para transportar os alimentos?',
  'Os carrinhos estão em boas condições e em quantidades suficientes',
];
// production checklist Seventh section questions
export const ChecklistProductionQuestionsSeven: Array<String> = [
  'A alimentação escolar tem paladar saboroso e gostoso',
  'Os alimentos fornecidos pelo orgão de distribuição do estado são de qualidade',
  'Os cardápios são variados',
  'Os cardápios estão afixados para visualização dos alunos e comunidade escolar',
  'Qual o cardápio mais aceito?',
  'Qual o cardápio menos aceito?',
];
// production checklist Eighth section questions
export const ChecklistProductionQuestionsEight: Array<String> = [
  'Presença de comprovante de limpeza da caixa dagua(semestral)',
  'Presença de comprovante de limpeza do reservatório de água subterrâneo(semestral)',
  'Presença de registro de potabilidade da água (RDC 275/2002 - ANVISA e RDC 216/2004 - ANVISA)',
  'Presença de comprovante de limpeza da caixa de gordura(quinzenal)',
  'Presença de comprovante de desinsetização e desratização (semestral)',
  'Atestado de Saúde Ocupacional (ASO) em dia e de fácil visualização (anual)',
  'Os manipuladores de alimentos são, comprovadamente, capacitados em cursos sobre higiene alimentar',
  'A prestação de contas (controle diário) está em dia',
];
// Questions Array Iterator
export const ChecklistProductionQuestionsIteratorArray: Array<String[]> = [
  ChecklistProductionQuestionsOne,
  ChecklistProductionQuestionsTwo,
  ChecklistProductionQuestionsThree,
  ChecklistProductionQuestionsFour,
  ChecklistProductionQuestionsFive,
  ChecklistProductionQuestionsSix,
  ChecklistProductionQuestionsSeven,
  ChecklistProductionQuestionsEight,
];
// production checklist first section answers
export const CheckProdFirstTopic: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false},
  {question: 3, answer: false},
  {question: 4, answer: false},
  {question: 5, answer: false},
  {question: 6, answer: false},
  {question: 7, answer: false},
  {question: 8, answer: false},
  {question: 9, answer: false}
];
// production checklist second section answers
export const CheckProdSecondTopic: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false },
  {question: 3, answer: false },
  {question: 4, answer: false},
  {question: 5, answer: false},
  {question: 6, answer: false},
  {question: 7, answer: false },
  {question: 8, answer: false },
  {question: 9, answer: false},
  {question: 10, answer: false},
  {question: 11, answer: false},
  {question: 12, answer: false},
  {question: 13, answer: false },
  {question: 14, answer: false },
  {question: 15, answer: false},
  {question: 16, answer: false },
  {question: 17, answer: false},
  {question: 18, answer: false }
];
// production checklist third section answers
export const CheckProdThirdTopic: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false },
  {question: 3, answer: false },
];
// production checklist fourth section answers
export const CheckProdFourthTopic: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false },
  {question: 3, answer: false },
  {question: 4, answer: false},
  {question: 5, answer: false},
  {question: 6, answer: false},
  {question: 7, answer: false },
];
// production checklist fifth section answers
export const CheckProdFifthTopic: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false},
  {question: 3, answer: false},
  {question: 4, answer: false},
  {question: 5, answer: false},
];
// production checklist sixth section answers
export const CheckProdSixthTopic: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false},
  {question: 3, answer: false},
  {question: 4, answer: false},
  {question: 5, answer: false},
  {question: 6, answer: false},
  {question: 7, answer: false},
  {question: 8, answer: false},
  {question: 9, answer: false},
];
// production checklist seventh section answers
export const CheckProdSeventhTopic: Array<CommentBinaryForm> = [
  {question: 1, answer: false, commentary: ''},
  {question: 2, answer: false, commentary: ''},
  {question: 3, answer: false, commentary: ''},
  {question: 4, answer: false, commentary: ''},
  {question: 5, answer: false, commentary: ''},
  {question: 6, answer: false, commentary: ''},
];
// production checklist eighth section answers
export const CheckProdEighthTopic: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false},
  {question: 3, answer: false},
  {question: 4, answer: false},
  {question: 5, answer: false},
  {question: 6, answer: false},
  {question: 7, answer: false},
  {question: 8, answer: false},
];
export const IteratorArray: Array<Object> = [
  CheckProdFirstTopic,
  CheckProdSecondTopic,
  CheckProdThirdTopic,
  CheckProdFourthTopic,
  CheckProdFifthTopic,
  CheckProdSixthTopic,
  CheckProdSeventhTopic,
  CheckProdEighthTopic,
  CheckProdCommentaries,
];
