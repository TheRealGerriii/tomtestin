/*
File: app.component.ts
Author: Hermányi Gergely
Copyright: 2022, Hermányi Gergely
Group: Szoft II N
Date: 2022-01-13
Github: https://github.com/TheRealGerriii
Licenc: GNU GPL
*/
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tomtestin';

  eredmenyVisible = false;

  calcForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.calcForm = this.formBuilder.group({
      magassag: [''],
      testomeg: [''],
      testomegindex: [''],
    });
  }

  onClickSzamit() {
    let magassag = Number(this.calcForm.value.magassag)/100;
    let testomeg = Number(this.calcForm.value.testomeg);

    let testomegindex = testomeg / Math.pow(magassag, 2);
    this.calcForm.patchValue({testomegindex: testomegindex});
    this.eredmenyVisible = true;
  }
}
