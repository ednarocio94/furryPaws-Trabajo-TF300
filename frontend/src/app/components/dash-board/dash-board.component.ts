import { Component, inject } from '@angular/core';
import { MascotasService } from '../../services/mascotas.service';
import { Mascotas } from '../../interfaces/mascotas';
import { ToastrService } from 'ngx-toastr';
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dash-board',
  imports: [ReactiveFormsModule, NgFor,NgIf],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})

export class DashboardComponent {
  // products = [
  //   {
  //     id: 1,
  //     name: 'Ejemplo Producto',
  //     description: 'Esta es una descripción del producto.',
  //     time: '30 minutos',
  //     difficulty: 'Fácil',
  //     price: 50,
  //     image: 'https://via.placeholder.com/150'
  //   }
  // ];

mascotasService = inject(MascotasService);
toastrService = inject(ToastrService);

allMacotas: Mascotas[] = [];

  addProduct() {
    console.log('Añadir producto');
    // Lógica para añadir un producto
  }

  editProduct(productId: number) {
    console.log(`Editar producto con ID: ${productId}`);
    // Lógica para editar un producto
  }

  deleteProduct(productId: number) {
    console.log(`Eliminar producto con ID: ${productId}`);
    // Lógica para eliminar un producto
  }
}
