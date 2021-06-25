import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'cadastro', component: CadastroComponent},
]


@NgModule({
  //forRoot mapeamento global forchild mapeamento para rotas internas de componentes
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
