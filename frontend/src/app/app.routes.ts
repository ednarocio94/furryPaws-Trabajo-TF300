import { Routes } from '@angular/router';

// IMPORTAR PAGINAS QUE SE VAN HA UTILIZAR
import { AdminComponent } from './paginas/admin/admin.component';
import { UsuariosComponent } from './paginas/admin/usuarios/usuarios.component';
import { MascotasComponent } from './paginas/admin/mascotas/mascotas.component';
import { PanelControlComponent } from './paginas/panel-control/panel-control.component';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { PawsComponent } from './paginas/paws/paws.component';
import { SobreNosotrosComponent } from './paginas/sobre-nosotros/sobre-nosotros.component';
import { ContactanosComponent } from './paginas/contactanos/contactanos.component';
import { AdopcionComponent } from './paginas/adopcion/adopcion.component';

import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { RegistroAdminComponent } from './paginas/registro-admin/registro-admin.component';

import { NotFoundComponent } from './paginas/not-found/not-found.component';
import { LoginAdminComponent } from './paginas/login-admin/login-admin.component';


// RUTAS PARA CADA PAGINA
export const routes: Routes = [
//--------------------------------------------------------------------------------------------------------//
    {path:'admin', component:AdminComponent, title:'Admin', children: [
        {path:'usuarios', component: UsuariosComponent, title:'Usuarios'},
        {path:'mascotas', component: MascotasComponent, title:'Mascotas'},
        {path:'', component:PanelControlComponent, }
    ]},
//--------------------------------------------------------------------------------------------------------//
    {path:'', component:InicioComponent, title:'Furry Tails | Inicio'},
    {path:'paws', component:PawsComponent, title:'Paws'},
    {path:'sobre-nosotros', component:SobreNosotrosComponent, title:'Sobre Nosotros'},
    {path:'contactanos', component:ContactanosComponent, title:'Contactanos'},
//--------------------------------------------------------------------------------------------------------//
    {path:'adopcion', component:AdopcionComponent, title:'Proceso Adopción'}, // si tenemos tiempo
    {path:'login', component:LoginComponent, title:'Furry Tails | Inicio de Sesión'},
    {path:'loginAdmin', component:LoginAdminComponent, title:'Furry Tails | Inicio de Sesión Admin'},
    {path:'registro', component:RegistroComponent, title:'Furry Tails | Registro'},
    {path:'registroAdmin', component:RegistroAdminComponent, title:'Furry Tails | Registro Admin'},
//--------------------------------------------------------------------------------------------------------//
    {path:'notFound', component:NotFoundComponent, title:'Error 404'}
];
