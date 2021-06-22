import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  { path: 'teste', component: TesteComponent}
]


@NgModule({
  //forRoot mapeamento global forchild mapeamento para rotas internas de componentes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
