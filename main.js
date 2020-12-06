function large(element) {
	element.style.fontSize = "45px";
}
function little(element){
	element.style.fontSize = "40px";
}
function change(element){
   var a = element.innerHTML;
   switch(a){
   	case("Партнеры"):
    document.getElementById('div2').innerHTML=
    document.getElementById('partners').innerHTML;
       $('#img2').hide();
       $('#img2').show(1000);
       
       $('#img3').hide();
       $('#img3').show(1000);
       
       $('#img4').hide();
       $('#img4').show(1000);
       
       $('#img5').hide();
       $('#img5').show(1000);
   break;
}
}

function myFunction(element) {
   var x = document.getElementById("navbar");
  if (x.style.display == "block") {
     x.style.display = "none";
  }else {
     x.style.display = "block";
  }
}
function function1(){
   alert("Event found!");
}
//MODAL IMAGE//
function modal1() {
   document.getElementById('modal1').style.display='block';
}
function modal2() {
   document.getElementById('modal2').style.display='block';
}
function modal3() {
   document.getElementById('modal3').style.display='block';
}
function modal4() {
   document.getElementById('modal4').style.display='block';
}
function modal5() {
   document.getElementById('modal5').style.display='block';
}
function modal6() {
   document.getElementById('modal6').style.display='block';
}
function Close(element){
   var modal = document.getElementById('modal1');
   modal.style.display = 'none';
   var modal2 = document.getElementById('modal2')
   modal2.style.display = 'none';
   var modal3 = document.getElementById('modal3')
   modal3.style.display = 'none';
   var modal4 = document.getElementById('modal4')
   modal4.style.display = 'none';
   var modal5 = document.getElementById('modal5')
   modal5.style.display = 'none';
   var modal6 = document.getElementById('modal6')
   modal6.style.display = 'none';
}

function modal7(){
   alert("To get started, register!");
   document.getElementById('id01').style.display="block";
}

function initMap() {
  var options = {
    center: {lat: 43.2220, lng: 76.8512},
    zoom: 12
  };
  var map = new google.maps.Map(document.getElementById('map'), options);
  var icon1 = {
    url: 'https://simpleicon.com/wp-content/uploads/map-marker-2.png',
    scaledSize: new google.maps.Size(50, 50)
  }
  var marker1 = new google.maps.Marker({
     position: {lat:43.20766751910321, lng:76.85743081581975},
     map:map,
     icon1:icon1
  });
   marker1.addListener("click", function(){
      document.getElementById('marker1').style.display='block'
   })
   marker1.addListener("mouseout", function(){
      document.getElementById('marker1').style.display = 'none';
   });
   var icon2 = {
      url: "https://static.thenounproject.com/png/331589-200.png",
      scaledSize: new google.maps.Size(50, 50)
    }
   var marker2 = new google.maps.Marker({
      position: {lat:43.23040384562962, lng:76.86777341378125},
      map:map,
      icon:icon2
   });
   marker2.addListener("click", function(){
      document.getElementById('marker2').style.display='block'
   })
   marker2.addListener("mouseout", function(){
      document.getElementById('marker2').style.display = 'none';
   });
   var icon3 = {
      url: "https://cdn1.iconfinder.com/data/icons/medical-and-health-59/960/Map-doctor-512.png",
      scaledSize: new google.maps.Size(50, 50)
    }
   var marker3 = new google.maps.Marker({
      position: {lat:43.21481060109598, lng:76.89642061809917},
      map:map,
      icon:icon3
   });
   marker3.addListener("click", function(){
      document.getElementById('marker3').style.display='block'
   })
   marker3.addListener("mouseout", function(){
      document.getElementById('marker3').style.display='none'
   })
}