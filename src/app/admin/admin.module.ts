import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { AppLayoutModule } from './layout/app.layout.module';

import { CategoriaService } from './inventario/services/categoria.service';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';

import { TableModule } from 'primeng/table';
import { InventarioModule } from './inventario/inventario.module';

@NgModule({
  declarations: [
    PerfilComponent,
    ClienteComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppLayoutModule,
    TableModule,        // ✔ igual que la imagen
    InventarioModule    // ✔ igual que la imagen
  ],
  providers: [
    CategoriaService    // ✔ igual que la imagen
  ]
})
export class AdminModule { }
