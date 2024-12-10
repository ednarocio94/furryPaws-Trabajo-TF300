import { Component } from '@angular/core';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { CarouselComponent } from "../../component/carousel/carousel.component";
import { CardsComponent } from "../../component/cards/cards.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { Cards2Component } from "../../component/cards2/cards2.component";

@Component({
  selector: 'app-inicio',
  imports: [NavBarComponent, CarouselComponent, CardsComponent, FooterComponent, Cards2Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
