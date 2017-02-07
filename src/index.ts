import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, MeshBasicMaterial } from 'three';


const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer : WebGLRenderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const body: HTMLElement = document.getElementsByTagName("body")[0];
body.appendChild(renderer.domElement);
//document.body.appendChild(renderer);

const geometry = new BoxGeometry(1,1,1);
const material = new MeshBasicMaterial({ color : 0x00ff00 });
const cube = new Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;



const render = function(){
    requestAnimationFrame(render);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;


    renderer.render(scene, camera); 
}


render();



