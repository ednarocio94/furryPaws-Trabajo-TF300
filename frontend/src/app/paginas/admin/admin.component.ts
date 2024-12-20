import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mascotas } from '../../interfaces/mascotas';
import { MascotasService } from '../../services/mascotas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


  // 1. injeccion de variables
  _dataService = inject(MascotasService);

  // 2. variables
  allMascotas: Mascotas[] = [];

  nombre: string = '';
  edad: number = 0;
  imagen: string = '';
  showDiv: boolean = false;
  editMode: boolean = false;  
  editMascotaId: string | undefined | null= null;

  //obtener datos
  obtenerDatos() {
    this._dataService.getMascotas().subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.allMascotas = res;
        // console.log(this.allProducts);
      },
      error: (err) => {
        console.error('Hubo un error', err);
      }
    });
  }

  //crear datos
  crearDatos() {

    if (this.nombre === '' || this.imagen === '' || this.edad === 0) {
      alert('Ingrese todos los campos');
    } else {

      const nuevoProducto: Mascotas = {
        nombre: this.nombre,
        imagen: this.imagen,
        edad: this.edad,
        
      };

      this._dataService.createMascota(nuevoProducto).subscribe({
        next: (res: any) => {
          if (res) {
            console.log('res', res);
            this.obtenerDatos();
          } else {
            console.error('Hubo un error');
          }
        },
        error: () => {
          console.error('Hubo un error', err);
        }
      });
    }
  }

  //modificar productos
  //modificar productos
  identificarId(id: string | undefined ) {
    this.editMascotaId = id;
    this.editMode = true;
    this.showDiv = true;
    console.log(this.editMascotaId);
  }

  modificarProducto() {
    console.log('Entré');
    console.log(this.editMascotaId, this.nombre, this.imagen, this.precio);

    if (!this.nombre || !this.imagen || this.precio <= 0) {
        alert('Ingrese todos los campos');
    } else if (this.editMascotaId) {
        const mascotaActualizada: Mascotas = {
            nombre: this.nombre,
            imagen: this.imagen,
            edad: this.edad
        };

        this._dataService.updateProduct(this.editProductId, productoActualizado).subscribe({
            next: (res: any) => {
                if (res) {
                    console.log('res', res);
                    this.obtenerDatos();
                    this.toggleDiv();
                } else {
                    console.error('Hubo un error');
                }
            },
            error: (err) => {
                console.error('Hubo un error', err);
            }
        });
    }
}
  //Borrar productos
  deleteMascota(id: string | undefined) {
    console.log('Producto a borrar:', id);

    this._dataService.deleteMascota(id).subscribe({
        next: (res: any) => {
            if (res) {
                console.log('res', res);
                this.obtenerDatos();
            } else {
                console.error('Hubo un error');
            }
        },
        error: (err) => {
            console.error('Hubo un error', err);
        }
    });
}

  toggleDiv() {
    this.showDiv = !this.showDiv;
    if (!this.showDiv) {
      this.nombre = '';
      this.imagen = '';
      this.edad = 0;
      this.editMode = false;
      this.editMascotaId = null;
    }
  }


  limpiarCampos() {
    this.nombre === '';
    this.imagen === '';
    this.edad === 0;
  }

  ngOnInit() {
    this.obtenerDatos();

  }

}



