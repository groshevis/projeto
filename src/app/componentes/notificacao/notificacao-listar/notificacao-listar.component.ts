import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notificacao-listar',
  templateUrl: './notificacao-listar.component.html',
  styleUrls: ['./notificacao-listar.component.scss'],
})
export class NotificacaoListarComponent implements OnInit {
  listaNotificacao: Observable<Notificacao[]>;

  constructor(private banco: AngularFireDatabas) {
    his.listaNotificacao = this.banco.list<Notificacao>('notificacao').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
   }

  ngOnInit() {}

}
