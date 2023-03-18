import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { CrateAnteproyectoComponent } from './crate-anteproyecto/crate-anteproyecto.component';
import { HomeComponent } from './home.component';
import { VerProyectoComponent } from './ver-proyecto/ver-proyecto.component';


@NgModule({
  declarations: [
    HeaderHomeComponent,
    ListaItemsComponent,
    CrateAnteproyectoComponent,
    HomeComponent,
    VerProyectoComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
