import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Usuario } from './entidade/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

usuario: Usuario = new Usuario();

constructor(private afAuth: AngularFireAuth, private router: Router) {}

logar(){
this.afAuth.auth.signInWithEmailAndPassword(this.usuario.email, this.usuario.senha).then(
() => { this.router.navigate(['aa']); }
).catch( (erro) => alert('Senha ou usuário incorretos!!') );
}

logout() {
this.afAuth.auth.signOut();
this.router.navigate(['/']);
}
}
