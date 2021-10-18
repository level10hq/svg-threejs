import * as THREE from "three";
import * as texts from './texts.json'

import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

let font = null;
const loader = new TTFLoader()
const fontLoader = new FontLoader()
const stokeMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );


function renderText(scene) {
    //https://threejs.org/docs/#examples/en/loaders/FontLoader
    loader.load('./fonts.ttf', fnt => {
        
        font = fontLoader.parse(fnt);
        const textGroup = new THREE.Group();    
        texts.default.forEach((text) => {
           
            var ustring = text.unicodeString.replace(/\"/g, '\\"');
            const geometry = new TextGeometry(ustring, {
                font: font,                 

            })
            
            geometry.translate(-window.innerWidth / 2, -window.innerHeight / 2, 0)
            const mesh = new THREE.Mesh(geometry, stokeMaterial)
            mesh.position.x = text.X;
            mesh.position.y = text.yl
    
            textGroup.add(mesh);
            });

            scene.add(textGroup);
    });           
};

export { renderText };