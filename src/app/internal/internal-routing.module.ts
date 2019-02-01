
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import Components */
import { InternalComponent } from './internal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  /* Redireciona a url quando estiver somente system */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  /* extrutura base de rotas do sistema */
  {
    path: '',
    component: InternalComponent,
    children: [

      { /* Home com apresentação inicial do sistem */
        path: 'home',
        component: HomeComponent,
        data: {
          breadcrumb: 'Home'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternalRoutingModule { }
