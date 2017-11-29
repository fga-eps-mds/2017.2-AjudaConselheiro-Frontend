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
  {Q: 1, obs: '', A: false},
  {Q: 2, obs: '', A: false},
  {Q: 3, obs: '', A: false},
  {Q: 4, obs: '', A: false},
  {Q: 5, obs: '', A: false},
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
  {Q: 1, A: ''},
  {Q: 2, A: ''},
  {Q: 3, A: ''},
  {Q: 4, A: ''},
  {Q: 5, A: ''},
];
// checklist menu answers with only binary answers
export const ChecklistMenuBinaryAnswers: Array<BinaryForm> = [
  {Q: 1, A: false},
  {Q: 2, A: false },
  {Q: 3, A: false },
  {Q: 4, A: false},
  {Q: 5, A: false},
];
// checklist menu answers with both commentaries and answers
export const ChecklistMenuCommentBinaryAnswers: Array<CommentBinaryForm> = [
  {Q: 1, A: false, com: ''},
  {Q: 2, A: false, com: ''},
  {Q: 3, A: false, com: ''},
  {Q: 4, A: false, com: ''},
  {Q: 5, A: false, com: ''},
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
  {secNum: 1, obs: ''},
  {secNum: 2, obs: ''},
  {secNum: 3, obs: ''},
  {secNum: 4, obs: ''},
  {secNum: 5, obs: ''},
  {secNum: 6, obs: ''},
  {secNum: 7, obs: ''},
  {secNum: 8, obs: ''},
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
  {Q: 1, A: false},
  {Q: 2, A: false},
  {Q: 3, A: false},
  {Q: 4, A: false},
  {Q: 5, A: false},
  {Q: 6, A: false},
  {Q: 7, A: false},
];
// production checklist second section answers
export const CheckProdSecondTopic: Array<BinaryForm> = [
  {Q: 8, A: false},
  {Q: 9, A: false},
  {Q: 10, A: false},
  {Q: 11, A: false},
  {Q: 12, A: false},
  {Q: 13, A: false},
  {Q: 14, A: false},
  {Q: 15, A: false},
  {Q: 16, A: false},
  {Q: 17, A: false},
  {Q: 18, A: false},
  {Q: 19, A: false},
  {Q: 20, A: false},
  {Q: 21, A: false},
  {Q: 22, A: false},
  {Q: 23, A: false},
  {Q: 24, A: false},
  {Q: 25, A: false},
  {Q: 26, A: false},
  {Q: 27, A: false},
  {Q: 28, A: false},
  {Q: 29, A: false},
  {Q: 30, A: false},
  {Q: 31, A: false},
  {Q: 32, A: false},
  {Q: 33, A: false},
  {Q: 34, A: false},
  {Q: 35, A: false},
  {Q: 36, A: false},
  {Q: 37, A: false},
  {Q: 38, A: false},
  {Q: 39, A: false},
];
// production checklist third section answers
export const CheckProdThirdTopic: Array<BinaryForm> = [
  {Q: 40, A: false},
  {Q: 41, A: false },
  {Q: 42, A: false },
  {Q: 43, A: false},
  {Q: 44, A: false},
  {Q: 45, A: false},
  {Q: 46, A: false },
  {Q: 47, A: false },
  {Q: 48, A: false},
  {Q: 49, A: false},
  {Q: 50, A: false},
  {Q: 51, A: false},
  {Q: 52, A: false },
  {Q: 53, A: false },
  {Q: 54, A: false},
  {Q: 55, A: false },
  {Q: 56, A: false},
  {Q: 57, A: false},
  {Q: 58, A: false},
  {Q: 59, A: false},
  {Q: 60, A: false },
  {Q: 61, A: false},
  {Q: 62, A: false },
  {Q: 63, A: false},
  {Q: 64, A: false},
  {Q: 65, A: false},
  {Q: 66, A: false},
];
// production checklist fourth section answers
export const CheckProdFourthTopic: Array<BinaryForm> = [
  {Q: 67, A: false},
  {Q: 68, A: false},
  {Q: 69, A: false},
  {Q: 70, A: false},
  {Q: 71, A: false},
  {Q: 72, A: false},
  {Q: 73, A: false},
  {Q: 74, A: false},
  {Q: 75, A: false},
  {Q: 76, A: false},
  {Q: 77, A: false},
  {Q: 78, A: false},
  {Q: 79, A: false},
  {Q: 80, A: false},
  {Q: 81, A: false},
  {Q: 82, A: false},
  {Q: 83, A: false},
  {Q: 84, A: false},
];
// production checklist fifth section answers
export const CheckProdFifthTopic: Array<BinaryForm> = [
  {Q: 85, A: false},
  {Q: 86, A: false},
  {Q: 87, A: false},
];
// production checklist sixth section answers
export const CheckProdSixthTopic: Array<BinaryForm> = [
  {Q: 88, A: false},
  {Q: 89, A: false},
  {Q: 90, A: false},
  {Q: 91, A: false},
  {Q: 92, A: false},
  {Q: 93, A: false},
  {Q: 94, A: false},
  {Q: 95, A: false},
];
// production checklist seventh section answers
export const CheckProdSeventhTopic: Array<BinaryForm> = [
  {Q: 1, A: false},
  {Q: 2, A: false},
  {Q: 3, A: false},
  {Q: 4, A: false},
  {Q: 5, A: false},
  {Q: 6, A: false},
  {Q: 7, A: false},
  {Q: 8, A: false},
  {Q: 9, A: false},
];
// production checklist eighth section answers
export const CheckProdEighthTopic: Array<CommentBinaryForm> = [
  {Q: 1, A: false, com: null},
  {Q: 2, A: false, com: null},
  {Q: 3, A: false, com: null},
  {Q: 4, A: false, com: null},
  {Q: 5, A: false, com: null},
];
export const CheckProdNinthTopic: Array<BinaryForm> = [
  {Q: 1, A: false},
  {Q: 2, A: false},
  {Q: 3, A: false},
  {Q: 4, A: false},
  {Q: 5, A: false},
  {Q: 6, A: false},
  {Q: 7, A: false},
  {Q: 8, A: false},
  {Q: 9, A: false}
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
