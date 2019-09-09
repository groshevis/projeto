import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Materia } from '../materia/entidade/materia';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cadastro.component',
  templateUrl: 'cadastro.component.html'
})

export class CadastroComponent {


  materia: Materia = new Materia();
  listaMateria: Observable<Materia[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaMateria = this.fire.list<Materia>('materia').snapshotChanges().pipe(

      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  salvar() {
    this.fire.list('materia').push(this.materia);
    this.materia = new Materia();
    this.rota.navigate(['materia-listar']);
  }
  ngOnInit() { }



}




//<ion-button expand="full" color="dark" (click)="excluir(cadastro.key)"> Excluir </ion-button>
//<ion-button expand="full" color="dark" href="cadastro-listar"> Ver todos os cadastros </ion-button>
