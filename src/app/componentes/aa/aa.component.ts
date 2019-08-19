import { Component } from '@angular/core';
import { AutoAvaliacao } from './entidade/aa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'aa.component',
  templateUrl: 'aa.component.html'
})

export class AaComponent {

  aa: AutoAvaliacao = new AutoAvaliacao();

  constructor(private bd: AngularFireDatabase, private rota: Router) { }

    ngOnInit() { }

  entrar() {
    this.bd.list('aa').push(this.aa);
    this.aa = new AutoAvaliacao();
    alert('Seus dados foram salvos com sucesso!');
  }
}
