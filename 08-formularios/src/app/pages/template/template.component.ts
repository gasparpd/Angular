import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Gaspar',
    apellido: 'Prieto',
    correo: 'prueba@prueba.com',
    pais: 'CRI',
    genero: 'F'
  }

  paises: any[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises()
      .subscribe(paises => {
        this.paises = paises;
        this.paises.unshift({
          nombre: '[Seleccione País]',
          codigo: ''
        })
      });
  }

  guardar(forma: NgForm) {
    console.log(forma);
    console.log(forma.value);
    
    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

}
