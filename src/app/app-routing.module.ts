import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComentariosComponent } from './Component/list-comentarios/list-comentarios.component';
import { AgregarEditarComentarioComponent } from './Component/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentarioComponent } from './Component/ver-comentario/ver-comentario.component';

const routes: Routes = [
  { path: '', component: ListComentariosComponent },
  { path: 'Agregar', component: AgregarEditarComentarioComponent },
  { path: 'Editar:Id', component: AgregarEditarComentarioComponent },
  { path: 'ver', component: VerComentarioComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
