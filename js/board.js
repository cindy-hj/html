  // 바로 실행됨. 즉 준비물
  const ti = document.getElementById('title'); /* 제목 */
  console.log(ti);
  
  const co = document.getElementById('content');
  console.log(co);

  const wr = document.getElementById('writer');
  console.log(wr);

  // 함수를 만듬, 즉시 실행되지 않음, 호출이 되어야 실행됨.
  function func() {
    if(ti.value === ''){
          alert('제목을 입력하세요.');   /* 알림표시함 */
          ti.focus();
          return false;   /* 백엔드 전송하지 않음 */
      }

    if(co.value === ''){
          alert('내용을 입력하세요.');
          co.focus();
          return false;
      }

    if(wr.value === ''){
          alert('작성자를 입력하세요.');
          wr.focus();
          return false;
      }

    //여기가 백엔드로 전송할 타이밍!!!
    //다 입력했기 때문에
    alert('백엔드 전송');
  }