import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Usuario } from '../entidade/usuario';

@Component({
  selector: 'app-cadastro-salvar',
  templateUrl: './cadastro-salvar.component.html',
  styleUrls: ['./cadastro-salvar.component.scss'],
})

export class CadastroSalvarComponent implements OnInit {

    cadastro: Usuario = new Usuario();
  constructor(private fire: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {}

  cadastrar() {
    this.fire.list('cadastro').push(this.cadastro);
    this.cadastro = new Usuario();
    alert('Seus dados foram salvos com sucesso!');
  }
}
