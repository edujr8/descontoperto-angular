
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LandingPageComponent } from './landing-page.component';

/* Componentes da LandingPage */
import { SectionLoginComponent } from './section-login/section-login.component';
import { SectionInformationComponent } from './section-information/section-information.component';
import { SectionBenefitsComponent } from './section-benefits/section-benefits.component';
import { SectionKnowMoreComponent } from './section-know-more/section-know-more.component';
import { SectionRegisterComponent } from './section-register/section-register.component';
import { SectionFooterComponent } from './section-footer/section-footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LandingPageComponent,

    /* Componentes da LandingPage */
    SectionLoginComponent,
    SectionInformationComponent,
    SectionKnowMoreComponent,
    SectionBenefitsComponent,
    SectionRegisterComponent,
    SectionFooterComponent
  ]
})
export class LandingPageModule { }
