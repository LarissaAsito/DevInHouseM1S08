import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notificacoes = [
    {
      titulo: 'WhatsApp',
      subtitulo: 'Novas mensagens.',
      data: '25/11/2022 20h00'
    },
    {
      titulo: 'Intagram',
      subtitulo: 'Novo reel.',
      data: '25/11/2022 19h00'
    },
    {
      titulo: 'YouTube',
      subtitulo: 'Novo vídeo.',
      data: '25/11/2022 20h30'
    }
  ]
}
