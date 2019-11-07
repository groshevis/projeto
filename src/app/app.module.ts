import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {AaComponent} from './componentes/aa/aa.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{LoginComponent} from './componentes/login/login.component';
import{LoginListarComponent} from './componentes/login/login-listar/login-listar.component';
import { CadastroSalvarComponent } from './componentes/cadastro/cadastro-salvar/cadastro-salvar.component';


@NgModule({
  declarations: [AppComponent,  CadastroComponent, AaComponent, CadastroSalvarComponent, LoginComponent, LoginListarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
   AngularFireModule.initializeApp({
     apiKey: "AIzaSyDMYPG_mIWmU4c9bOxU_DjuOuPIM6acBr8",
    authDomain: "sicae-3bcef.firebaseapp.com",
    databaseURL: "https://sicae-3bcef.firebaseio.com",
    projectId: "sicae-3bcef",
    storageBucket: "sicae-3bcef.appspot.com",
    messagingSenderId: "983003245896",
    appId: "1:983003245896:web:392fa976da223ca8a7177d"
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
