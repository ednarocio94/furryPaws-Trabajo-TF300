import { Component } from '@angular/core';
import { Button, Modal } from 'bootstrap';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import { PetCardComponent } from "../../components/pet-card/pet-card.component";


@Component({
  selector: 'app-image-gallery',
  templateUrl: './paws.component.html',
  styleUrls: ['./paws.component.css'],
  imports: [NavBarComponent, FooterComponent, CommonModule]
})
export class PawsComponent {
  // Array de imágenes con título y contenido
  images = [
    {
      src: 'assets/pawsAssets/contenedorLucas.png',
      title: 'Imagen 1',
      content: 'Esta es la descripción de la imagen 1',
      button:'Adoptame'
    },
    {
      src: 'assets/pawsAssets/contenedorLuna.png',
      title: 'Imagen 2',
      content: 'Esta es la descripción de la imagen 2',
    },
    {
      src: 'assets/pawsAssets/contenedorTequila.png',
      title: 'Imagen 3',
      content: 'Esta es la descripción de la imagen 3',
    },
    {
      src: 'assets/pawsAssets/contenedorWiskey.png',
      title: 'Imagen 4',
      content: 'Esta es la descripción de la imagen 4',
    },
    {
      src: 'assets/pawsAssets/Ginebra.png',
      title: 'Imagen 5',
      content: 'Esta es la descripción de la imagen 5',
    },
    {
      src: 'assets/pawsAssets/contenedorLucas.png',
      title: 'Imagen 6',
      content: 'Esta es la descripción de la imagen 6',
    },
  ];

  // Datos del modal
  modalData = {
    title: '',
    content: '',
  };

  // Abre el modal y asigna los datos
  openModal(image: any) {
    this.modalData.title = image.title;
    this.modalData.content = image.content;

    // Referencia al modal de Bootstrap
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }
}
