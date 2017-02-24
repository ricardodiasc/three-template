import {Scene, PerspectiveCamera, WebGLRenderer,
         BoxGeometry, Mesh, MeshBasicMaterial,
          MeshPhongMaterial, AmbientLight, PointLight,
           Color, JSONLoader, SkinnedMesh, MeshFaceMaterials } from 'three';
import monkey from 'assets/models/monkey.json';


class Main{
    scene:Scene = new Scene();
    camera:PerspectiveCamera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer : WebGLRenderer = new WebGLRenderer();
    geometry : BoxGeometry = new BoxGeometry(1,1,1);
    
    material : MeshBasicMaterial = new MeshBasicMaterial({ color : 0x00f900 });
    materialPhong : MeshPhongMaterial = new MeshPhongMaterial({ color : 0x0000ff });
    cube : Mesh = new Mesh(this.geometry, this.materialPhong);

    pointLight : PointLight;
    
    constructor(){
        this.configurePointLight();

        this.scene.add(this.pointLight);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene.add(new AmbientLight(new Color(0.2,0.2,0.2).getHex()));
        this.configureCamera();

        //Leaving the cube out for a moment
        //this.scene.add(this.cube);
        this.loadModel();
        document.body.appendChild(this.renderer.domElement);
    }

    loadModel(){
        var modelLoader = new JSONLoader();
        modelLoader.load("assets/models/monkey.json",(geometry,materials)=>{
            var mesh = new SkinnedMesh(geometry, new MeshFaceMaterials(materials));
            mesh.position.x = 0; mesh.position.y=0;
            mesh.position.z=0;
            this.scene.add(mesh);
        });
    }

    configurePointLight(){
        this.pointLight = new PointLight();
        this.pointLight.position.set(100,100,100);
        this.pointLight.intensity = 0.8;
    }

    configureCamera(){
        this.camera.position.z = 5;
        this.camera.lookAt(0,0,0);
        
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



