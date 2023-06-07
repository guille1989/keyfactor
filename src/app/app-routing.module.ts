import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadosComponent } from './certificados/certificados.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
  { path: 'certificados', component: CertificadosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

