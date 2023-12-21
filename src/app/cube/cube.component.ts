import { AfterViewInit, Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  standalone: true,
})
export class CubeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('canvas') private canvasRef!: ElementRef;

  //Cube properties
  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;
  @Input() public texture: string = '/assets/Ricky_Cube.jpeg';

  //Cube properties
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 200;
  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties

  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1, 1, 1);
  private material = new THREE.MeshBasicMaterial({
    map: this.loader.load(this.texture),
  });

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
}
