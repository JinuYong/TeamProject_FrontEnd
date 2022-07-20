<template>
    <div>
        <div class="map-container">
            <ul>
                <li v-for="(loc, idx) in locations" :key="idx" @click="positionChange(loc.position, idx)" class="map-list" :class="{activeList:activeList==idx}">
                    <p class="title">{{loc.title}}</p>
                    <p class="content">{{loc.content}}</p></li>
            </ul>
            <div ref="map" class="map-board">
                <div class="custom-con">
                    <p @click="setBounds">전체보기</p>
                </div>
            </div>
        </div>
        <ul>
            <li v-for="(item, idx) in this.items" :key="idx">
                <p>{{item.title}}</p>
                <button :class="{nonActive:isActive}">버튼</button>    
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            locations: [
                {title: "흑돼지식당", content: "- "+"맛있는 제주 흑돼지를 먹을 수 있는 숯불구이 전문점", position: null, address: "부산 부산진구 중앙대로680번길 29"},
                {title: "멘도롱카페", content: "- "+"제주감귤을 직접 착즙해 만드는 감귤에이드가 맛있는 카페", position: null, address: "부산 부산진구 중앙대로680번가길 49"},
                {title: "제주호텔 임페리얼", content: "- "+"제주바다가 한눈에 보이는 오션뷰의 5성급 호텔", position: null, address: "부산 부산진구 동천로 105"},
            ],
            items: [
                {title: "흑돼지식당1", payDate: "2022-06-20"},
                {title: "흑돼지식당2", payDate: "2022-07-25"},
                {title: "흑돼지식당3", payDate: "2022-08-20"},
            ],
            coords: [],
            map: null,
            activeList: null,
            bounds: null,
            isActive: false
        }
    },
    methods: {
        // searchAddress() {
        //     new daum.Postcode({
        //         oncomplete: (data) => {
        //             this.locations.push(data.address);
        //             this.kakaoMapShow();
        //         }
        //     }).open();
        //     console.log(this.addList);
        // },

        setBounds() {
            for (let i = 0; i < this.locations.length; i++) {
                this.bounds.extend(this.locations[i].position);
                this.map.setBounds(this.bounds);
            }
        },
        positionChange(pos, idx) {
            let showLoc = pos;
            this.map.panTo(showLoc);
            this.activeList = idx;
            console.log(idx);
        },

        async kakaoMapShow() {
            let container = this.$refs.map;
            let options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3,
            };
            let map = new kakao.maps.Map(container, options);
            this.map = map;
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

            // let geocoder = new kakao.maps.services.Geocoder();
            // for (let i = 0; i < this.addList.length; i++) {
            //     geocoder.addressSearch(this.addList[i], (result, status) => {
            //         if (status === kakao.maps.services.Status.OK) {
            //             this.coords.push(new kakao.maps.LatLng(result[0].y, result[0].x));
            //             let marker = new kakao.maps.Marker({
            //                 map: map,
            //                 position: this.coords[0]
            //             })
            //         }
            //         console.log(this.coords);
            //     });

            // }

            let positions = []
            let geocoder = new kakao.maps.services.Geocoder();
            const addressSearch = address => {
                return new Promise((resolve, reject) => {
                    geocoder.addressSearch(address, function(result, status) {
                        console.log(result);
                        if (status === kakao.maps.services.Status.OK) {
                            resolve(new kakao.maps.LatLng(result[0].y, result[0].x));
                        } else {
                            reject(status);
                        }
                    });
                });
            };
            let bounds = new kakao.maps.LatLngBounds();
            this.bounds = bounds;
            for (let i = 0; i < this.locations.length; i++) {
                let loc = await addressSearch(this.locations[i].address);
                this.locations[i].position = loc;
                // geocoder.addressSearch(this.locations[i].address, (result, status) => {
                //     console.log(result)
                //     if (status === kakao.maps.services.Status.OK) {
                //         this.locations[i].position = new kakao.maps.LatLng(result[0].y, result[0].x);
                // }});

                let pos = {
                    content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations[i].title + '</span>' + '</a>' + '</div>',
                    latlng: this.locations[i].position
                }
                positions.push(pos);
            }
            console.log("positions = {}", positions);
            // let positions = [
            //     {
            //         content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations.title + '</span>' + '</a>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.452278, 126.567803)
            //     },
            //     {
            //         content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations.title + '</span>' + '</a>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.452671, 126.574792)
            //     },
            //     {
            //         content: '<div class="customoverlay">' + '<a>' + '<span class="text">' + this.locations.title + '</span>' + '</a>' + '</div>',
            //         latlng: new kakao.maps.LatLng(33.451744, 126.572441)
            //     }
            // ];
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
                this.bounds.extend(positions[i].latlng);
            };
            map.setBounds(this.bounds);
        },

    },
    mounted() {
        this.kakaoMapShow();
        let currentDate = new Date();
        let arr = [];
        let payDate;
        for (let i = 0; i < this.items.length; i++) {
            arr = this.items[i].payDate.split("-");
            console.log(arr);
            payDate = new Date(arr[0], arr[1]-1, arr[2]);
            console.log("paydate = ", payDate);
            if ((currentDate.getTime-payDate.getTime) / (1000*60*60*24) > 7) {
                console.log("빼기 = ", (currentDate.getTime-payDate.getTime) / (1000*60*60*24));
                this.isActive = true;
            }
        }
        console.log("current = ", currentDate);

    },
}
</script>
<style>
    .nonActive {
        display: none;
    }
    .map-list {
        width: 500px;
        height: 100px;
        list-style: none;
        padding: 10px 10px;
        margin: 10px;
        border: 1px solid lightgray;
        box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 0px;
        border-radius: 10px;
        cursor: pointer;
    }
    .activeList {
        border: 2px solid #a30000;
    }
    .map-list .title{
        font-weight: 500;
        font-size: 16px;
        padding: 10px 0 5px 10px;
        margin: 0;
    }
    .map-list .content{
        font-weight: 300;
        font-size: 14px;
        padding: 5px 0 5px 10px;
        margin: 0;
    }
    .map-container {
        display: flex;
    }
    .map-board {
        width: 500px;
        height: 400px;
    }
    .custom-con {
        position: absolute;
        background: #fff;
        right: 40px;
        top: 5px;
        z-index: 100;
        border-radius: 10px;
        text-align: center;
        width: 80px;
        height: 35px;
        box-shadow: rgb(0 0 0 / 15%) 0px 2px 2px 0px;
        line-height: 35px;
        font-size: 14px;
        font-weight: 500;
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
        background: #a30000;
        background: #a30000
                    url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
                    no-repeat right 14px center;
        }
</style>
