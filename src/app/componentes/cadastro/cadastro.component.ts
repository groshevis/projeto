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


  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaMateria = this.fire.list<Materia>('materia').snapshotChanges().pipe(

      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }


  ngOnInit() { }



}




//<ion-button expand="full" color="dark" (click)="excluir(cadastro.key)"> Excluir </ion-button>
//<ion-button expand="full" color="dark" href="cadastro-listar"> Ver todos os cadastros </ion-button>
