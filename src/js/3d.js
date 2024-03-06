import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const container = document.getElementById('container-3d');
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.01, 1000);
camera.position.set(0, 4, 10);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setSize(container.clientWidth, container.clientHeight);

container.appendChild(renderer.domElement);

const AmbientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(AmbientLight);

const PointLight = new THREE.PointLight(0xffffff, 3);
scene.add(PointLight);

/******** Modelo GLTF ************/

const loaderGLTF = new GLTFLoader();

let model;

loaderGLTF.load('src/assets/models/my_computer/scene.gltf',
    function (gltf) {
        model = gltf.scene;
        scene.add(model);
        model.position.set(0, 0, 0);

    });

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);

    if (model) { // Check if the model is loaded before trying to access it
        model.rotation.y += 0.005; // Change this value to adjust the speed of rotation
    }

    renderer.render(scene, camera);
}

animate();