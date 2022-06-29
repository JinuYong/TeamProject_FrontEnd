<template>
 <div class="container"> <!-- 최상위 부모 div 시작 -->
     <div class="row my-5"> <!-- 게시글 헤더 시작-->
         <h3>자유게시글 제목입니다.</h3>
     </div> <!-- 게시글 헤더 끝-->

        <div> <!-- 왼: userid , 오: 날짜 | 조회수 | 댓글수 시작 -->
            <p class="text-start">
                이미지 | USERID
            </p>
            <p class="text-end">
                2022.07.25 | 조회수 | 댓글수
            </p>
        </div> <!-- 왼: userid , 오: 날짜 | 조회수 | 댓글수 끝 -->

     <br>
     <hr>

     <div class="row my-2"> <!-- 작성 컨텐츠 시작 -->
         <div class="border border-dark">
            <p class="text-center text-wrap my-1">
                작성 게시물 , 컨텐츠
            </p>
         </div>
     </div> <!-- 작성 컨텐츠 끝 -->

     <div class="d-grid gap-2 d-md-block my-3"> <!-- 목록 , 수정 , 삭제 버튼시작-->
         <div class="d-grid gap-2 d-md-flex justify-content-md-start">
             <button type="button" class="btn btn-secondary">목록</button>
         </div>
         <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button type="button" class="btn btn-secondary">수정</button>
             <button type="button" class="btn btn-secondary">삭제</button>
         </div>
     </div> <!-- 목록 , 수정 , 삭제 버튼 끝-->

     <div> <!-- 댓글 시작 -->
         댓글
     </div> <!-- 댓글 끝 -->

     <div class="row my-2"> <!-- 댓글 컨텐츠 시작 -->
         <div class="border border-dark">
            <div class="text-left text-wrap my-2">
                <div> <!-- 댓글 #1 -->
                    USERID | 2022.07.25
                    <div>
                        댓글 내용입니다.
                        군사법원의 조직 권한 및 재판관의 자격은 법률로 정한다.
                        <hr>
                    </div> <!-- 댓글 #1 끝 -->
                </div>

                 <div> <!-- 댓글 #2 -->
                     USERID | 2022.07.25
                     <div>
                         댓글 내용입니다.
                         군사법원의 조직 권한 및 재판관의 자격은 법률로 정한다.
                     </div>
                 </div> <!-- 댓글 #2 끝 -->
             </div>
         </div>
     </div> <!-- 댓글 컨텐츠 끝 -->

     <div class="my-4"> <!-- 댓글입력 시작 -->
         <div class="row">
             <div class="col-11">
                 <div class="form-floating">
                     <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                     <label for="floatingTextarea">댓글을 입력해주세요.</label>
                 </div>
             </div>
             <div class="col-1">
                 <div>
                     <button type="button" class="btn btn-secondary text-end">등록</button>
                 </div>
             </div>
         </div>
     </div> <!-- 댓글입력 끝 -->

 </div> <!-- 최상위 부모 div 끝 -->
</template>

<script>
export default {
    name: "boardDetails"
}
</script>

<style scoped>
.text-start {
    float: left;
}

.text-end {
    float: right;
}

.justify-content-md-start {
    float: left;
}


</style>
