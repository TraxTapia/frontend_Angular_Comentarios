import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/Services/comentario.service';
import { comentario } from 'src/app/interfaces/Comentario';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css'],
})
export class AgregarEditarComentarioComponent {
  agregarComentario: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _ComentarioService: ComentarioService,
    private _Router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.agregarComentario = this.fb.group({
      titulo: ['', Validators.required],
      creador: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }
  ngonInit(): void {}
  agregar() {
    const comentario: comentario = {
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('creador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion: new Date(),
    };
    this._ComentarioService.saveComentario(comentario).subscribe(
      (data) => {
        this._Router.navigate(['/']);
        Swal.fire({
          title: 'Ok',
          text: 'Registro creado correctamente',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        // this.mostrarAlertaExito(); // Llama a la función para mostrar la alerta de éxito.
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // mostrarAlertaExito() {
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'top-end',
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.addEventListener('mouseenter', Swal.stopTimer);
  //       toast.addEventListener('mouseleave', Swal.resumeTimer);
  //     },
  //   });

  //   Toast.fire({
  //     icon: 'success',
  //     title: 'Registro creado correctamente',
  //   });
  //   // this._snackBar.open('Registro creado correctamente', 'Cerrar', {
  //   //   duration: 6000, // Duración en milisegundos que la alerta estará visible (3 segundos en este caso).
  //   // });
  // }
}
