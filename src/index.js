import {Cartesian3, Cesium3DTileset, createWorldTerrain, Ion, Transforms, Viewer} from "cesium";
import "cesium/Widgets/widgets.css";
import "../src/css/main.css"
import viewerCameraCaptureMixin from "./mixin/viewerCameraCaptureMixin";

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
    terrainProvider: createWorldTerrain()
});

const tileset = new Cesium3DTileset({url: 'http://localhost:9000/3dtileset/zzm12/tileset.json'});

const Cesium = require('cesium/Cesium');

// Add Cesium OSM Buildings, a global 3D buildings layer.
viewer.scene.primitives.add(tileset);

const position = Cartesian3.fromDegrees(-122.4175, 37.655, 0);
tileset.modelMatrix = Transforms.eastNorthUpToFixedFrame(position);
viewer.extend(viewerCameraCaptureMixin, Cesium);

viewer.scene.camera.setView({
    "destination": new Cartesian3(-2699526.177416536, -4271487.093757556, 3885763.695012362),
    "orientation": {
        "direction": new Cartesian3(-0.5897332441934413, 0.6136512740362536, -0.5250207753668056),
        "up": new Cartesian3(-0.8071096471947745, -0.4252290080517134, 0.40957820757027896)
    }
})