import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { CubeComponent } from './app/cube/cube.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cube/page/1' },
  { path: 'cube/page/1', component: CubeComponent },
  { path: '**', redirectTo: 'cube/page/1' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});