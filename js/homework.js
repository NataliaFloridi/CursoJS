function billingFunction(){
    var names = document.getElementById('shippingName').value;
    var zip = document.getElementById('shippingZip').value;

    if (document.getElementById('same').checked) { 
        document.getElementById('billingName').value = names;
        document.getElementById('billingZip').value = zip;
    } 
    else{ 
        document.getElementById('billingName').value = "";
        document.getElementById('billingZip').value = "";
    } 
}
