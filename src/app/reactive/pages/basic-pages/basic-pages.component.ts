import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-pages',
  templateUrl: './basic-pages.component.html',
})
export class BasicPagesComponent implements OnInit {

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

  ngOnInit(): void {
    this.myform.reset();
  }

  isValidField(field: string): boolean | null {
    return this.myform.controls[field].errors
      && this.myform.controls[field].touched;
  }

  getFieldError(field: string): string | null {
    if (!this.myform.controls[field]) {
      return null;
    }
    const errors = this.myform.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }

    }
    return null;
  }

  onSave(): void {
    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    };
    console.log(this.myform.value);
  }
}
