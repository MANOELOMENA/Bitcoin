function convertToBRL() {
    var bitcoin = document.getElementById("bitcoin").value;
    var brl = bitcoin * 250000;
    document.getElementById("real").innerText = brl.toFixed(2);
}
