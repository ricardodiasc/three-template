import {Scene, PerspectiveCamera, WebGLRenderer,
         BoxGeometry, Mesh, MeshBasicMaterial,
          MeshPhongMaterial, AmbientLight, PointLight,
           Color, JSONLoader, SkinnedMesh,ObjectLoader } from 'three';
import * as  monkey from './assets/models/monkey.json';


class Main{
    scene:Scene = new Scene();
    camera:PerspectiveCamera = new PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer : WebGLRenderer = new WebGLRenderer({canvas:document.getElementById("myCanvas"), antialias:true});
    
    material : MeshBasicMaterial = new MeshBasicMaterial({ color : 0x00f900 , wireframe: true});
    materialPhong : MeshPhongMaterial = new MeshPhongMaterial({ color : 0x0000ff });
    
    monkeyMesh:Mesh;

    pointLight : PointLight;
    
    constructor(){
        this.configurePointLight();

        this.scene.add(this.pointLight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene.add(new AmbientLight(new Color(0.2,0.2,0.2).getHex()));
        this.configureCamera();

        this.loadModel();
    }

    loadModel(){
        let modelLoader = new JSONLoader();
        let model = modelLoader.parse(monkey);
        this.monkeyMesh = new Mesh(model.geometry, this.materialPhong);
        
        this.monkeyMesh.position.x = 0;
        this.monkeyMesh.position.y= 0;
        this.monkeyMesh.position.z = 0;
        
        this.scene.add(this.monkeyMesh);
    }

    configurePointLight(){
        this.pointLight = new PointLight();
        this.pointLight.position.set(5,5,5);
        this.pointLight.intensity = 0.8;
    }

    configureCamera(){
        this.camera.position.z = 5;
        this.camera.lookAt(0,0,0);
        
    }

    render(){
        requestAnimationFrame(()=>this.render());

        this.monkeyMesh.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera); 

    }

    start(){
        this.render();
    }
}


const main = new Main();
main.start();



