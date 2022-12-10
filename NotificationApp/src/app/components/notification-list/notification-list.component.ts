import { Component } from '@angular/core';
import { NOTIFICATIONS } from 'src/app/mockts/notifications';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notificacoes: Notification[] = NOTIFICATIONS;
  

  lerNotificacao(item: Notification): void {
    item.lido = true;
  }
}
