import { Component } from '@angular/core';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-registro',
  imports: [NavBarComponent,FooterComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  onSubmit() {
    alert('Formulario enviado');
  }
}
