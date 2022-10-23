const btn = document.getElementById('btn');
const num = document.getElementById('num');
const result = document.getElementById('result')

var com = Math.random() * 100 + 1;
com = Math.floor(com);
var c = 0;
function check_num() {
  var usr = parseInt(num.value);

  c += 1;

  if(usr > com) {

    var msg = 'down';
  } else if (usr < com) {
    var msg = 'up';
  } else if(usr == com){
    msg = 'end';
    msg += '\n' + c + '번 시도했다.';
    const b = document.getElementById('btn');
    b.innerText = '';
    b.disabled = 'disabled';
  } else {
    msg = '1~100 숫자를 입력하라'
  }
  result.innerText = msg;
}