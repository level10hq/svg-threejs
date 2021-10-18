import './style.css'
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { setupScene } from "./scene";
import fs from 'fs'
import { renderSVG } from "./svg";

import { renderText } from './text';

const defaultExtrusion = 1;
const container = document.querySelector("#app");
const extrusionInput = document.querySelector("#input");
const scene = setupScene(container);

renderText(scene)

const svgUrl = './example.svg';
const loader = new SVGLoader();
loader.load(svgUrl,(svg) =>{

  //svgObject = new THREE.SVGObject(svg);
  const { object, update } = renderSVG(svg);
  //scene.add(object);

  scene.add(object);

  // extrusionInput.addEventListener("input", () => {
  //   update(Number(extrusionInput.value));
  // });
  // extrusionInput.value = defaultExtrusion;
})




// import * as THREE from "three";
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 100 );
// camera.lookAt( 0, 0, 0 );

// const scene = new THREE.Scene();

// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add( line );
// renderer.render( scene, camera );