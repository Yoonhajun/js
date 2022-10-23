function print_jumsu() {
  const t = document.getElementById('jumsu');
  const r = document.getElementById('result');

  var msg;
  if(jumsu >= 90) {
    msg = 'A'
  } else if (jumsu >= 80) {
    msg = 'B'
  } else if (jumsu >= 70) {
    msg = 'c'
  } else {
    msg = 'f'
  }
  r.innerText = msg + '입니다' ;
}