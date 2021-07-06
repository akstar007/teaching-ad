function contact()
{
  window.open("contact-us.html", "_parent");
}

function courses()
{
  window.open("courses.html", "_parent");
}
function about()
{
  window.open("about.html", "_parent");
}
function home()
{
  window.open("home.html", "_parent");
}
function review()
{
  window.open("review.html", "_parent");
}

function whatsapp()
{
  let name = document.getElementById('name').value;
  let msg = document.getElementById('msg').value;
  var win = window.open(`https://wa.me/${+919718799604}?text=Hi myself ${name}!!! My doubt is :  ${msg}`, '_blank');
 // win.focus();
}