import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

//create a blue LineBasicMaterial
const fillMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } );

function renderSVG(svgData)  {
    const svgGroup = new THREE.Group();
    const updateMap = [];
    
    svgGroup.scale.y *= -1;
    svgData.paths.forEach((path) => {
        const shapes = SVGLoader.createShapes(path);
        const style = path.userData.style;

        shapes.forEach((shape) => {
         
            const points = shape.getPoints();
            const geometry = SVGLoader.pointsToStroke(points, style);
            geometry.translate(-window.innerWidth /2, -window.innerHeight/2, 0)
            const mesh = new THREE.Mesh(geometry, fillMaterial)
            // const meshGeometry = new THREE.ExtrudeBufferGeometry(shape, {
            //     depth: 1,
            //     bevelEnabled: false,
            // });
            // const linesGeometry = new THREE.EdgesGeometry(meshGeometry);
            // const mesh = new THREE.Mesh(meshGeometry, fillMaterial);
            //const lines = new THREE.LineSegments(linesGeometry, stokeMaterial);            

            // updateMap.push({ shape, mesh, lines });
            //svgGroup.add(mesh, lines);
            svgGroup.add(mesh);
        });
    });

        // const box = new THREE.Box3().setFromObject(svgGroup);
        // const size = box.getSize(new THREE.Vector3());
        // const yOffset = size.y / -2;
        // const xOffset = size.x / -2;
    
        // Offset all of group's elements, to center them
        // svgGroup.children.forEach((item) => {
        //     item.position.x = xOffset;
        //     item.position.y = yOffset;
        // });
        // svgGroup.rotateX(-Math.PI / 2);
    
        return {
            object: svgGroup,
            // update(extrusion) {
            //     updateMap.forEach((updateDetails) => {
            //         const meshGeometry = new THREE.ExtrudeBufferGeometry(
            //             updateDetails.shape,
            //             {
            //                 depth: extrusion,
            //                 bevelEnabled: false,
            //             }
            //         );
            //         const linesGeometry = new THREE.EdgesGeometry(meshGeometry);
    
            //         updateDetails.mesh.geometry.dispose();
            //         updateDetails.lines.geometry.dispose();
            //         updateDetails.mesh.geometry = meshGeometry;
            //         updateDetails.lines.geometry = linesGeometry;
            //     });
          //  },
        };
};

export { renderSVG };