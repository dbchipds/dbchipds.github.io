var qrcode1 = new QRCode("qrcode1");
var qrcode2 = new QRCode("qrcode2");
function code(but) {
  d = new Date(Date.now() - 8 * 60 * 60 * 1000);
  document.getElementById("time").innerHTML = new Date().toLocaleString();
  //document.getElementById('time').innerHTML = d.getUTCFullYear() + " " + (d.getUTCMonth() + 1) + "/"+d.getUTCDate()+" "+d.getUTCHours()+":"+d.getUTCMinutes();
  clock_password =
    d.getUTCFullYear() +
    53 * (d.getUTCMonth() + 1) +
    47 * d.getUTCDate() +
    113 * d.getUTCHours() +
    37 * d.getUTCMinutes();
  in_num = clock_password;
  val1 = ~~((in_num + 3124) / 7) + (in_num % 207);
  val2 = ~~(val1 / 57) * (val1 % 103) * (val1 % 131) + (val1 % 161);
  PSWD_out = val2 % 10000;
  if (PSWD_out < 1000) {
    PSWD_out = PSWD_out + 7212;
  }
  document.getElementById("code1").innerHTML = clock_password;
  PSWD_out = but.getAttribute('first') + (PSWD_out + "");
  document.getElementById("code2").innerHTML = but.value + ": " + PSWD_out;
  qrcode1.makeCode(PSWD_out);
  qrcode2.makeCode(PSWD_out);
}
