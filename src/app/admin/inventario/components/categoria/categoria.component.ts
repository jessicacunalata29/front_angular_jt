import { Component, inject, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

interface Categoria {
  id: number;
  nombre: string;
  detalle: string;
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  private categoriaService = inject(CategoriaService);

  categorias: Categoria[] = [];
  dialog_visible: boolean = false;
  categoria_id: number = 0;

  categoriaForm = new FormGroup({
    nombre: new FormControl(''),
    detalle: new FormControl('')
  });

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.funlistar().subscribe(
      (res: any) => {
        this.categorias = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  mostrarDialog() {
    this.dialog_visible = true;
    this.categoria_id = 0;
    this.categoriaForm.reset();
  }

  guardarCategoria() {

    // -----------------------------------------
    //            EDITAR
    // -----------------------------------------
    if (this.categoria_id > 0) {

      this.categoriaService.funModificar(this.categoria_id, this.categoriaForm.value).subscribe(
        (res: any) => {
          this.dialog_visible = false;
          this.getCategorias();
          this.categoria_id = 1;

          this.alerta("Actualizado", "La categoria se modificó con éxito!", "success");
          this.categoriaForm.reset();
        },
        (error: any) => {
          this.alerta("Error al actualizar", "Verifica los datos!", "error");
        }
      );

    }

    // -----------------------------------------
    //            NUEVO
    // -----------------------------------------
    else {

      this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
        (res: any) => {
          this.dialog_visible = false;
          this.getCategorias();

          this.alerta("REGISTRADO", "La categoria se creó con éxito!", "success");
          this.categoriaForm.reset();
        },
        (error: any) => {
          this.alerta("Error al registrar", "Verifica los datos!", "error");
        }
      );

    }
  }

  editarCategoria(cat: Categoria) {
    this.dialog_visible = true;
    this.categoria_id = cat.id;

    this.categoriaForm.setValue({
      nombre: cat.nombre,
      detalle: cat.detalle
    });
  }

  eliminarCategoria(cat: Categoria) {
    Swal.fire({
      title: "¿ESTAS SEGURO DE ELIMINAR LA CATEGORIA?",
      text: "Una vez eliminado no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {

        this.categoriaService.funEliminar(cat.id).subscribe(
          (res: any) => {
            this.alerta("Eliminado!", "Categoría eliminada.", "success");
            this.getCategorias();
            this.categoria_id = -1;
          },
          (error: any) => {
            this.alerta("ERROR", "Error al intentar eliminar.", "error");
          }
        );

      }
    });
  }

  alerta(title: string, text: string, icon: 'success' | 'error' | 'info' | 'question') {
    Swal.fire({ title, text, icon });
  }

}
