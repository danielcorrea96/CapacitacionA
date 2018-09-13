import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { RegistradosComponent } from './components/registrados/registrados.component';
import { ActuUsuarioComponent } from './components/actu-usuario/actu-usuario.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'registrados', component: RegistradosComponent },
    { path: 'actualizar/:id', component: ActuUsuarioComponent },
    { path: 'verUsuario/:id', component: VerUsuarioComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},
];


