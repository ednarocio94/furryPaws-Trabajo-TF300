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

}
