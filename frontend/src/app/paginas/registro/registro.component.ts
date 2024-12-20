import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";
import { UsuariosService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, FooterComponent],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  // Inyección de dependencias
  private _usuarioService = inject(UsuariosService);
  private _toastrService = inject(ToastrService);
  private _router = inject(Router);


  formularioRegistro = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    isAdult: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl(''),
    size: new FormControl(''),
    age: new FormControl(''),
    image: new FormControl(null),
  });

  onSubmit() {
    const nuevoUsuario = this.formularioRegistro.value;

    this._usuarioService.postUsuarios(nuevoUsuario).subscribe({
      // respuesta exitosa
      next: (res: any) => {
        console.log('Respuesta exitosa:', res);
        this._toastrService.success('Usuario registrado exitosamente', 'Registro');
        this._router.navigate(['/']); // Redirige al inicio
      },
      // error
      error: (err: any) => {
        console.log('Error al registrar usuario:', err.error.mensaje);
        this._toastrService.error(err.error.mensaje || 'Ocurrió un error al registrar el usuario');
        this.formularioRegistro.reset(); // Resetea el formulario
      }
    });
  }
}
