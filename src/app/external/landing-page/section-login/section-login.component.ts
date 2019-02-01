
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './../../../shared/auth/auth.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-section-login',
  templateUrl: './section-login.component.html',
  styleUrls: ['./section-login.component.scss']
})
export class SectionLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.formLogin = this.formBuilder.group({
      username: [null, [
        Validators.required,
        Validators.email
      ]],
      password: [null, Validators.required]
    })

  }

  onSubmit() {
    if (this.authService.signinUser(this.formLogin.value)){
      console.log('não encontrado')
    }
  }

}
