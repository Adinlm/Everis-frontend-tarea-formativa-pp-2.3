import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulariotarea',
  templateUrl: './formulariotarea.component.html',
  styleUrls: ['./formulariotarea.component.css']
})
export class FormulariotareaComponent {

  datos!: string;

  formulario = new FormGroup({
    nombre: new FormControl(''),
    materno: new FormControl(''),
    paterno: new FormControl(''),
    rut: new FormControl(''),
    edad: new FormControl('')
  });


  metodo(){

    this.datos = `Nombre=${this.formulario.value.nombre}
                  Apellido materno=${this.formulario.value.materno},
                  Apellido paterno=${this.formulario.value.paterno}
                  Rut=${this.formulario.value.rut}
                  Edad=${this.formulario.value.edad}`
                  ;
  }

}
