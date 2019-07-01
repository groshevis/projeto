import {Component} from '@angular/core';
import { Usuario } from './entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector:'cadastro.component',
  templateUrl:'cadastro.component.html'
})

export class CadastroComponent{


  cadastro: Usuario = new Usuario();

constructor(private bd: AngularFireDatabase) { }

ngOnInit() {}

cadastrar(){
this.bd.list('cadastro').push(this.cadastro);
this.cadastro = new Usuario();
alert('Seus dados foram salvos com sucesso!');
}

}
