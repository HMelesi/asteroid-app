import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { AsteroidDetailComponent } from './asteroid-detail/asteroid-detail.component';
import { DateInputComponent } from './date-input/date-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/dateselect', pathMatch: 'full' },
  { path: 'dateselect', component: DateInputComponent },
  { path: 'asteroids/:date', component: AsteroidsComponent },
  { path: 'detail/:id', component: AsteroidDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
