import { SectionCommentary, SectionCommentaryTwo } from './checklist.model';
import { CommentForm, CommentBinaryForm, BinaryForm } from '../index';


// cafeteria checklist questions
export const ChecklistCafeteriaQuestions: Array<String> = [
  'O cantineiro tem conhecimento da Lei n.º5.146/2013?',
  'O cantineiro tem conhecimento do Decreto n.º36.900/2015?',
  'O cantineiro já recebeu a visita da vigilância sanitária para a fiscalização?',
  'Os funcionários possuem curso de boas práticas de manipulação de alimentos?',
  'Os atestados de saúde ocupacional estão em dia e de fácil acesso?',
];
// cafeteria checklist answers
export const ChecklistCafeteriaAnswers: Array<SectionCommentaryTwo> = [
  {question: 1, obs: '', answer: false},
  {question: 2, obs: '', answer: false},
  {question: 3, obs: '', answer: false},
  {question: 4, obs: '', answer: false},
  {question: 5, obs: '', answer: false},
];
// checklist menu questions with only commentary answers
export const ChecklistMenuCommentQuestions: Array<String> = [
  `Qual a quantidade de frutas e hortaliças que estão sendo oferecidas por aluno,
  durante o período de uma semana?`,
  'Qual a preparação mais aceita?',
  'Qual a preparação menos aceita?',
  'Qual produto é mais aceito?',
  'Qual produto é menos aceito?'
];
// checklist menu questions with only binary answers
export const ChecklistMenuBinaryQuestions: Array<String> = [
  'De maneira geral, os cardápios são bem elaborados?',
  'De maneira geral, os cardápios são bem aceitos pelos alunos?',
  'De maneira geral, os cardápios são bem elaborados?',
  'O cardápio fica exposto para os alunos e comunidade',
  'A escola recebe doação de alimentos?',
];
// checklist menu questions with both commentary and binary answers
export const ChecklistMenuCommentBinaryQuestions: Array<String> = [
  'Houve falta de alimentação escolar durante o período letivo? Caso positivo informe o(s) períodos e os produtos?',
  `A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos
  até que se proceda à próxima distribuição?`,
  'Há excesso de algum gênero alimentício no cardápio? Qual(ais)?',
  'A escola complementa a alimentação escolar? Como?',
  'A escola complementa a alimentação escolar? Como?',
];

// checklist menu answers with only commentary answers
export const ChecklistMenuCommentAnswers: Array<CommentForm> = [
  {question: 1, answer: ''},
  {question: 2, answer: ''},
  {question: 3, answer: ''},
  {question: 4, answer: ''},
  {question: 5, answer: ''},
];
// checklist menu answers with only binary answers
export const ChecklistMenuBinaryAnswers: Array<BinaryForm> = [
  {question: 1, answer: false},
  {question: 2, answer: false },
  {question: 3, answer: false },
  {question: 4, answer: false},
  {question: 5, answer: false},
];
// checklist menu answers with both commentaries and answers
export const ChecklistMenuCommentBinaryAnswers: Array<CommentBinaryForm> = [
  {question: 1, answer: false, commentary: ''},
  {question: 2, answer: false, commentary: ''},
  {question: 3, answer: false, commentary: ''},
  {question: 4, answer: false, commentary: ''},
  {question: 5, answer: false, commentary: ''},
];

export const ChecklistMenuQuestionIteratorArray: Array<String[]> = [
  ChecklistMenuCommentBinaryQuestions,
  ChecklistMenuBinaryQuestions,
  ChecklistMenuCommentQuestions,
];
export const ChecklistMenuAnswerIteratorArray: Array<Object> = [
  ChecklistMenuCommentBinaryAnswers,
  ChecklistMenuBinaryAnswers,
  ChecklistMenuCommentAnswers,
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
  ('Arredores da Escola'),
  ('Estoque de Alimentos'),
  ('Cozinha'),
  ('Refeitório'),
  ('Abastecimento de água e esgoto sanitário'),
  ('Manipuladores de alimentos'),
  ('Pré-preparo, preparo dos alimentos e distruibuição dos alimentos'),
  ('Qualidade da alimentação escolar'),
  ('Documentação'),
];
// production checklist first section questions arredores da escola
export const ChecklistProductionQuestionsOne: Array<String> = [// 7
  ('Lixo a céu aberto'),
  ('Água parada'),
  ('Lixeiras destampadas'),
  ('Sacos de lixo fora da lixeira'),
  ('Animais próximos à escola'),
  ('Local sujo'),
  ('Objetos abandonados'),
];
// production checklist second section questions estoque de alimentos
export const ChecklistProductionQuestionsTwo: Array<String> = [// 32
  ('Escola não possui Estoque de Alimentos'),
  ('Alimentos vencidos'),
  ('Embalagens roídas'),
  ('Insetos dentro das embalagens'),
  ('Alimentos desorganizados'),
  ('Alimentos em contato com o chão'),
  ('Alimentos dentro de caixas'),
  ('Produtos de limpeza junto aos alimentos'),
  ('Embalagens abertas'),
  ('Prateleiras enferrujadas'),
  ('Prateleiras encostadas na parede'),
  ('Local abafado'),
  ('Contato direto dos raios de sol com as embalagens'),
  ('Falta de controle de entrada de alimentos'),
  ('Falta de controle de saída de alimentos'),
  ('Telhado sem forro'),
  ('Telhado com furos'),
  ('Congelador sem termômetro'),
  ('Lixeiras destampadas'),
  ('Chão difícil de limpar'),
  ('Parede difícil de limpar'),
  ('Janelas sem tela de proteção'),
  ('Portas sem tela de proteção'),
  ('Portas sem rodapé'),
  ('Insetos sobrevoando o local'),
  ('Animais com livre circulação'),
  ('Ventilador de teto empoeirado'),
  ('Equipamentos sujos'),
  ('Local mal iluminado'),
  ('Local sujo'),
  ('Objetos que não sejam alimentos'),
  ('Lixo não é armazenado em local fechado'),
];
// production checklist third sections questions cozinha
export const ChecklistProductionQuestionsThree: Array<String> = [// 27
  'Escola não possui Cozinha',
  'Telhado sem forro',
  'Telhado com furos',
  'Congelador sem termômetro',
  'Lixeiras destampadas',
  'Chão difícil de limpar',
  'Parede difícil de limpar',
  'Janelas sem tela de proteção',
  'Portas sem tela de proteção',
  'Portas sem rodapé',
  'Insetos sobrevoando o local',
  'Animais',
  'Ventilador de teto empoeirado',
  'Equipamentos sujos',
  'Local mal iluminado',
  'Local sujo',
  'Lixo não é armazenado em local fechado',
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
// production checklist fourth sections questions refeitório
export const ChecklistProductionQuestionsFour: Array<String> = [// 18
  'Escola não possui Refeitório',
  'Alimentos prontos sem proteção',
  'Refeição sendo servida sem talheres',
  'Alunos compartilhando os copos no bebedouro',
  'Pia sem sabonete e papel toalha para lavar as mãos',
  'Não vi pia',
  'Telhado sem forro',
  'Telhado com furos',
  'Lixeiras destampadas',
  'Chão difícil de limpar',
  'Parede difícil de limpar',
  'Janelas sem tela de proteção',
  'Portas sem tela de proteção',
  'Portas sem rodapé',
  'Insetos sobrevoando o local',
  'Ventilador de teto empoeirado',
  'Local mal iluminado',
  'Local sujo',
];
// production checklist fifth section questions Abastecimento de água e esgoto sanitário
export const ChecklistProductionQuestionsFive: Array<String> = [ // 3
  `Reservatório de água e encanamentos acessíveis, dotados de tampas, em satifatória condição de uso,
  livre de vazamentos, infiltrações e descascamentos`,
  'Fossas e esgotos conectados à rede pública',
  'Caixas de gordura em adequado estado de conservação e funcionamento',
];
// production checklist sixth section questions manipuladores de alimentos
export const ChecklistProductionQuestionsSix: Array<String> = [// 8
  'Uniforme Completo',
  'Manipuladores com esmaltes',
  'Manipuladores com unhas compridas',
  'Manipuladores sem touca',
  'Visitantes sem touca',
  'Manipuladores usando adornos (brincos, anéis,pulseiras, relógio, etc.)',
  'Manipuladores com maquiagem (batom, sombra, lápis de olho,etc)',
  'Manipuladores doentes e/ou com cortes feridas nas mãos',
];
// production checklist Seventh section questions Pré-preparo, preparo dos alimentos e distruibuição dos alimentos
export const ChecklistProductionQuestionsSeven: Array<String> = [ // 9
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
// production checklist eighth section questions Qualidade da alimentação escolar
export const ChecklistProductionQuestionsEight: Array<String> = [// 5
  'A alimentação escolar tem paladar saboroso e gostoso',
  'Os cardápios são variados',
  'Os cardápios estão afixados para visualização dos alunos e comunidade escolar',
  'Qual o cardápio mais aceito?', // commentary question
  'Qual o cardápio menos aceito?', // commentary question
];
// production checklist Ninth section questions documentação
export const ChecklistProductionQuestionsNine: Array<String> = [// 9
  'Ausência de registro de imunização',
  'Ausência de registro de higienização dos utensílios',
  'Ausência de registro de capacitação ou treinamento de merendeiras',
  'Ausência de registro de potabilidade da água',
  'Ausência de registro de exames periódicos dos manipuladores',
  'Presença de comprovante de limpeza da caixa d´água potavel(semestral)',
  'Presença de comprovante de limpeza do reservatório de água subterrâneo(semestral)',
  'Presença de comprovante de limpeza da caixa de gordura(quinzenal)',
  'Presença de comprovante de desinsetização e desratização (semestral)',
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
  ChecklistProductionQuestionsNine,
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
];
// production checklist second section answers
export const CheckProdSecondTopic: Array<BinaryForm> = [
  {question: 8, answer: false},
  {question: 9, answer: false},
  {question: 10, answer: false},
  {question: 11, answer: false},
  {question: 12, answer: false},
  {question: 13, answer: false},
  {question: 14, answer: false},
  {question: 15, answer: false},
  {question: 16, answer: false},
  {question: 17, answer: false},
  {question: 18, answer: false},
  {question: 19, answer: false},
  {question: 20, answer: false},
  {question: 21, answer: false},
  {question: 22, answer: false},
  {question: 23, answer: false},
  {question: 24, answer: false},
  {question: 25, answer: false},
  {question: 26, answer: false},
  {question: 27, answer: false},
  {question: 28, answer: false},
  {question: 29, answer: false},
  {question: 30, answer: false},
  {question: 31, answer: false},
  {question: 32, answer: false},
  {question: 33, answer: false},
  {question: 34, answer: false},
  {question: 35, answer: false},
  {question: 36, answer: false},
  {question: 37, answer: false},
  {question: 38, answer: false},
  {question: 39, answer: false},
];
// production checklist third section answers
export const CheckProdThirdTopic: Array<BinaryForm> = [
  {question: 40, answer: false},
  {question: 41, answer: false },
  {question: 42, answer: false },
  {question: 43, answer: false},
  {question: 44, answer: false},
  {question: 45, answer: false},
  {question: 46, answer: false },
  {question: 47, answer: false },
  {question: 48, answer: false},
  {question: 49, answer: false},
  {question: 50, answer: false},
  {question: 51, answer: false},
  {question: 52, answer: false },
  {question: 53, answer: false },
  {question: 54, answer: false},
  {question: 55, answer: false },
  {question: 56, answer: false},
  {question: 57, answer: false},
  {question: 58, answer: false},
  {question: 59, answer: false},
  {question: 60, answer: false },
  {question: 61, answer: false},
  {question: 62, answer: false },
  {question: 63, answer: false},
  {question: 64, answer: false},
  {question: 65, answer: false},
  {question: 66, answer: false},
];
// production checklist fourth section answers
export const CheckProdFourthTopic: Array<BinaryForm> = [
  {question: 67, answer: false},
  {question: 68, answer: false},
  {question: 69, answer: false},
  {question: 70, answer: false},
  {question: 71, answer: false},
  {question: 72, answer: false},
  {question: 73, answer: false},
  {question: 74, answer: false},
  {question: 75, answer: false},
  {question: 76, answer: false},
  {question: 77, answer: false},
  {question: 78, answer: false},
  {question: 79, answer: false},
  {question: 80, answer: false},
  {question: 81, answer: false},
  {question: 82, answer: false},
  {question: 83, answer: false},
  {question: 84, answer: false},
];
// production checklist fifth section answers
export const CheckProdFifthTopic: Array<BinaryForm> = [
  {question: 85, answer: false},
  {question: 86, answer: false},
  {question: 87, answer: false},
];
// production checklist sixth section answers
export const CheckProdSixthTopic: Array<BinaryForm> = [
  {question: 88, answer: false},
  {question: 89, answer: false},
  {question: 90, answer: false},
  {question: 91, answer: false},
  {question: 92, answer: false},
  {question: 93, answer: false},
  {question: 94, answer: false},
  {question: 95, answer: false},
];
// production checklist seventh section answers
export const CheckProdSeventhTopic: Array<BinaryForm> = [
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
// production checklist eighth section answers
export const CheckProdEighthTopic: Array<CommentBinaryForm> = [
  {question: 1, answer: false, commentary: null},
  {question: 2, answer: false, commentary: null},
  {question: 3, answer: false, commentary: null},
  {question: 4, answer: false, commentary: null},
  {question: 5, answer: false, commentary: null},
];
export const CheckProdNinthTopic: Array<BinaryForm> = [
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
export const IteratorArray: Array<Object> = [
  CheckProdFirstTopic,
  CheckProdSecondTopic,
  CheckProdThirdTopic,
  CheckProdFourthTopic,
  CheckProdFifthTopic,
  CheckProdSixthTopic,
  CheckProdSeventhTopic,
  CheckProdEighthTopic,
  CheckProdNinthTopic,
  CheckProdCommentaries,
];
