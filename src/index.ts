import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

class Main{
    scene:Scene = new Scene();
    camera:PerspectiveCamera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer : WebGLRenderer = new WebGLRenderer();
    geometry : BoxGeometry = new BoxGeometry(1,1,1);
    material : MeshBasicMaterial = new MeshBasicMaterial({ color : 0x00ff00 });
    cube : Mesh = new Mesh(this.geometry, this.material);
    
    constructor(){
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    
        this.scene.add(this.cube);
        this.camera.position.z = 5;
        document.body.appendChild(this.renderer.domElement);
    }

    render(){
        requestAnimationFrame(()=>this.render());

        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera); 

    }

    start(){
        this.render();
    }
}


const main = new Main();
main.start();



