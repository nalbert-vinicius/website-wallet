import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuarios } from 'src/model/usuario-model';
import { usuariosService } from 'src/services/usuariosService';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [usuariosService]
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'nome': new FormControl(null),
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })
  constructor(
    public usuariosService: usuariosService
  ) { }

  ngOnInit(): void {
  }


  cadastrarUsuario(){
    var usuario: Usuarios = new Usuarios(
      this.formulario.value.nome,
      this.formulario.value.email,
      this.formulario.value.senha
    );
    
    this.usuariosService.cadastrarUsuarios(usuario).then((data: any) =>{
      console.log(data)
    })
  }

}
