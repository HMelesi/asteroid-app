import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', redirectTo: '/asteroids', pathMatch: 'full' },
  { path: 'asteroids', component: AsteroidsComponent },
  { path: 'second', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
