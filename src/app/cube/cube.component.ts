import { AfterViewInit, Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  standalone: true
})
export class CubeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('canvas') private canvasRef: ElementRef;

}
