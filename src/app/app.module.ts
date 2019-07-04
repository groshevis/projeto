import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {CadastroListarComponent} from './componentes/cadastro/cadastro-listar/cadastro-listar.component';
import {AaComponent} from './componentes/aa/aa.component';
import {ProgressoComponent} from './componentes/progresso/progresso.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{LoginComponent} from './componentes/login/login.component';
import{LoginListarComponent} from './componentes/login/login-listar/login-listar.component';



@NgModule({
  declarations: [AppComponent,  CadastroComponent, AaComponent, ProgressoComponent, CadastroListarComponent, LoginComponent, LoginListarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
   AngularFireModule.initializeApp({
     apiKey: "AIzaSyDuzd7sN354f0BK3424pvwNlcLCh8rH7cE",
    authDomain: "projeto1-50dc5.firebaseapp.com",
    databaseURL: "https://projeto1-50dc5.firebaseio.com",
    projectId: "projeto1-50dc5",
    storageBucket: "projeto1-50dc5.appspot.com",
    messagingSenderId: "168631994042",
    appId: "1:168631994042:web:ecbb0eb2147f09e6"
   }),  AngularFireDatabaseModule
 ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
