import { Component, OnInit } from '@angular/core';
import {AutoAvaliacao} from '../entidade/aa';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})
export class SalvarPage implements OnInit {

  aa :AutoAvaliacao = new AutoAvaliacao();

  constructor(private fire: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {
  }
  salvar(){
     this.fire.list('aa').push(this.aa);
     this.aa = new AutoAvaliacao();
     this.rota.navigate(['aa-listar']);
 }
 cadastrar() {
   this.fire.list('aa').push(this.aa);
   this.aa = new AutoAvaliacao();
   alert('Seus dados foram salvos com sucesso!');
 }
}
