function check_time() {
  const btn = document.getElementById('btn');
  const msg = document.getElementById('msg');

  //console.log(btn.innerText);

  if(btn.innerText == '시작') {
    // 시작 버튼 클릭 코드
  start = new Date();
  msg.innerText = "20초를 세고 종료버튼을 누르세요.";
  btn.style.backgroundColor = '#123E77';
  btn.innerText = "종료";
} else {
  // 종료 버튼 클릭 코드
  end = new Date();
  et = (end - start) / 1000;
  et = parseInt(et)
  btn.innerText = '시작';
  btn.style.backgroundColor = '#9c1a41';
  msg.innerText = '당신은' + et +'초 만에 클릭했습니다.'
} 
};