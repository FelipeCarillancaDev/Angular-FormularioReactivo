import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
})
export class BasicPagesComponent {

  // public myform: FormGroup = new FormGroup({
  //   name: new FormGroup('', [], []),
  //   price: new FormGroup(0, [], []),
  //   inStorage: new FormGroup(0, [], [])
  // });

  public myform: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {
    this.myform = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      price: [0, [
        Validators.required,
        Validators.min(0)
      ]],
      inStorage: [0, [
        Validators.required,
        Validators.min(0)
      ]]
    });
  }

  onSave(): void {
    if (this.myform.invalid) return;
    console.log(this.myform.value);

    this.myform.reset();
  }
}
