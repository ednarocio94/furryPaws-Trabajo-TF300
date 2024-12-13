import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Aqui debemos 
import {ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
//import { FormsModule } from '@angular/forms'; Se usa en plantillas pero no te permiten conectar la base de datos 
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
// los formularios reactivos trabajan de forma dinamica y me permiten acceder a la base de datos

/*
 trabajan con grupo de formularios  y tienen un grupo de controles 
*/

formularioLogin = new FormGroup({
email: new FormControl(""),
password: new FormControl(""),
});

// esta funcion nos permite controla lo que pasa con nuestro formulario al usar el boton submit 
handlesubmit(){
  // se muestra en consola  la info que estamos recibiendo 
  console.log ( "esta es la info que recibimos del imput del email"+
    // llamamos al grupo del formulario 
    this.formularioLogin.value.email
  );
  console.log ( "esta es la info que recibimos del imput del password"+
    this.formularioLogin.value.password
  );
}

password: string = '';
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }



}


