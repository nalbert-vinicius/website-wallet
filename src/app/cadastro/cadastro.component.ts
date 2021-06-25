import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'nome': new FormControl(null),
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })
  constructor() { }

  ngOnInit(): void {
  }

}
