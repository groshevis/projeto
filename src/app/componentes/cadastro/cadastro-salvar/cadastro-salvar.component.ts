import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Usuario } from '../entidade/usuario';
import { Materia } from '../.././materia/entidade/materia';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-salvar',
  templateUrl: './cadastro-salvar.component.html',
  styleUrls: ['./cadastro-salvar.component.scss'],
})

export class CadastroSalvarComponent implements OnInit {

    materia: Materia = new Materia();
  listaMateria: Observable<Materia[]>;
  cadastro: Usuario = new Usuario();

  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaMateria = this.fire.list<Materia>('materia').snapshotChanges().pipe(

      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))

    );
   }

  ngOnInit() {}

  salvar() {
    this.fire.list('materia').push(this.materia);
    this.materia = new Materia();
    this.rota.navigate(['materia-listar']);
  }

  cadastrar() {
    this.fire.list('cadastro').push(this.cadastro);
    this.cadastro = new Usuario();
    alert('Seus dados foram salvos com sucesso!');
  }
}
