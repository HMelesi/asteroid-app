import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { AsteroidDetailComponent } from './asteroid-detail/asteroid-detail.component';
import { DateInputComponent } from './date-input/date-input.component';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidsComponent,
    AsteroidDetailComponent,
    DateInputComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
