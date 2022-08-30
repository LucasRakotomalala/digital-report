import { LancementComponent } from './lancement/lancement.component';
import { DeveloppementComponent } from './developpement/developpement.component';
import { ApplicationComponent } from './application/application.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'application', component: ApplicationComponent
  },
  {
    path: 'lancement', component: LancementComponent
  },
  {
    path: 'developpement', component: DeveloppementComponent
  },
  {
    path: '', redirectTo: '/application', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
