function hamsu_calc() {
  const btn = document.getElementById('btn');
  const n1 = document.getElementById('n1');
  const n2 = document.getElementById('n2');
  const result = document.getElementById('result');

  var v1 = parseInt(n1.value);
  var v2 = parseInt(n2.value);
  msg = v1 + '+' + v2 + '=' + (v1 + v2) + '\n' + v1 + '-' + v2 + '=' + (v1 - v2) + '\n' +  v1 + '/' + v2 + '=' +  (v1 / v2) + '\n' + v1 + '*' + v2 + '=' + (v1 * v2);
  result.innerText = msg;
}