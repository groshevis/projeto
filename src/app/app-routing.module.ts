import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {AaComponent} from './componentes/aa/aa.component';
import {ProgressoComponent} from './componentes/progresso/progresso.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },

  { path: 'cadastro', component:CadastroComponent},
  { path:'aa', component:AaComponent},
  { path:'progresso', component:ProgressoComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
