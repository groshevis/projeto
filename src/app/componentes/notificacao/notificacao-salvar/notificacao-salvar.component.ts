import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Notificacao } from '../entidade/notificacao';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notificacao-salvar',
  templateUrl: './notificacao-salvar.component.html',
  styleUrls: ['./notificacao-salvar.component.scss'],
})
export class NotificacaoSalvarComponent implements OnInit {

    notificacao : Notificacao = new Notificacao();
  constructor(private fire: AngularFireDatabase, private rota: Router, private modalController: ModalController) { }

  ngOnInit() {}

  notificar() {
    if(this.notificacao.key == null){
      this.fire.list('notificacao').push(this.notificacao);
      this.notificacao = new Notificacao();
      alert('Seus dados foram salvos com sucesso!');
    }
}
}
