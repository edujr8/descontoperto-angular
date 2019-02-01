
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Inport Modulo de Rotas */
import { InternalRoutingModule } from './internal-routing.module';

/* Import Components */
import { InternalComponent } from './internal.component';
import { SidebarComponent } from './../shared/sidebar/sidebar.component'; /* Menu Lateral */
import { NavbarComponent } from './../shared/navbar/navbar.component'; /* Menu Topo */
import { BreadcrumbComponent } from './../shared/breadcrumb/breadcrumb.component'; /* Breadcrumb */

/* Import Modulos Internos */
import { HomeModule } from './home/home.module';
import { MatchHeightModule } from './../shared/directives/match-height.directive';

@NgModule({
  imports: [
    CommonModule,

    /* Modulo de Rotas */
    InternalRoutingModule,
    MatchHeightModule,

    /* Modulos Internos */
    HomeModule
  ],
  declarations: [
    InternalComponent,
    SidebarComponent,
    NavbarComponent,
    BreadcrumbComponent
  ]
})
export class InternalModule { }
