import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const setupScene = (container) => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( "white" );
    const renderer = new THREE.WebGLRenderer({ antialias: true});    
    //   const camera = new THREE.PerspectiveCamera(
    //     50,
    //     window.innerWidth / window.innerHeight,
    //     1,
    //     500
    //   );


    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, .1, 1500);
    camera.position.set(0, 0, 1500);
    // camera.lookAt(0, 0, 0);

    // const ambientLight = new THREE.AmbientLight("#888888");
    // const pointLight = new THREE.PointLight("#ffffff", 2, 800);
     const controls = new OrbitControls(camera, renderer.domElement);
      const animate = () => {
        renderer.render(scene, camera);
        controls.update();

        requestAnimationFrame(animate);
      };

    //create a blue LineBasicMaterial
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
   // renderer.setClearColor(0xf0f0f0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    //scene.add(ambientLight, pointLight);
    // camera.position.z = 50;
    // camera.position.x = 50;
    // camera.position.y = 50;
   //controls.enablePan = false;   

    container.append(renderer.domElement);
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    animate();

    return scene;
};

export { setupScene };