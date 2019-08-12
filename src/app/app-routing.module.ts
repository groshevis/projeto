import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {CadastroListarComponent} from './componentes/cadastro/cadastro-listar/cadastro-listar.component';
import {AaComponent} from './componentes/aa/aa.component';
import {ProgressoComponent} from './componentes/progresso/progresso.component';
import {LoginComponent} from './componentes/login/login.component';
import {LoginListarComponent} from './componentes/login/login-listar/login-listar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', component:CadastroComponent},
  { path:'aa', component:AaComponent},
  { path:'progresso', component:ProgressoComponent},
  { path:'cadastro-listar', component:CadastroListarComponent},
  {path:'login', component:LoginComponent},
  { path: 'login-listar', component:LoginListarComponent },
  { path: 'estado-listar', loadChildren: './componentes/estado/listar/listar.module#ListarPageModule' },
  { path: 'estado-salvar', loadChildren: './componentes/estado/salvar/salvar.module#SalvarPageModule' },
  { path: 'cidade-salvar', loadChildren: './componentes/cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'cidade-listar', loadChildren: './componentes/cidade/listar/listar.module#ListarPageModule' }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
