import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
    selector: 'app-modal-teste',
    templateUrl: './modal-teste.component.html',
    styleUrls: ['./modal-teste.component.css']
})
export class ModalTesteComponent implements OnInit {

    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}

    public openModalWithComponent() {
        let list = ['Open a modal with component', 'Pass your data', 'Do something else', '...'];
        this.bsModalRef = this.modalService.show(ModalTesteComponent);
        this.bsModalRef.content.title = 'Modal with component';
        this.bsModalRef.content.list = list;
        setTimeout(() => {
            list.push('PROFIT!!!');
        }, 2000);
    }

    ngOnInit() {
    }

}
