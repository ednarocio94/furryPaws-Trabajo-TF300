import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CardsComponent } from "../../components/cards/cards.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Cards2Component } from "../../components/cards2/cards2.component";
import { Cards3Component } from "../../components/cards3/cards3.component";
import { BannerComponent } from "../../components/banner/banner.component";
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
