import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../entidade/login';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-login-listar',
  templateUrl: './login-listar.component.html',
  styleUrls: ['./login-listar.component.scss'],
})
export class LoginListarComponent implements OnInit {

  listaLogin: Observable<Login[]>;

  constructor(private banco: AngularFireDatabase) {
    this.listaLogin = this.banco.list<Login>('login').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  ngOnInit() { }
}
