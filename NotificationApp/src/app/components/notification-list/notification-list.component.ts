import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NOTIFICATIONS } from 'src/app/mockts/notifications';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit{
  notificacoes: Notification[] = NOTIFICATIONS;

  notificacoesFiltradas: Notification[] = [];

  filtroPassado = '';
  
  constructor(private router: Router, private route: ActivatedRoute){

  }
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.filtroPassado = params['filtro']

      this.notificacoesFiltradas = []
      this.notificacoes.forEach(notificacao => {
        if (this.filtroPassado === 'lidos') {
          if (notificacao.lido) {
            this.notificacoesFiltradas.push(notificacao)
          }
        }
        if (this.filtroPassado === 'nao-lidos') {
          if(!notificacao.lido) {
            this.notificacoesFiltradas.push(notificacao)
          }
        }
        if (this.filtroPassado === 'todos') {
          this.notificacoesFiltradas = [...this.notificacoes]
        }
      })
    })
  }

  lerNotificacao(item: Notification): void {
    item.lido = true;
  }

  filtrarNotificacoes(event: any) {
    if (event === 'Todos'){
      event = 'todos';
    } else if (event === 'Lidos'){
      event = 'lidos';
    } else if (event === 'Não lidos'){
      event = 'nao-lidos';
    } else {
      event = '';
    }
    this.router.navigate(['/home/' + event])
  }
}
