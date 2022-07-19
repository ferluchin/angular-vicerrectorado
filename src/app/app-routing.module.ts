import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AreasConocimientoComponent } from './pages/areas-conocimiento/areas-conocimiento.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CronogramaActividadesComponent } from './pages/cronograma-actividades/cronograma-actividades.component';
import { CronogramaEspAComponent } from './pages/cronograma-esp-a/cronograma-esp-a.component';
import { CronogramaEspBComponent } from './pages/cronograma-esp-b/cronograma-esp-b.component';
import { CronogramaEspCComponent } from './pages/cronograma-esp-c/cronograma-esp-c.component';
import { CronogramaEspDComponent } from './pages/cronograma-esp-d/cronograma-esp-d.component';
import { CronogramaEspEComponent } from './pages/cronograma-esp-e/cronograma-esp-e.component';
import { HomeComponent } from './pages/home/home.component';
import { InformacionGeneralComponent } from './pages/informacion-general/informacion-general.component';
import { InformacionTecnicaProyectoComponent } from './pages/informacion-tecnica-proyecto/informacion-tecnica-proyecto.component';
import { MetodologiaProyectoComponent } from './pages/metodologia-proyecto/metodologia-proyecto.component';
import { PersonalExternoContratarComponent } from './pages/personal-externo-contratar/personal-externo-contratar.component';
import { PersonalExternoCooperanteComponent } from './pages/personal-externo-cooperante/personal-externo-cooperante.component';
import { PersonalInternoComponent } from './pages/personal-interno/personal-interno.component';
import { PruebasComponent } from './pages/pruebas/pruebas.component';
import { ResumenPresupuestoComponent } from './pages/resumen-presupuesto/resumen-presupuesto.component';
import { TipoProyectoComponent } from './pages/tipo-proyecto/tipo-proyecto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'admin', component: AdminComponent },

  { path: 'informacion-general', component: InformacionGeneralComponent },
  { path: 'areas-conocimiento', component: AreasConocimientoComponent },
  { path: 'tipo-proyecto', component: TipoProyectoComponent },
  { path: 'personal-interno', component: PersonalInternoComponent },
  { path: 'personal-externo-contratar', component: PersonalExternoContratarComponent },
  { path: 'personal-externo-cooperante', component: PersonalExternoCooperanteComponent },
  { path: 'informacion-tecnica-proyecto', component: InformacionTecnicaProyectoComponent },
  { path: 'metodologia-proyecto', component: MetodologiaProyectoComponent },
  { path: 'cronograma-actividades', component: CronogramaActividadesComponent },
  { path: 'cronograma-esp-a', component: CronogramaEspAComponent },
  { path: 'cronograma-esp-b', component: CronogramaEspBComponent },
  { path: 'cronograma-esp-c', component: CronogramaEspCComponent },
  { path: 'cronograma-esp-d', component: CronogramaEspDComponent },
  { path: 'cronograma-esp-e', component: CronogramaEspEComponent },
  { path: 'resumen-presupuesto', component: ResumenPresupuestoComponent },
  { path: 'pruebas', component: PruebasComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
