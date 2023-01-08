/* mediaDevicesAPIサポートチェック */
if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("can use webcam");
}


/* 要素読み込み */
window.onload = () => {
    const video = document.getElementById("camera");
    

    /* カメラ設定 */
    const constrains ={
        audio: false,
        video: {
            width: 300, height: 200,
            facingMode: "user" //フロントカメラ利用
            //facingModee: {exact: "environment"} //リアカメラ利用
        }
    };

    /* カメラをビデオと同期 */
    navigator.mediaDevices.getUserMedia(constrains).then( (stream) => {
        video.srcObject = stream;
        video.onloadedmetadata = (e) => {
            video.play();
        };
    })
    .catch ( (err) => {
        console.log(err.name + ": " + err.message);
    });
};