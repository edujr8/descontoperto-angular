
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';

/* Guarda de Rotas */
import { AuthGuard } from './shared/auth/auth-guard.service';

const routes: Routes = [

  { /* Direciona para os modulos Internos do sistema onde precisa de autenticação */
    path: 'system',
    loadChildren: 'app/internal/internal.module#InternalModule',
    canActivate: [
      AuthGuard
    ]
  },

  { /* Direciona para os modulos externos do sistema onde não precisa de autenticação */
    path: '',
    loadChildren: 'app/external/external.module#ExternalModule'
  },

  { /* Direciona para o module de Erro 404 (Página nao encontrada) */
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
