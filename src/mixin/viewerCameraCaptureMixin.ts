/**
 * cesium 场景相机位置与方向捕获器
 */

export default function viewerCameraCaptureMixin(viewer, Cesium) {

    if (!Cesium)
        throw '参数Cesium不能为空';
    if (!(viewer instanceof Cesium.Viewer)) {
        throw '参数viewer不是有效的cesium.viewer';
    }

    const div = document.createElement('div');
    Object.assign(div.style, {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 111,
        padding: '1em',
        backgroundColor: 'gray'
    });
    const button = document.createElement('button');
    button.innerText = '打印相机位置和方向';
    button.addEventListener('click', e => {
            const {position, direction, up} = viewer.scene.camera;
            const msg = {
                destination: `(${position.x},${position.y},${position.z})`,
                orientation: {
                    direction: `(${direction.x},${direction.y},${direction.z})`,
                    up: `(${up.x},${up.y},${up.z})`
                }
            }
            console.log(JSON.stringify(msg));
        }
    );

    div.appendChild(button);

    viewer.container.appendChild(div);

}