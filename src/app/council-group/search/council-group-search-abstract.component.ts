import { CouncilGroup } from '../../models/council-group';
import {
  CouncilGroupService,
  AlertService,
  IbgeService,
  UserService,
  NotificationService,
  ProfileService
} from '../../services/index';
import { Notification } from '../../models/notification';
import { Subscription } from 'rxjs/Subscription';

export abstract class CouncilGroupSearchAbstract {

  private notificationSubs: Subscription;
  public notification: Notification;
  public members: Array<String>;
  public foundPresident = false;
  public codPresident: string;
  public go;

  constructor(
    public notificationService: NotificationService,
    public alertService: AlertService,
    public profileService: ProfileService,
    public userService: UserService,

  ) {}

  openDialog() {
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('overlay').style.opacity = '1';
  }

  closeDialog() {
    document.getElementById('overlay').style.visibility = 'hidden';
    document.getElementById('overlay').style.opacity = '0';
  }

  getCodMembers(result: any) {
    this.members = new Array<String>();
    result.forEach(element => {
      this.members.push(element.links[1].href);
    });
    if (this.members.length > 0) {
      this.getPresidente();
    } else {
      this.alertService.error('Não há membros vinculados ao conselho escolhido!');
    }
  }

  getPresidente() {
    let codUser: string;
    this.members.forEach(element => {
      codUser = element.substring(element.length - 4, element.length);
      this.go = false;
      this.profileService.getProfile(codUser).subscribe(
        result => this.getPresResult(result, codUser),
        error => this.alertService.error('Erro ao buscar presidente do conselho')
      );
    });
  }

  getPresResult(result: any, codUser: string) {
    this.go = true;
    if (result.tipoPerfil.codTipoPerfil === 238) {
      this.foundPresident = true;
      this.codPresident = codUser;
      this.send();
    }
  }

  send() {
    this.notificationSubs = this.notificationService
      .createNotification(this.createNotification())
      .subscribe(
        result =>
          this.alertService.success(
            'Solicitação enviada ao presidente do conselho com sucesso!'
          ),
        error =>
          this.alertService.error(
            'Erro ao enviar solicitação ao presidente do conselho!'
          )
      );
  }

  createNotification() {
    this.notification = new Notification();

    this.notification.description = 'Eu, ' + this.userService.getUserName() +
    ', posso participar do seu Conselho?';
    this.notification.recipient = this.codPresident;
    this.notification.author = this.userService.getUserCod();
    this.notification.type =  'Participar de um conselho';
    return this.notification;
  }
}

