<template>
    <div class="container">
        <h4 class="row justify-content-center qna-title">Q&A</h4>
        <!-- 아코디언 시작 -->
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            예약 내역은 어떻게 확인하나요?
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            홈페이지 로그인 접속> 마이페이지> 좌측 결제내역>
                            결제정보에서 확인 가능합니다.
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            로그인 시 아이디, 비밀번호를 정상 입력 했음에도
                            등록되지 않았다고 나옵니다.
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            아이디는 대문자와 소문자를 구분합니다. 첫글자가
                            자동으로 대문자로 입력되었는지 확인 해주세요.
                            <br /><br />
                            아이디 및 비밀번호가 기억나지 않으실 경우 홈페이지
                            내 아이디/비밀번호 찾기를 통해 확인 가능합니다.
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            결제 취소는 어떻게 하나요?
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            홈페이지 로그인 접속> 마이페이지> 좌측 결제내역>
                            결제정보에서 취소가 가능합니다. <br /><br />
                            단, 출발일 7일 이내의 건은 취소가 불가능하오니 이점
                            유의해 주시길 바랍니다.
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFour">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            예약은 어떻게 해야 하나요?
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            원하시는 상품을 검색 후 결제를 하면 예약을 진행하실
                            수 있습니다. <br /><br />
                            여행지, 상품, 장소, 여행 일정을 검색하고 다양한
                            상품을 선택해 보세요.
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingFive">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            국내 항공 탑승 시 필요한 서류가 무엇인가요?
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFive"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            - 성인 : 신분증(주민등록증,운전면허증,여권 중 택1)
                            <br />
                            - 외국인: 여권,여권사본,외국인 등록증 중 택1 <br />
                            - 유아,소아 : 등본, 건강보험증,여권 중 택1 <br />
                            - 학생 : 할인폐지, 학생증,주민등록증,여권중 택1
                            <br />
                            - 경로우대 : 신분증(주민등록증,운전면허증,여권 중
                            택1) <br />
                            - 제주도민 : 신분증(주민등록증,운전면허증, 현주소
                            제주도 명시) <br />
                            - 군인 : 장교/부사관 신분증, 군무원증, 사관생도증
                            <br />
                            - 국가유공자,독립유공자,국가유공상이자:국가보훈처
                            발행 유공자증/유족증 <br />
                            - 장애인 : 시/군/구청장 발행 복지카드 <br /><br />

                            * 개명 했을 시 주민등록 초본 지참 * <br />
                            기초생활수급자 증명서 (사본 불가, 원본 必)
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSix">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            졸릴 때 껌이 도움이 되나요?
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingSix"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            껌을 씹으면 잠이 달아납니다.
                            <br /><br />

                            구운 오징어는 맛있고 향이 좋습니다. 즐겨보세요.
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingSeven">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            독도 관광은 어떻게 신청하면 되나요?
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingSeven"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            독도관광은 무조건 사전예약만 가능합니다.(예약시
                            담당자에게 신청하시면 됩니다.) <br /><br />

                            독도관광(왕복 약 3시간30분~4시간 소요)
                            독도입도가능시 20분체류.파도가 높아 입도 불가능시
                            선회관광으로 진행되며, 별도의 환불은 없습니다.
                            <br /><br />

                            독도관광은 현지 기상이나 상황에 따라 1일차, 2일차,
                            3일차 오전 또는 오후에 진행될 수 있습니다
                            <br /><br />

                            ★독도관광 취소안내★ 고객님 변심으로인하여
                            독도관광취소하실 경우 취소시기에 따라 취소수수료가
                            적용되며 현지에서 취소할 경우에는 전액환불
                            불가합니다. 꼭 신중히 선택하시기바랍니다.
                            (단,기상악화로 현지에서 선박결항되어 관광 못하실
                            경우, 여행 후 전액 환불처리 해 드립니다.)
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingEight">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseEight"
                        aria-expanded="false"
                        aria-controls="flush-collapseEight"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">객실 이용 팁 & 에티켓</div>
                    </button>
                </h2>
                <div
                    id="flush-collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingEight"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            객실 문은 대개 자동으로 잠기는 경우가 많으므로 객실
                            밖으로 나갈 때는 꼭 키를 챙겨야 합니다. <br /><br />

                            미니 바 안에 있는 음료, 맥주 등은 대부분 유료이며,
                            리조트 밖에서 살 때보다 비쌉니다. 미니 바를 사용하면
                            체크아웃할 때 비용을 정산하게 됩니다. <br /><br />
                            컴플리멘터리(Complimentary)라고 적혀 있는 생수는
                            무료로 제공됩니다. 물이나 커피 등은
                            하우스키핑(Housekeeping)에 전화해서 요청하면 됩니다.
                            <br /><br />

                            아침식사 후 객실을 나설 때는 문밖에 Make Up
                            Room(청소해 주세요) 또는 Do Not Disturb(방해하지
                            말아 주세요) 표지를 걸어 두세요. 타월, 비치백,
                            비치샌들 등 호텔 비품은 가져가지 않는 것이
                            예의입니다.
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingNine">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseNine"
                        aria-expanded="false"
                        aria-controls="flush-collapseNine"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">크루즈 여행은 무엇인가요?</div>
                    </button>
                </h2>
                <div
                    id="flush-collapseNine"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingNine"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            크루즈 여행은 본인이 결정하고 선택하는 여행입니다.
                            <br /><br />

                            어떤 식당에서 식사를 할지, 어떤 선내 프로그램을
                            이용할지, 이 모든 것이 여러분의 선택에 달려있습니다.
                            <br /><br />

                            선내에서 안내하는 선내 기항지 관광을 신청하셔도
                            좋고, 개별적으로 하선하여 즐거운 시간을 보내시는
                            것도 좋고, 배 안에 머물러 있으셔도 좋습니다.
                            <br /><br />

                            크루즈 여행의 매력 포인트는 편리하며 효율적인
                            이동시간과 선내에서 즐기는 화려한 부대시설 및 최고의
                            세계 요리 등 정찬풀코스 스타일부터 뷔페까지, 매일 밤
                            선상에서 벌어지는 파티와 마술쇼, 코미디쇼 등 다양한
                            쇼를 체험하며 일반 단체 여행과는 차원이 다른 여행의
                            경험을 즐길 수 있습니다.
                        </div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTen">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTen"
                        aria-expanded="false"
                        aria-controls="flush-collapseTen"
                    >
                        <div class="qa-qi col-1">Q</div>
                        <div class="qa-q col-10">
                            여행에 앞선 준비물과 세면도구를 따로 준비해야
                            하나요?
                        </div>
                    </button>
                </h2>
                <div
                    id="flush-collapseTen"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTen"
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body row">
                        <div class="qa-ai col-1">A</div>
                        <div class="qa-a col-10 align-self-center">
                            적당한 운동량이 있으니 신발과 옷은 최대한 편안하게
                            준비하시는게 좋습니다. <br /><br />
                            햇볕을 가려줄 모자와 바람을 막아줄 바람막이도
                            준비하시고,출발일 아침에 버스에서 간단한 간식 (떡)이
                            제공 되며 ,매일 드실 생수도 준비해드립니다.
                            <br /><br />
                            호텔에는 비누,샴푸,린스는 구비되어
                            있으나,치약,칫솔은 구비되어 있지 않으니 별도로
                            준비해 주셔야 합니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 아코디언 끝 -->
        <div class="container">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: "qna",
};
</script>

<style scoped>
.container {
    margin-top: 50px;
    width: 100%;
}
.qna-title {
    text-align: center;
    margin: 0 auto;
    padding-bottom: 90px;
    margin-bottom: 20px;
    border-bottom: 2px solid #a30000;
}
.qa-qi {
    font-size: 22px;
    font-weight: 300;
}
.qa-q {
    font-size: 17px;
    font-weight: 300;
}
.qa-ai {
    color: #a30000;
    font-size: 20px;
    font-weight: 300;
}
.qa-a {
    font-size: 15px;
}

.accordion-button {
    box-shadow: none;
}
.accordion-button:not(.collapsed) {
    /* color:black; */
    background-color: white;
    box-shadow: none;
    /* font-weight: bold; */
}

.accordion-item {
    font-weight: 300;
}

.accordion-body {
    background: #dfdfdf;
    margin: 0;
    padding: 16px 10px;
}
</style>
