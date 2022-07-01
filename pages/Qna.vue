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
                        <div class="qa-qi col-1 ">Q</div>
                        <div class="qa-q col-10 ">
                            졸릴 때 오징어가 도움이 되나요?
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
                        <div class="col-10 align-self-center">
                            지루한 시간에 오징어를 씹으면 잠이 달아납니다.
                            마이페이지에서 오징어를 씹어보세요.
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
                            졸릴 때 오징어가 도움이 되나요?
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
                        <div class="col-10 align-self-center">
                            지루한 시간에 오징어를 씹으면 잠이 달아납니다.
                            마이페이지에서 오징어를 씹어보세요.
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
                            졸릴 때 오징어가 도움이 되나요?
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
                        <div class="col-10 align-self-center">
                            지루한 시간에 오징어를 씹으면 잠이 달아납니다.
                            마이페이지에서 오징어를 씹어보세요.
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
                            졸릴 때 오징어가 도움이 되나요?
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
                        <div class="col-10 align-self-center">
                            지루한 시간에 오징어를 씹으면 잠이 달아납니다.
                            마이페이지에서 오징어를 씹어보세요.
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
                            졸릴 때 오징어가 도움이 되나요?
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
                        <div class="col-10 align-self-center">
                            지루한 시간에 오징어를 씹으면 잠이 달아납니다.
                            마이페이지에서 오징어를 씹어보세요.
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
}
.qna-title {
    text-align: center;
    margin: 0 auto;
    padding-bottom: 100px;
    margin-bottom: 20px;
    border-bottom: 2px solid #a30000;
}
.qa-qi {
    font-size: 22px;
    font-weight: 300;
}
.qa-q {
    font-size: 18.5px;
    font-weight: 300;
}
.qa-ai {
    color: #a30000;
    font-size: 20px;
    font-weight: 300;
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
