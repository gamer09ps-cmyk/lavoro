function convertitore() {
  let binario = document.getElementById("binario").value;
  let cifre = "0123456789ABCDEF";
  let esadecimale = "";
  while (binario.length % 4 != 0) {
    binario = "0" + binario;
  }
  while (binario.length > 0) {
    let gruppo = binario.substring(0, 4);
    let valore = 0;

    if (gruppo[0] == "1") {
      valore += 8;
    }
    if (gruppo[1] == "1") {
      valore += 4;
    }
    if (gruppo[2] == "1") {
      valore += 2;
    }
    if (gruppo[3] == "1") {
      valore += 1;
    }
    esadecimale += cifre[valore];
    binario = binario.substring(4);
  }
  document.getElementById("lavagna").innerHTML = "Risultato: " + esadecimale;
}
