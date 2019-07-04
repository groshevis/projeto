import { Component } from '@angular/core';
import { Login } from './entidade/login';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'login.component',
  templateUrl: 'login.component.html'
})

export class LoginComponent {


  login: Login = new Login();

  constructor(private bd: AngularFireDatabase,
    private rosa: Router) { }

  ngOnInit() { }

  entrar() {
    this.bd.list('login').push(this.login);
    this.login = new Login();
    alert('Seus dados foram salvos com sucesso!');
  }

}
