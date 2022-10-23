function print_theheginnsu() {
  const in1 = document.getElementById('theheginnsu');
  const in2 = document.getElementById('thehannsu');
  const in3 = document.getElementById('gulga');
  const out1 = document.getElementById('result');

  var theheginnsu = parseInt(in1.value);
  var thehannsu = parseInt(in2.value);
  var gulga = theheginnsu + thehannsu;
  var gulga1 = theheginnsu - thehannsu;
  var gulga2 = theheginnsu * thehannsu;
  var gulga3 = theheginnsu / thehannsu;
  
  out1.innerText = theheginnsu + '+' + (thehannsu) + '=' + gulga + '\n';
  out1.innerText += theheginnsu + '-' + (thehannsu) + '=' + gulga1 + '\n';
  out1.innerText += theheginnsu + '*' + (thehannsu) + '=' + gulga2 + '\n';
  out1.innerText += theheginnsu + '/' + (thehannsu) + '=' + gulga3 + '\n';
}