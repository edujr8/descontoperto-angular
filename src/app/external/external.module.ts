
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Inport Modulo de Rotas */
import { ExternalRoutingModule } from './external-routing.module';

/* Import Components */


/* Import Modulos Internos */
import { LandingPageModule } from './landing-page/landing-page.module';

@NgModule({
  imports: [
    CommonModule,

    /* Módulo de Rotas */
    ExternalRoutingModule,

    /* Modulos Internos */
    LandingPageModule,
  ],
  declarations: []
})
export class ExternalModule { }
