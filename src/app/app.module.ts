import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegistradosComponent } from './components/registrados/registrados.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { CrudserviceService } from './service/crudservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ActuUsuarioComponent } from './components/actu-usuario/actu-usuario.component';
import { VerUsuarioComponent } from './components/ver-usuario/ver-usuario.component';
// LOGIN //
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';

// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('Your-Facebook-app-id')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('919879451731-dqtmue0o2rtg7q0uh94fsh38004tnsc4.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    HomeComponent,
    RegistradosComponent,
    ActuUsuarioComponent,
    VerUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {useHash:  true}),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    CrudserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
