import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  botoes = ['Todos', 'Lidos', 'Não lidos'];
  @Output() botaoFiltro = new EventEmitter<string>();

  filtrar(tipo: string) {
    console.log(tipo);
    this.botaoFiltro.emit(tipo);
  }
}
