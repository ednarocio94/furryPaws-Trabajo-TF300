import { Component } from '@angular/core';
import { NavBarComponent } from "../../component/nav-bar/nav-bar.component";
import { FooterComponent } from "../../component/footer/footer.component";

@Component({
  selector: 'app-paws',
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './paws.component.html',
  styleUrl: './paws.component.css'
})
export class PawsComponent {

  images = [
    {
      src: 'assets/image1.jpg',
      alt: 'Image 1',
      description: 'This is the description for image 1'
    },
    {
      src: 'assets/image2.jpg',
      alt: 'Image 2',
      description: 'This is the description for image 2'
    },
    {
      src: 'assets/image3.jpg',
      alt: 'Image 3',
      description: 'This is the description for image 3'
    },
    {
      src: 'assets/image4.jpg',
      alt: 'Image 4',
      description: 'This is the description for image 4'
    },
    {
      src: 'assets/image5.jpg',
      alt: 'Image 5',
      description: 'This is the description for image 5'
    },
    {
      src: 'assets/image6.jpg',
      alt: 'Image 6',
      description: 'This is the description for image 6'
    }
  ];

  selectedImage: { src: string; alt: string; description: string } | null = null;

  openModal(image: { src: string; alt: string; description: string }): void {
    this.selectedImage = image;
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      // const modal = new bootstrap.Modal(modalElement);
      // modal.show();
    }
  }

  handleAction(action: string): void {
    console.log(`You clicked ${action}`);
    alert(`You clicked ${action}`);
  }
}
