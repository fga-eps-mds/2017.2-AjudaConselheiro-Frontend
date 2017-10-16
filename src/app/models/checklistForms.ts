import { CommentForm, CommentBinaryForm, BinaryForm } from './index';



export const FormMenuTwo: Array<CommentForm> = [
        {question: `Qual a quantidade de frutas e hortaliças que estão sendo oferecidas por aluno,
         durante o período de uma semana?`, answer: ''},
        {question: 'Qual a preparação mais aceita?', answer: ''},
        {question: 'Qual a preparação menos aceita?', answer: ''},
        {question: 'Qual produto é mais aceito?', answer: ''},
        {question: 'Qual produto é menos aceito?', answer: ''},
];

export const FormBinary: Array<BinaryForm> = [
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: null},
  {question: 'De maneira geral, os cardápios são bem aceitos pelos alunos?', answer: null },
  {question: 'De maneira geral, os cardápios são bem elaborados?', answer: null },
  {question: 'O cardápio fica exposto para os alunos e comunidade', answer: null},
  {question: 'A escola recebe doação de alimentos?', answer: null},
];

export const FormsMenu: Array<CommentBinaryForm> = [
        {question: `Houve falta de alimentação escolar durante o período letivo?
           Caso positivo informe o(s) períodos e os produtos?`, answer: null, commentary: ''},
        {question: `A quantidade de gêneros entregues nas escolas foi suficiente para ofertar refeições para todos os alunos
           até que se proceda à próxima distribuição?`, answer: null, commentary: ''},
        {question: 'Há excesso de algum gênero alimentício no cardápio? Qual(ais)?', answer: null, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: null, commentary: ''},
        {question: 'A escola complementa a alimentação escolar? Como?', answer: null, commentary: ''},
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
  {question: 'Área externa livre de sujeiras, objetos em desuso, acúmulo de lixo', answer: null},
  {question: 'Área da cozinha limpa e organizada', answer: null},
  {question: 'Área do deposito limpa e organizada', answer: null},
  {question: 'Os alimentos armazenados no depósito estão em conformidade', answer: null},
  {question: 'Presença de alimentos vencidos ou impróprios para o consumo', answer: null},
  {question: 'Presença de planilha de rotina de higienização das instalações', answer: null},
  {question: 'Produtos de higienização regularizados pelo Ministério da Saúde', answer: null},
  {question: 'Presença da lixeira com tampa e pedal funcionando', answer: null},
  {question: 'Sacos de lixo fora da lixeira', answer: null}
];

export const CheckOneSecondTopic: Array<BinaryForm> = [
  {question: 'Tamanho da cozinha é adequado e em bom estado de conservação', answer: null},
  {question: 'Tamanho do depósito é adeequado e em bom estado de conservação', answer: null },
  {question: 'Existe mais de um depósito de alimentos', answer: null },
  {question: 'Piso é adequado e em bom estado de conservação', answer: null},
  {question: 'Presença de ralo sifonado com o sistema abre e fecha', answer: null},
  {question: 'Parede é adequada e em bom estado de conservação', answer: null},
  {question: 'Teto é adequado e em bom estado de conservação', answer: null },
  {question: 'Portas são adequadas e em bom estado de conservação', answer: null },
  {question: 'Todas as portas possuem rodinho de proteção contra a entrada de insetos e vetores', answer: null},
  {question: 'As portas possuem telas milimétricas de proteção contra entrada de insetos e vetores', answer: null},
  {question: 'Todas as janelas são adequadas e em bom estado de conservação', answer: null},
  {question: 'A iluminação é adequada', answer: null},
  {question: `A ventilação e circulação de ar são adequadas e capazes de garantir o conforto térmico
   e o ambiente livre de sujidades`, answer: null },
  {question: 'Existe a presença de equipamentos de ventilação artificial', answer: null },
  {question: 'Os equipamentos de ventilação artificial são higienizados regularmente e com a manutenção adequada', answer: null},
  {question: 'Instalações elétricas adequadas', answer: null },
  {question: `Lavatórios em condições de higiene, dotados de sabonete líquido inodoro antiséptico,toalhas de papel não reciclado
   ou outro sistema higiênico e seguro de secagem e coletorde papel acionados sem contato manual`, answer: null},
  {question: `Existência de lavatórios na área de manipulação com água corrente, em posições adequadas em relação ao fluxo de produção
   e serviço e em número suficiente de modo a atender toda a área de produção`, answer: null }
];
export const CheckOneThirdTopic: Array<BinaryForm> = [
  {question: `Reservatório de água e encanamentos acessíveis, dotados de tampas, em satifatória condição de uso,
   livre de vazamentos, infiltrações e descasccamentos`, answer: null},
  {question: 'Fossas e esgotos conectados à rede pública', answer: null },
  {question: 'Caixas de gordura em adequado estado de conservação e funcionamento', answer: null },
];
export const CheckOneFourthTopic: Array<BinaryForm> = [
  {question: 'A quantidade de equipamentos é suficiente (geladeira, freezer, fogão, liquidificador,etc.', answer: null},
  {question: 'Presença de termômetro no freezer', answer: null },
  {question: 'A quantidade de utensílios é suficiente(pratos, copos, talheres, etc)', answer: null },
  {question: 'Existência de registro da higienização dos equipamentos', answer: null},
  {question: 'A higienização é adequada', answer: null},
  {question: 'Produtos de higienização identificados e guardados em local adequado, afastados dos alimentos', answer: null},
  {question: 'Produtos de higienização regularizados pelo Ministério da Saúde', answer: null },
];

export const CheckOneFifthTopic: Array<BinaryForm> = [
  {question: 'Uniforme Completo', answer: null},
  {question: 'Manipuladores com esmaltes e/ou unhas compridas', answer: null},
  {question: 'Manipuladores usando adornos (brincos, anéis,pulseiras, relógio, etc.)', answer: null},
  {question: 'Manipuladores com maquiagem (batom, sombra, lápis de olho,etc)', answer: null},
  {question: 'Manipuladores doentes e/ou com cortes feridas nas mãos', answer: null},
];

export const CheckOneSixthTopic: Array<BinaryForm> = [
  {question: 'Higienização de frutas e verduras é realizada de maneira adequada', answer: null},
  {question: 'A água sanitária utilizada é própria para alimentos', answer: null},
  {question: 'O descongelamento dos alimentos é feito na geladeira', answer: null},
  {question: 'Uso de água potável no preparo de gelo e alimentos', answer: null},
  {question: `Os alimentos preparados, que serão congelados ou refrigerados, são adequadamente acondicionados e identificados com:
   nome da preparação, data de preparo e prazo de validade após a abertura ou retirada da embalagem original`, answer: null},
  {question: 'A escola possui refeitório', answer: null},
  {question: 'O refeitório encontra-se em boas condições (piso, teto, parede, mesas e bancos/cadeiras)', answer: null},
  {question: 'Caso as refeições aconteçam em sala de aula, a escola possui carrinho para transportar os alimentos?', answer: null},
  {question: 'Os carrinhos estão em boas condições e em quantidades suficientes', answer: null},
];

export const CheckOneSeventhTopic: Array<CommentBinaryForm> = [
  {question: 'A alimentação escolar tem paladar saboroso e gostoso', answer: null, commentary: ''},
  {question: 'Os alimentos fornecidos pelo orgão de distribuição do estado são de qualidade', answer: null, commentary: ''},
  {question: 'Os cardápios são variados', answer: null, commentary: ''},
  {question: 'Os cardápios estão afixados para visualização dos alunos e comunidade escolar', answer: null, commentary: ''},
  {question: 'Qual o cardápio mais aceito?', answer: null, commentary: ''},
  {question: 'Qual o cardápio menos aceito?', answer: null, commentary: ''},
];

export const CheckOneEighthTopic: Array<BinaryForm> = [
  {question: 'Presença de comprovante de limpeza da caixa dagua(semestral)', answer: null},
  {question: 'Presença de comprovante de limpeza do reservatório de água subterrâneo(semestral)', answer: null},
  {question: 'Presença de registro de potabilidade da água (RDC 275/2002 - ANVISA e RDC 216/2004 - ANVISA)', answer: null},
  {question: 'Presença de comprovante de limpeza da caixa de gordura(quinzenal)', answer: null},
  {question: 'Presença de comprovante de desinsetização e desratização (semestral)', answer: null},
  {question: 'Atestado de Saúde Ocupacional (ASO) em dia e de fácil visualização (anual)', answer: null},
  {question: 'Os manipuladores de alimentos são, comprovadamente, capacitados em cursos sobre higiene alimentar', answer: null},
  {question: 'A prestação de contas (controle diário) está em dia', answer: null},
];
export const IteratorArray: Array<Object> = [
  CheckOneFirstTopic,
  CheckOneSecondTopic,
  CheckOneThirdTopic,
  CheckOneFourthTopic,
  CheckOneFifthTopic,
  CheckOneSeventhTopic,
  CheckOneEighthTopic,
];
