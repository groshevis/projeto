import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Usuario} from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.component.html',
  styleUrls: ['./cadastro-listar.component.scss'],
})
export class CadastroListarComponent implements OnInit {

  listaCadastros: Observable<Usuario[]>;

  constructor(private banco: AngularFireDatabase) {
    this.listaCadastros = this.banco.list<Usuario>('usuario').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key:linha.payload.key,...linha.payload.val()
      })))
    );
  }

  ngOnInit() {}

}
