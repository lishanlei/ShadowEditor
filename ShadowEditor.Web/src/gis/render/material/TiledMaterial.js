import TiledVertex from '../shader/tiled_vertex.glsl';
import TiledFragment from '../shader/tiled_fragment.glsl';
import BingTileSystem from '../../utils/BingTileSystem';

/**
 * 瓦片材质
 * @param {*} x 
 * @param {*} y 
 * @param {*} z 
 */
function TiledMaterial(x, y, z) {
    THREE.ShaderMaterial.call(this);

    this.vertexShader = TiledVertex;
    this.fragmentShader = TiledFragment;
    this.side = THREE.DoubleSide;

    this.uniforms = {
        x: {
            type: 'i',
            value: x,
        },
        y: {
            type: 'i',
            value: y,
        },
        z: {
            type: 'i',
            value: z,
        },
        map: {
            type: 't',
            value: new THREE.TextureLoader().load((new BingTileSystem()).tileXYToUrl(x, y, z))
        }
    };
}

TiledMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype);
TiledMaterial.prototype.constructor = TiledMaterial;

export default TiledMaterial;