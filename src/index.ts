import {Scene, PerspectiveCamera, WebGLRenderer,
         Mesh, MeshBasicMaterial,
          MeshPhongMaterial, AmbientLight, PointLight,
           Color } from 'three';
import { Stats } from 'three-stats' ;
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


class Main{
    scene:Scene = new Scene();
    stats = new Stats();
    camera:PerspectiveCamera = new PerspectiveCamera(35, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer : WebGLRenderer = new WebGLRenderer({canvas:<HTMLCanvasElement>document.getElementById("myCanvas"), antialias:true});
    
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

        this.loadModelGLTF();
        document.body.appendChild(this.stats.dom);
    }

    loadModelGLTF() {
        let gltfLoader = new GLTFLoader();
        gltfLoader.load('assets/webmonkey.glb',
            (gltf)=>{
                this.monkeyMesh = <Mesh>gltf.scene.children[0];
                this.monkeyMesh.position.x = 0;
                this.monkeyMesh.position.y= 0;
                this.monkeyMesh.position.z = 0;
                
                this.scene.add(this.monkeyMesh);
            });
        
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
        this.stats.begin();
        
        //While not loaded
        if(this.monkeyMesh) {
            this.monkeyMesh.rotation.y -= 0.01;
        }
        this.renderer.render(this.scene, this.camera); 
        this.stats.end();
        requestAnimationFrame(()=>this.render());

    }

    start(){
        this.render();
    }
}


const main = new Main();
main.start();



