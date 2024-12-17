import { Component } from '@angular/core';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { CardsComponent } from "../../component/cards/cards.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { Cards2Component } from "../../component/cards2/cards2.component";
import { Cards3Component } from "../../component/cards3/cards3.component";
import { BannerComponent } from "../../component/banner/banner.component";
import { Card4Component } from "../../component/card4/card4.component";
import { Card5Component } from "../../component/card5/card5.component";

@Component({
  selector: 'app-inicio',
  imports: [NavBarComponent, CardsComponent, FooterComponent, Cards2Component, Cards3Component, BannerComponent, Card4Component, Card5Component],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
