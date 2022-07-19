<template>
    <div>
        <div ref="map" class="map-board"></div>
        <button @click="searchAddress">주소검색</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            addList: [],
            coords: []
        }
    },
    methods: {
        searchAddress() {
            new daum.Postcode({
                oncomplete: (data) => {
                    this.addList.push(data.address);
                    this.kakaoMapShow();
                }
            }).open();
            console.log(this.addList);
        },
        kakaoMapShow() {
            let container = this.$refs.map;
            let options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            let map = new kakao.maps.Map(container, options);
            let zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



            // let positions = [
            //     {
            //         content: '<div class="marker-box">' + '<span class="text">여행지1</span>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.452278, 126.567803)
            //     },
            //     {
            //         content: '<div class="marker-box">여행지1<div>',
            //         latlng: new kakao.maps.LatLng(33.452671, 126.574792)
            //     },
            //     {
            //         content: '<div class="marker-box">여행지1<div>',
            //         latlng: new kakao.maps.LatLng(33.451744, 126.572441)
            //     }
            // ];
            // let bound = new kakao.maps.LatLngBounds();
            // for (let i = 0; i < positions.length; i++) {
            //     const marker = new kakao.maps.Marker({
            //         map: map,
            //         position: positions[i].latlng
            //     });
            //     let infowindow = new kakao.maps.InfoWindow({
            //         content:positions[i].content
            //     });
            //     kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
            //     kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

            //     bound.extend(positions[i].latlng);
            // };
            // function makeOverListener(map, marker, infowindow) {
            //     return function() {
            //         infowindow.open(map, marker);
            //     };
            // }
            // // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
            // function makeOutListener(infowindow) {
            //     return function() {
            //         infowindow.close();
            //     };
            // }
            // map.setBounds(bound);

            let geocoder = new kakao.maps.services.Geocoder();
            for (let i = 0; i < this.addList.length; i++) {
                geocoder.addressSearch(this.addList[i], (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        this.coords.push(new kakao.maps.LatLng(result[0].y, result[0].x));
                        let marker = new kakao.maps.Marker({
                            map: map,
                            position: this.coords[0]
                        })
                    }
                    console.log(this.coords);
                });
                
            }

            let positions = [
                {
                    content: '<div class="customoverlay">' + '<a>' + '<span class="text">여행지1</span>' + '</a>' + '</div>',
                    latlng: new kakao.maps.LatLng(33.452278, 126.567803)
                },
                {
                    content: '<div class="customoverlay">' + '<a>' + '<span class="text">여행지2</span>' + '</a>' + '</div>',
                    latlng: new kakao.maps.LatLng(33.452671, 126.574792)
                },
                {
                    content: '<div class="customoverlay">' + '<a>' + '<span class="text">여행지3</span>' + '</a>' + '</div>',
                    latlng: new kakao.maps.LatLng(33.451744, 126.572441)
                }
            ];
            let bound = new kakao.maps.LatLngBounds();
            for (let i = 0; i < positions.length; i++) {
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: positions[i].latlng
                });
                let customOverlay = new kakao.maps.CustomOverlay({
                    map: map,
                    position: positions[i].latlng,
                    content: positions[i].content,
                    // yAnchor: 1
                });

                bound.extend(positions[i].latlng);
            };
            
            
            map.setBounds(bound);
        },
        
    },
    mounted() {
        this.kakaoMapShow();

    },
}
</script>
<style>
    .map-board {
        width: 800px;
        height: 400px;
    }
    .customoverlay {
        position:relative;
        bottom:65px;
        border-radius:6px;
        border: 1px solid #ccc;
        border-bottom:2px solid #ddd;
        float:left;
    }
    .customoverlay .text{
        font-family: "Noto Sans KR";
        display:block;
        text-align:center;
        background:#fff;
        margin-right:35px;
        padding:8px 15px;
        font-size:14px;
        font-weight:bold;
    }
    .customoverlay a {
        display:block;
        text-decoration:none;
        color:#000;
        text-align:center;
        border-radius:6px;
        font-size:14px;
        font-weight:bold;
        overflow:hidden;
        background: #d95050;
        background: #d95050 
                    url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) 
                    no-repeat right 14px center;
        }
</style>