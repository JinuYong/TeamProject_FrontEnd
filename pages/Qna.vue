<template>
    <div>
        <h1 class="display-4 row justify-content-center">Q&A</h1>
        <br />
        <hr />
        <br />
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
                        <div class="qa col-1">Q</div>
                        <div class="col-10">
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
                        <div class="qa col-1">A</div>
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
                        <div class="qa col-1">Q</div>
                        <div class="col-10">
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
                        <div class="qa col-1">A</div>
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
                        <div class="qa col-1">Q</div>
                        <div class="col-10">
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
                        <div class="qa col-1">A</div>
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
                        <div class="qa col-1">Q</div>
                        <div class="col-10">
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
                        <div class="qa col-1">A</div>
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
                        <div class="qa col-1">Q</div>
                        <div class="col-10">
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
                        <div class="qa col-1">A</div>
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

<style>
body {
    width: 850px;
    margin: 0 auto;
    padding-top: 50px;
}
/* .qahead {
    font-size: 50px;
    font-weight: 330;
} */
.qa {
    font-size: 40px;
    font-weight: 300;
}
</style>
