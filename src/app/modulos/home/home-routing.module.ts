import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from '../login/registro/registro.component';
import { HomeComponent } from './home.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { VerProyectoComponent } from './ver-proyecto/ver-proyecto.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
  children:[
    {path:'items',component:ListaItemsComponent},
    {path:'CrearAnteproyecto',component:RegistroComponent},
    {path:'anteproyecto/id',component:VerProyectoComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
