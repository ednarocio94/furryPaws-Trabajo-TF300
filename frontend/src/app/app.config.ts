import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    //Proveedores que necesitan Funcionamiento
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Este proveedor es el que permite que hagamos peticiones al backend
    provideHttpClient(),
    //Este proveedor es para mensajes
    provideToastr({
      timeOut: 2000, //tiempo de duracion en pantalla
      positionClass: 'toast-bottom-left', // definir donde se muestre
      preventDuplicates: true, // evitar duplicados
      easeTime: 0, //Cuanto tiempo pasa antes de que aparesca en pantalla
      progressBar: true // si queremos o no la barra de progreso
    })
  ]
};
