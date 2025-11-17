import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { ButtonModule } from "primeng/button";

interface Categoria {
  id?: number;
  nombre: string;
  detalle?: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
  imports: [ButtonModule]
})
export class CategoriaComponent implements OnInit{
  private categoriaService = inject(CategoriaService)
  categorias: Categoria[] = [{nombre: "Prueba"}];
   visible: boolean = false;
  ngOnInit(): void {
      this.getCategorias()
    }
    getCategorias(){
      this.categoriaService.funlistar().subscribe(
        (res:any)=>{
          this.categorias=res;
        },
        (error:any)=>{console.log(error);
    }
  )
}
  mostrarDialog() {
    this.visible = true
    }
  }
