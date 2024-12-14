import { Component } from '@angular/core';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { CarouselComponent } from "../../component/carousel/carousel.component";
import { CardsComponent } from "../../component/cards/cards.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { Cards2Component } from "../../component/cards2/cards2.component";
import { Cards3Component } from "../../component/cards3/cards3.component";
import { BannerComponent } from "../../component/banner/banner.component";

@Component({
  selector: 'app-inicio',
  imports: [NavBarComponent, CarouselComponent, CardsComponent, FooterComponent, Cards2Component, Cards3Component, BannerComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
