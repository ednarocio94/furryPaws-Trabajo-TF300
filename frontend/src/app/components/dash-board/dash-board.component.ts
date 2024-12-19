import { Component } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  imports: [],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})

export class DashboardComponent {
  products = [
    {
      id: 1,
      name: 'Ejemplo Producto',
      description: 'Esta es una descripción del producto.',
      time: '30 minutos',
      difficulty: 'Fácil',
      price: 50,
      image: 'https://via.placeholder.com/150'
    }
  ];

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

