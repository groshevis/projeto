import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {AaComponent} from './componentes/aa/aa.component';
import {LoginComponent} from './componentes/login/login.component';
import {LoginListarComponent} from './componentes/login/login-listar/login-listar.component';
import { CadastroSalvarComponent } from './componentes/cadastro/cadastro-salvar/cadastro-salvar.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'cadastro', component:CadastroComponent},
  { path:'aa', component:AaComponent},
  {path: 'cadastro-salvar', component: CadastroSalvarComponent},
  {path:'login', component:LoginComponent},
  { path: 'login-listar', component:LoginListarComponent },
  { path: 'materia-salvar', loadChildren: './componentes/materia/salvar/salvar.module#SalvarPageModule' },
  { path: 'materia', loadChildren: './componentes/materia/materia.module#MateriaPageModule' },
  { path: 'materia-salvar', loadChildren: './componentes/materia/salvar/salvar.module#SalvarPageModule' },
  { path: 'aa-listar', loadChildren: './componentes/aa/listar/listar.module#ListarPageModule' },
  { path: 'aa-salvar', loadChildren: './componentes/aa/salvar/salvar.module#SalvarPageModule' },
  { path: 'intermediario', loadChildren: './home/intermediario/intermediario.module#IntermediarioPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
