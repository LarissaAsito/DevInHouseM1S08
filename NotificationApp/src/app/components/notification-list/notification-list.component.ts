import { Component, OnInit } from '@angular/core';
import { NOTIFICATIONS } from 'src/app/mockts/notifications';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit{
  notificacoes: Notification[] = NOTIFICATIONS;
  
  constructor(){

  }
  ngOnInit() {

  }

  lerNotificacao(item: Notification): void {
    item.lido = true;
  }

  filtrarNotificacoes(event: any) {
    console.log(event);
  }
}
