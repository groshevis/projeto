import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Notificacao } from '../entidade/notificacao';


@Component({
  selector: 'app-notificacao-listar',
  templateUrl: './notificacao-listar.component.html',
  styleUrls: ['./notificacao-listar.component.scss'],
})
export class NotificacaoListarComponent implements OnInit {
  
  listaNotificacao: Observable<Notificacao[]>;
  notificacao: Notificacao = new Notificacao();


  constructor(private banco: AngularFireDatabase) {}


  ngOnInit() {}
 salvar() {
    this.banco.list('materia').push(this.notificacao);
    this.notificacao = new Notificacao();
    alert('Seus dados foram salvos com sucesso!');
  }
}
