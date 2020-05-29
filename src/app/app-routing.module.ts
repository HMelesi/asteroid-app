import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { AsteroidDetailComponent } from './asteroid-detail/asteroid-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/asteroids', pathMatch: 'full' },
  { path: 'asteroids', component: AsteroidsComponent },
  { path: 'detail/:id', component: AsteroidDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
