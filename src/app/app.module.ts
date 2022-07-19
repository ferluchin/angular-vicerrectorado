import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AngularSplitModule } from 'angular-split';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AreasConocimientoComponent } from './pages/areas-conocimiento/areas-conocimiento.component';
import { TipoProyectoComponent } from './pages/tipo-proyecto/tipo-proyecto.component';
import { PersonalInternoComponent } from './pages/personal-interno/personal-interno.component';
import { PersonalExternoCooperanteComponent } from './pages/personal-externo-cooperante/personal-externo-cooperante.component';
import { PersonalExternoContratarComponent } from './pages/personal-externo-contratar/personal-externo-contratar.component';
import { InformacionTecnicaProyectoComponent } from './pages/informacion-tecnica-proyecto/informacion-tecnica-proyecto.component';
import { MetodologiaProyectoComponent } from './pages/metodologia-proyecto/metodologia-proyecto.component';
import { CronogramaActividadesComponent } from './pages/cronograma-actividades/cronograma-actividades.component';
import { ResumenPresupuestoComponent } from './pages/resumen-presupuesto/resumen-presupuesto.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { InformacionGeneralComponent } from './pages/informacion-general/informacion-general.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CronogramaEspAComponent } from './pages/cronograma-esp-a/cronograma-esp-a.component';
import { CronogramaEspBComponent } from './pages/cronograma-esp-b/cronograma-esp-b.component';
import { CronogramaEspCComponent } from './pages/cronograma-esp-c/cronograma-esp-c.component';
import { CronogramaEspDComponent } from './pages/cronograma-esp-d/cronograma-esp-d.component';
import { CronogramaEspEComponent } from './pages/cronograma-esp-e/cronograma-esp-e.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { LoginComponent } from './pages/login/login.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AreasConocimientoComponent,
    TipoProyectoComponent,
    PersonalInternoComponent,
    PersonalExternoCooperanteComponent,
    PersonalExternoContratarComponent,
    InformacionTecnicaProyectoComponent,
    MetodologiaProyectoComponent,
    CronogramaActividadesComponent,
    ResumenPresupuestoComponent,
    PruebasComponent,
    InformacionGeneralComponent,
    AdminComponent,
    CronogramaEspAComponent,
    CronogramaEspBComponent,
    CronogramaEspCComponent,
    CronogramaEspDComponent,
    CronogramaEspEComponent,
    SidebarComponent,
    TitlebarComponent,
    LoginComponent
  ],
  imports: [
    AngularSplitModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
