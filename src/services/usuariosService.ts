import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../app/app.api';

@Injectable()
export class usuariosService {

    constructor(
    private http: HttpClient
    ){ };

    cadastrarUsuarios(data){
        return this.http.post(`${URL_API}/usuarios/cadastrar`, data).toPromise().then((data: any) => data
        );
    }

}