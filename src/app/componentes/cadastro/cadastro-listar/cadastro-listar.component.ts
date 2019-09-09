import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import * as _ from 'lodash';
import { ModalController } from '@ionic/angular';
import { CadastroSalvarComponent } from '../cadastro-salvar/cadastro-salvar.component';

@Component({
  selector: 'app-cadastro-listar',
  templateUrl: './cadastro-listar.component.html',
  styleUrls: ['./cadastro-listar.component.scss'],
})
export class CadastroListarComponent implements OnInit {

  listaCadastros: Observable<Usuario[]>;
  listaFiltro: Usuario[];
  filtro = {}; //regras ativas do filtro
  cadastros: any;
  valor: string;

  constructor(private banco: AngularFireDatabase, private modal: ModalController) {
    this.listaCadastros = this.banco.list<Usuario>('cadastro').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );
  }

  ngOnInit() {
    this.listaCadastros.subscribe(cadastros => {
        this.cadastros = cadastros;
        this.listaFiltro = _.filter(this.cadastros, _.conforms(this.filtro));
}) }

  excluir(key) {
    this.banco.list('cadastro').remove(key);
    alert("Você excluiu seu cadastro");
  }

  filtrar() {
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.cadastros, _.conforms(this.filtro));
  }

  async alterar(cadastro) {
    const tela = await this.modal.create({
      component: CadastroSalvarComponent , componentProps: { cadastro: cadastro }
    });
    tela.present();
  }




}
