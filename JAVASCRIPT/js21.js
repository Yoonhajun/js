function calc_bmi() {
  const t = document.getElementById('height');
  const w = document.getElementById('weight');

  tv = parseInt(t.value);
  wv = parseInt(w.value);
  tv = tv/100;
  bmi = parseInt(wv / (tv * tv));

  const r = document.getElementById('result');


  var msg;
  if(bmi < 20) {
    msg = '저체중 더먹어라'
  } else if(bmi <= 24) {
    msg = '정상이다'
  } else if(bmi <= 29) {
    msg = '약간만 살빼자'
  } else {
    msg = '다이어트 ㄱㄱ'
  }
  r.innerText = '체질량지수: ' + bmi +  '\n너는' + msg;
}