import { SectionCommentary, SectionCommentaryTwo } from './checklist.model';
import { CommentForm, CommentBinaryForm, BinaryForm } from './index';



export const FormMenuTwo: Array<CommentForm> = [
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

export const FormBinary: Array<BinaryForm> = [
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: false},
  {question: 'De maneira geral, os cardápios são bem aceitos pelos alunos?', answer: false },
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: false },
  {question: 'O cardápio fica exposto para os alunos e comunidade', answer: false},
  {question: 'A escola recebe doação de alimentos?', answer: false},
];

export const FormsMenu: Array<CommentBinaryForm> = [
        {question: `Houve falta de alimentação escolar durante o período letivo?
           Caso positivo informe o(s) períodos e os produtos?`, answer: false, commentary: ''},
        {question: `A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos
           até que se proceda à próxima distribuição?`, answer: false, commentary: ''},
        {question: 'Há excesso de algum gênero alimentício no cardápio? Qual(ais)?', answer: false, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: false, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: false, commentary: ''},
];

export const CheckOneCommentaries: Array<SectionCommentary> = [
  {sectionNumber: 1, commentary: ''},
  {sectionNumber: 2, commentary: ''},
  {sectionNumber: 3, commentary: ''},
  {sectionNumber: 4, commentary: ''},
  {sectionNumber: 5, commentary: ''},
  {sectionNumber: 6, commentary: ''},
  {sectionNumber: 7, commentary: ''},
  {sectionNumber: 8, commentary: ''},
];


export const CheckOneTopicHeaders: Array<string> = [
  ('Higienização e organização dos ambientes área externa, cozinha e depósito'),
  ('Estrutura física da cozinha e do depósito'),
  ('Abastecimento de água e esgoto sanitário'),
  ('Equipamentos e utensílios'),
  ('Manipuladores de alimentos'),
  ('Pré-preparo, preparo dos alimentos e distruibuição dos alimentos'),
  ('Qualidade da alimentação escolar'),
  ('Documentação'),
];

export const CheckOneFirstTopic: Array<BinaryForm> = [
  {question: 'Área externa livre de sujeiras, objetos em desuso, acúmulo de lixo', answer: false},
  {question: 'Área da cozinha limpa e organizada', answer: false},
  {question: 'Área do deposito limpa e organizada', answer: false},
  {question: 'Os alimentos armazenados no depósito estão em conformidade', answer: false},
  {question: 'Presença de alimentos vencidos ou impróprios para o consumo', answer: false},
  {question: 'Presença de planilha de rotina de higienização das instalações', answer: false},
  {question: 'Produtos de higienização regularizados pelo Ministério da Saúde', answer: false},
  {question: 'Presença da lixeira com tampa e pedal funcionando', answer: false},
  {question: 'Sacos de lixo fora da lixeira', answer: false}
];

export const CheckOneSecondTopic: Array<BinaryForm> = [
  {question: 'Tamanho da cozinha é adequado e em bom estado de conservação', answer: false},
  {question: 'Tamanho do depósito é adeequado e em bom estado de conservação', answer: false },
  {question: 'Existe mais de um depósito de alimentos', answer: false },
  {question: 'Piso é adequado e em bom estado de conservação', answer: false},
  {question: 'Presença de ralo sifonado com o sistema abre e fecha', answer: false},
  {question: 'Parede é adequada e em bom estado de conservação', answer: false},
  {question: 'Teto é adequado e em bom estado de conservação', answer: false },
  {question: 'Portas são adequadas e em bom estado de conservação', answer: false },
  {question: 'Todas as portas possuem rodinho de proteção contra a entrada de insetos e vetores', answer: false},
  {question: 'As portas possuem telas milimétricas de proteção contra entrada de insetos e vetores', answer: false},
  {question: 'Todas as janelas são adequadas e em bom estado de conservação', answer: false},
  {question: 'A iluminação é adequada', answer: false},
  {question: `A ventilação e circulação de ar são adequadas e capazes de garantir o conforto térmico
   e o ambiente livre de sujidades`, answer: false },
  {question: 'Existe a presença de equipamentos de ventilação artificial', answer: false },
  {question: 'Os equipamentos de ventilação artificial são higienizados regularmente e com a manutenção adequada', answer: false},
  {question: 'Instalações elétricas adequadas', answer: false },
  {question: `Lavatórios em condições de higiene, dotados de sabonete líquido inodoro antiséptico,toalhas de papel não reciclado
   ou outro sistema higiênico e seguro de secagem e coletorde papel acionados sem contato manual`, answer: false},
  {question: `Existência de lavatórios na área de manipulação com água corrente, em posições adequadas em relação ao fluxo de produção
   e serviço e em número suficiente de modo a atender toda a área de produção`, answer: false }
];
export const CheckOneThirdTopic: Array<BinaryForm> = [
  {question: `Reservatório de água e encanamentos acessíveis, dotados de tampas, em satifatória condição de uso,
   livre de vazamentos, infiltrações e descasccamentos`, answer: false},
  {question: 'Fossas e esgotos conectados à rede pública', answer: false },
  {question: 'Caixas de gordura em adequado estado de conservação e funcionamento', answer: false },
];
export const CheckOneFourthTopic: Array<BinaryForm> = [
  {question: 'A quantidade de equipamentos é suficiente (geladeira, freezer, fogão, liquidificador,etc.', answer: false},
  {question: 'Presença de termômetro no freezer', answer: false },
  {question: 'A quantidade de utensílios é suficiente(pratos, copos, talheres, etc)', answer: false },
  {question: 'Existência de registro da higienização dos equipamentos', answer: false},
  {question: 'A higienização é adequada', answer: false},
  {question: 'Produtos de higienização identificados e guardados em local adequado, afastados dos alimentos', answer: false},
  {question: 'Produtos de higienização regularizados pelo Ministério da Saúde', answer: false },
];

export const CheckOneFifthTopic: Array<BinaryForm> = [
  {question: 'Uniforme Completo', answer: false},
  {question: 'Manipuladores com esmaltes e/ou unhas compridas', answer: false},
  {question: 'Manipuladores usando adornos (brincos, anéis,pulseiras, relógio, etc.)', answer: false},
  {question: 'Manipuladores com maquiagem (batom, sombra, lápis de olho,etc)', answer: false},
  {question: 'Manipuladores doentes e/ou com cortes feridas nas mãos', answer: false},
];

export const CheckOneSixthTopic: Array<BinaryForm> = [
  {question: 'Higienização de frutas e verduras é realizada de maneira adequada', answer: false},
  {question: 'A água sanitária utilizada é própria para alimentos', answer: false},
  {question: 'O descongelamento dos alimentos é feito na geladeira', answer: false},
  {question: 'Uso de água potável no preparo de gelo e alimentos', answer: false},
  {question: `Os alimentos preparados, que serão congelados ou refrigerados, são adequadamente acondicionados e identificados com:
   nome da preparação, data de preparo e prazo de validade após a abertura ou retirada da embalagem original`, answer: false},
  {question: 'A escola possui refeitório', answer: false},
  {question: 'O refeitório encontra-se em boas condições (piso, teto, parede, mesas e bancos/cadeiras)', answer: false},
  {question: 'Caso as refeições aconteçam em sala de aula, a escola possui carrinho para transportar os alimentos?', answer: false},
  {question: 'Os carrinhos estão em boas condições e em quantidades suficientes', answer: false},
];

export const CheckOneSeventhTopic: Array<CommentBinaryForm> = [
  {question: 'A alimentação escolar tem paladar saboroso e gostoso', answer: false, commentary: ''},
  {question: 'Os alimentos fornecidos pelo orgão de distribuição do estado são de qualidade', answer: false, commentary: ''},
  {question: 'Os cardápios são variados', answer: false, commentary: ''},
  {question: 'Os cardápios estão afixados para visualização dos alunos e comunidade escolar', answer: false, commentary: ''},
  {question: 'Qual o cardápio mais aceito?', answer: false, commentary: ''},
  {question: 'Qual o cardápio menos aceito?', answer: false, commentary: ''},
];

export const CheckOneEighthTopic: Array<BinaryForm> = [
  {question: 'Presença de comprovante de limpeza da caixa dagua(semestral)', answer: false},
  {question: 'Presença de comprovante de limpeza do reservatório de água subterrâneo(semestral)', answer: false},
  {question: 'Presença de registro de potabilidade da água (RDC 275/2002 - ANVISA e RDC 216/2004 - ANVISA)', answer: false},
  {question: 'Presença de comprovante de limpeza da caixa de gordura(quinzenal)', answer: false},
  {question: 'Presença de comprovante de desinsetização e desratização (semestral)', answer: false},
  {question: 'Atestado de Saúde Ocupacional (ASO) em dia e de fácil visualização (anual)', answer: false},
  {question: 'Os manipuladores de alimentos são, comprovadamente, capacitados em cursos sobre higiene alimentar', answer: false},
  {question: 'A prestação de contas (controle diário) está em dia', answer: false},
];
export const IteratorArray: Array<Object> = [
  CheckOneFirstTopic,
  CheckOneSecondTopic,
  CheckOneThirdTopic,
  CheckOneFourthTopic,
  CheckOneFifthTopic,
  CheckOneSixthTopic,
  CheckOneSeventhTopic,
  CheckOneEighthTopic,
];
