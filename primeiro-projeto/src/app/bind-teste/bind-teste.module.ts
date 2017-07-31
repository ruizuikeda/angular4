import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindTesteComponent } from './bind-teste.component'
import { ModalTesteComponent } from './modal-teste/modal-teste.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ModalTesteComponent
    ],
    exports: [
        BindTesteComponent
    ],
})
export class BindTesteModule { }
