import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  form =  this.formulario.group ({
    nombre: this.formulario.control('', [Validators.required]),
    apellido : this.formulario.control('',[Validators.required]),
    email : this.formulario.control('', [Validators.email , Validators.required]),
    password : ['', Validators.required ],
});

get nombreControl (){
  return this.form.get('nombre');
}

get apellidoControl (){
  return this.form.get('apellido');
}

get emailControl (){
  return this.form.get('email');
}

get passwordControl (){
  return this.form.get ('password');
}

  constructor (private formulario : FormBuilder ) {}

  onSubmit (): void {
    Swal.fire({
      icon: 'success',
      title: 'realizado',
      text: 'usuario registrado',
    });
  }
}