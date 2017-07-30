import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

    constructor() { }

    getCursos(){
        return ['Angular 4', 'Boostrap 4', 'Typescript'];
    }

}
