import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { BindTesteComponent } from './bind-teste/bind-teste.component';
import { ModalTesteComponent } from './bind-teste/modal-teste/modal-teste.component';

@NgModule({
    declarations: [
        AppComponent,
        MeuPrimeiroComponent,
        MeuPrimeiro2Component,
        BindTesteComponent,
        ModalTesteComponent
    ],
    imports: [
        BrowserModule,
        CursosModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
