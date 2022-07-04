<template>
    <div>
        <div id="map" style="width:100%;height:350px;"></div>
    </div>
</template>

<script>
export default {
    name: "KakaoMapApi",
    methods: {},
    mounted() {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 지도를 클릭한 위치에 표출할 마커입니다
        var marker = new kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다
            position: map.getCenter()
        });

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        var zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
// 지도에 마커를 표시합니다
        marker.setMap(map);

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다
            var latlng = mouseEvent.latLng;

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);

        });
    }
}
</script>

<style scoped>
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

.map_wrap {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 350px;
}

.radius_border {
    border: 1px solid #919191;
    border-radius: 5px;
}

.custom_typecontrol {
    position: absolute;
    top: 10px;
    right: 10px;
    overflow: hidden;
    width: 130px;
    height: 30px;
    margin: 0;
    padding: 0;
    z-index: 1;
    font-size: 12px;
    font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
}

.custom_typecontrol span {
    display: block;
    width: 65px;
    height: 30px;
    float: left;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
}

.custom_typecontrol .btn {
    background: #fff;
    background: linear-gradient(#fff, #e6e6e6);
}

.custom_typecontrol .btn:hover {
    background: #f5f5f5;
    background: linear-gradient(#f5f5f5, #e3e3e3);
}

.custom_typecontrol .btn:active {
    background: #e6e6e6;
    background: linear-gradient(#e6e6e6, #fff);
}

.custom_typecontrol .selected_btn {
    color: #fff;
    background: #425470;
    background: linear-gradient(#425470, #5b6d8a);
}

.custom_typecontrol .selected_btn:hover {
    color: #fff;
}

.custom_zoomcontrol {
    position: absolute;
    top: 50px;
    right: 10px;
    width: 36px;
    height: 80px;
    overflow: hidden;
    z-index: 1;
    background-color: #f5f5f5;
}

.custom_zoomcontrol span {
    display: block;
    width: 36px;
    height: 40px;
    text-align: center;
    cursor: pointer;
}

.custom_zoomcontrol span img {
    width: 15px;
    height: 15px;
    padding: 12px 0;
    border: none;
}

.custom_zoomcontrol span:first-child {
    border-bottom: 1px solid #bfbfbf;
}
</style>
