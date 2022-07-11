import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    EducacionComponent,
    FooterComponent,
    ProyectosComponent,
    AcercaDeComponent,
    HeaderComponent,
    BannerComponent,
    LoginComponent,
    ExperienciaComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
