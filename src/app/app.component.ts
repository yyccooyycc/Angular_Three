import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CubeComponent } from './cube/cube.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule],
  
})
export class AppComponent {
  title = 'angular-three';
}
bootstrapApplication(AppComponent);
