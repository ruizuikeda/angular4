import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ModalTesteComponent } from './modal-teste/modal-teste.component'

@Component({
    selector: 'app-bind-teste',
    templateUrl: './bind-teste.component.html',
    styleUrls: ['./bind-teste.component.css']
})
export class BindTesteComponent implements OnInit {

    bsModalRef: BsModalRef;
    constructor(public bsModalRef: BsModalRef) {}




    url: string = 'http://graphiscomunicacao.com.br'
    cursoAngular: boolean = true
    imagem: string = 'http://lorempixel.com/400/200/business'

    objImagem: object = {
        src: 'http://lorempixel.com/400/200/business',
        alt: 'imagem'
    }





    getValor() {
        return 1;
    }



    ngOnInit() {

    }

}
