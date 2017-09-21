import { Component, OnInit } from '@angular/core';
import {CheckQuestion} from '../checklist.model';

@Component({
  selector: 'app-checklistone',
  templateUrl: './checklistone.component.html',
  styleUrls: ['./checklistone.component.css']
})
export class ChecklistoneComponent implements OnInit {
  //This component is destined to the checklist corresponding to
  // LISTA PARA VERIFICAÇÃO DAS BOAS PRÁTICAS DE FABRICAÇÃO
  private checkSecOne: CheckQuestion[] = [
    new CheckQuestion("Área externa livre de sujeiras, objetos em desuso, acúmulo de lixo"),
    new CheckQuestion("Área da cozinha limpa e organizada"),
    new CheckQuestion("Área do deposito limpa e organizada"),
    new CheckQuestion("Os alimentos armazenados no depósito estão em conformidade"),
    new CheckQuestion("Presença de alimentos vencidos ou impróprios para o consumo"),
    new CheckQuestion("Presença de planilha de rotina de higienização das instalações"),
    new CheckQuestion("Produtos de higienização regularizados pelo Ministério da Saúde"),
    new CheckQuestion("Presença da lixeira com tampa e pedal funcionando"),
    new CheckQuestion("Sacos de lixo fora da lixeira"),
  ]
  private checkSecTwo: CheckQuestion[]=[
    new CheckQuestion("Tamanho da cozinha é adequado e em bom estado de conservação"),
    new CheckQuestion("Tamanho do depósito é adeequado e em bom estado de conservação"),
    new CheckQuestion("Existe mais de um depósito de alimentos"),
    new CheckQuestion("Piso é adequado e em bom estado de conservação"),
    new CheckQuestion("Presença de ralo sifonado com o sistema abre e fecha"),
    new CheckQuestion("Parede é adequada e em bom estado de conservação"),
    new CheckQuestion("Teto é adequado e em bom estado de conservação"),
    new CheckQuestion("Portas são adequadas e em bom estado de conservação"),
    new CheckQuestion("Todas as portas possuem rodinho de proteção contra a entrada de insetos e vetores"),
    new CheckQuestion("As portas possuem telas milimétricas de proteção contra entrada de insetos e vetores"),
    new CheckQuestion("Todas as janelas são adequadas e em bom estado de conservação"),
    new CheckQuestion("A iluminação é adequada"),
    new CheckQuestion("A ventilação e circulação de ar são adequadas e capazes de garantir o conforte térmico e o ambiente livre de sujidades"),
    new CheckQuestion("Existe a presença de equipamentos de ventilação artificial"),
    new CheckQuestion("Os equipamentos de ventilação artificial são higienizados regularmente e com a manutenção adequada"),
    new CheckQuestion("Instalações elétricas adequadas"),
    new CheckQuestion("Lavatórios em condições de higiene, dotados de sabonete líquido inodoro antiséptico,toalhas de papel não reciclado ou outro sistema higiênico e seguro de secagem e coletorde papel acionados sem contato manual"),
    new CheckQuestion("Existência de lavatórios na área de manipulação com água corrente, em posições adequadas em relação ao fluxo de produção e serviço e em número suficiente de modo a atender toda a área de produção"),
    ]
    private checkSecThree: CheckQuestion[]=[
      new CheckQuestion("Reservatório de água e encanamentos acessíveis, dotados de tampas, em satifatóriacondição de uso, livre de vazamentos, infiltrações e descasccamentos"),
      new CheckQuestion("Fossas e esgotos conectados à rede pública"),
      new CheckQuestion("Caixas de gordura em adequado estado de conservação e funcionamento"),
    ]
    private checkSecFour: CheckQuestion[]=[
      new CheckQuestion("A quantidade de equipamentos é suficiente (geladeira, freezer, fogão, liquidificador,etc."),
      new CheckQuestion("Presença de termômetro no freezer"),
      new CheckQuestion("A quantidade de utensílios é suficiente(pratos, copos, talheres, etc)"),
      new CheckQuestion("Existência de registro da higienização dos equipamentos"),
      new CheckQuestion("A higienização é adequada"),
      new CheckQuestion("Produtos de higienização identificados e guardados em local adequado, afastados dos alimentos"),
      new CheckQuestion("Produtos de higienização regularizados pelo Ministério da Saúde"),
    ]
    private checkSecFive: CheckQuestion[]=[
      new CheckQuestion("Uniforme Completo"),
      new CheckQuestion("Manipuladores com esmaltes e/ou unhas compridas"),
      new CheckQuestion("Manipuladores usando adornos (brincos, anéis,pulseiras, relógio, etc.)"),
      new CheckQuestion("Manipuladores com maquiagem (batom, sombra, lápis de olho,etc)"),
      new CheckQuestion("Manipuladores doentes e/ou com cortes feridas nas mãos"),
    ]
    private checkSecSix: CheckQuestion[]=[
      new CheckQuestion("Higienização de frutas e verduras é realizada de maneira adequada"),
      new CheckQuestion("A água sanitária utilizada é própria para alimentos"),
      new CheckQuestion("O descongelamento dos alimentos é feito na geladeira"),
      new CheckQuestion("Uso de água potável no preparo de gelo e alimentos"),
      new CheckQuestion("Os alimentos preparaddos, que serão congelados ou refrigerados, são adeqquadamente acondicionados e identificados com: nome da preparação, data de preparo e prazo de validade após a abertura ou retirada da embalagem original"),
      new CheckQuestion("A escola possui refeitório"),
      new CheckQuestion("O refeitório encontra-se em boas condições (piso, teto, parede, mesas e bancos/cadeiras)"),
      new CheckQuestion("Caso as refeições aconteçam em sala de aula, a escola possui carrinho para transportar os alimentos?"),
      new CheckQuestion("Os carrinhos estão em boas condições e em quantidades suficientes"),
    ]
    private checkSecSeven: CheckQuestion[]=[
      new CheckQuestion("A alimentação escolar tem paladar saboroso e gostoso"),
      new CheckQuestion("Os alimentos fornecidos pelo orgão de distribuição do estado são de qualidade"),
      new CheckQuestion("Os cardápios são variados"),
      new CheckQuestion("Os cardápios estão afixados para visualização dos alunos e comunidade escolar"),
      new CheckQuestion("Qual o cardápio mais aceito?"),
      new CheckQuestion("Qual o cardápio menos aceito?"),
    ]
    private checkSecEight: CheckQuestion[]=[
      new CheckQuestion("Presença de comprovante de limpeza da caixa d'agua(semestral)"),
      new CheckQuestion("Presença de comprovante de limpeza do reservatório de água subterrâneo(semestral)"),
      new CheckQuestion("Presença de registro de potabilidade da água (RDC 275/2002 - ANVISA e RDC 216/2004 - ANVISA)"),
      new CheckQuestion("Presença de comprovante de limpeza da caixa de gordura(quinzenal)"),
      new CheckQuestion("Presença de comprovante de desinsetização e desratização (semestral)"),
      new CheckQuestion("Atestado de Saúde Ocupacional (ASO) em dia e de fácil visualização (anual)"),
      new CheckQuestion("Os manipuladores de alimentos são, comprovadamente, capacitados em cursos sobre higiene alimentar"),
      new CheckQuestion("A prestação de contas (controle diário) está em dia"),
    ]
  constructor() { }

  ngOnInit() {
  }

}
