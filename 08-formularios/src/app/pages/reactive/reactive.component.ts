import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched;
  }

  get ciudadNoValida(){
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }

  get calleNoValida(){
    return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched;
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', Validators.required],
      correo: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      direccion: this.fb.group({
        ciudad: ['', Validators.required],
        calle: ['', Validators.required]
      })
    });
  }

  guardar(){
    console.log(this.forma);

    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach(control => {

        if(control instanceof FormGroup){
          Object.values(control.controls).forEach(control => control.markAsTouched())
        } else {
          control.markAsTouched();
        }
      });

      
    }
  }
}
