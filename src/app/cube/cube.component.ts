import { AfterViewInit, Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss'],
  standalone: true,
})
export class CubeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    this.createScene();
    this.startRendererLoop();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('canvas') private canvasRef!: ElementRef;

  //Cube properties
  @Input() public rotationSpeedX: number = 0.005;
  @Input() public rotationSpeedY: number = 0.005;
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
  private geometry = new THREE.BoxGeometry(4, 4, 4);
  private material = new THREE.MeshBasicMaterial({
    map: this.loader.load(this.texture),
  });

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.add(this.cube);

    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    );
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio(){
    return this.canvas.clientWidth/this.canvas.clientHeight
  }

  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  private startRendererLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    })();
  }
}
