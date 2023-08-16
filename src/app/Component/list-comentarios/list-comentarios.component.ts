import { Component, OnInit } from '@angular/core';
import { ComentarioService } from 'src/app/Services/comentario.service';
import { comentario } from 'src/app/interfaces/Comentario';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css'],
})
export class ListComentariosComponent implements OnInit {
  _listComentarios: comentario[] = [];
  constructor(private _ComnetarioService: ComentarioService) {}
  ngOnInit(): void {
    this.getComentarios();
  }
  getComentarios() {
    this._ComnetarioService.getListComentario().subscribe(
      (data) => {
        this._listComentarios = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  DeleteComentarioById(Id: any) {
    console.log(Id);
    this._ComnetarioService.deleteRegister(Id).subscribe(
      (data) => {
        Swal.fire({
          title: 'Ok',
          text: 'Registro Borrado correctamente',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
        this.getComentarios();
      },
      (error) => console.log(error)
    );
  }
}
