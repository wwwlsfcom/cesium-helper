
/**
 * 抓取三维空间位置
 */
function viewPositionPickerMixin(viewer,Cesium) {

    const container = viewer.container;

    const __ScreenSpaceEventHandler__ = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
    __ScreenSpaceEventHandler__.setInputAction((movement) => {
        const cartesian = viewer.camera.pickEllipsoid(
            movement.position,
            viewer.scene.globe.ellipsoid
        );
        if (cartesian) {
            log(cartesian);
        }
    }, Cesium.ScreenSpaceEventType.LEFT_DOWN);

    const div = document.createElement('div');
    Object.assign(div.style, {
        position: 'absolute',
        left: 0, top: 0,
        padding:'1em',
        backgroundColor:'gray'
    });
    const textarea = document.createElement('textarea');
    div.appendChild(textarea);

    container.appendChild(div);


    //输出当前抓取的位置日志
    function log(position) {
        if (position instanceof Cesium.Cartesian3) {
            const v = `x:${position.x},y:${position.y},z:${position.z}`;
            textarea.value += "\r\n" + v;
        }
    }


}

export default viewPositionPickerMixin;