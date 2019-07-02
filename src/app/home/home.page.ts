import { Component } from '@angular/core';
import { Login } from './entidade/login';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

login: Login = new Login();

constructor(private bd: AngularFireDatabase) { }

salvar() {
  this.bd.list('login').push(this.login);
  this.login = new Login();
  alert('Seus dados foram salvos com sucesso!');
}

}
