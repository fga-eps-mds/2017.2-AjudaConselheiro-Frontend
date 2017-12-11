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

export abstract class CouncilGroupDeleteAbstract {

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

}

