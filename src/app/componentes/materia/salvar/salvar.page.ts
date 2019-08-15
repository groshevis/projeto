import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Materia } from '../entidade/materia';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  materia: Materia = new Materia();
  listaMateria: Observable<Materia[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaMateria = this.fire.list<Materia>('materia').snapshotChanges().pipe(

      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))

    );
  }
  ngOnInit() { }
  salvar() {
    this.fire.list('materia').push(this.materia);
    this.materia = new Materia();
    this.rota.navigate(['materia-listar']);
  }
}
