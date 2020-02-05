$(".notif").click(function() {
  $(".notif").removeClass("notif");
})

var positions = []

var app = angular.module('app', [])

app.controller('cspeakersController', function($scope, $http) {
    $http.get('data/cspeakers.json').then(function(results2) {
        $scope.cspeakers = results2.data.data
    })
})

app.controller('speakersController', function($scope, $http) {
    $http.get('data/speakers.json').then(function(results) {
        $scope.speakers = results.data.data
    })
}).run(function() {
    var elements = document.getElementsByClassName('navDiv')
    for(var i = 0; i < elements.length; i++) {
        positions.push(elements[i].offsetTop)
    }
    if (window.innerWidth > 480){
        positions[3]+=720
    	positions[4]+=1800
    } else {
        positions[3]+=4000
    	positions[4]+=4000
    }
})
app.controller('reviewsController', function($scope, $http) {
    $http.get('data/reviews.json').then(function(results) {
        $scope.reviews = results.data.data
    })
})

// window.onscroll = function() {
// 	navStatus()

// 	var curr = document.documentElement.scrollTop
// 	var count = -1

// 	$.each(positions, function(index, element) {
// 		if (curr >= element) {
// 			count++
// 		} else {
// 			return false
// 		}
// 	})

// 	$(".scrollable").parent().removeClass('active')
// 	$('.scrollable:eq('+count+')').parent().addClass('active')
// }

// $(document).ready(function(){
//     navStatus()
//     hashUp()
//   // Add smooth scrolling to all links
//     $(".scrollable").on('click', function(event) {
//         if (this.hash !== "") {
//             // event.preventDefault()
//             var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function(){
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

// window.onhashchange = function() {
//     hashUp()
// }

// function hashUp() {
//     var hrf = location.hash
//     if (hrf) {
//         $('.scrollable').parent().removeClass('active')
//         $('.nav-link[href="' + hrf + '"]').parent().addClass('active')
//     }
// }

function navStatus() {
    if (window.pageYOffset > 150) {
        $('.navbar').removeClass('topNav')
        $('.navbar').addClass('downNav')
    } else {
        $('.navbar').removeClass('downNav')
        $('.navbar').addClass('topNav')
    }
}
var scrollButtons = document.getElementsByClassName("scrollable");
var themeDiv = document.getElementById("themeDiv");
var aboutDiv = document.getElementById("about");
var speakersDiv = document.getElementById("speakers");
var involveDiv = document.getElementById("getInvolved");
scrollButtons[0].onclick = function(){
    themeDiv.scrollIntoView({behavior:"smooth", block:"end"});
}
scrollButtons[1].onclick = function(){
    aboutDiv.scrollIntoView({behavior:"smooth"});
}
scrollButtons[2].onclick = function(){
    speakersDiv.scrollIntoView({behavior:"smooth", block:"start"});
}
scrollButtons[3].onclick = function(){
    involveDiv.scrollIntoView({behavior:"smooth", block:"start"});
}
// Set the date we're counting down to
var countDownDate = new Date("March 21, 2020 15:00:00").getTime();

// Update the count down every 1 second
window.onload = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = Math.abs(countDownDate - now);

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("dayDisplay").textContent =  days;
  document.getElementById("minuteDisplay").textContent =  minutes;
  document.getElementById("hourDisplay").textContent =  hours;
  document.getElementById("secondDisplay").textContent =  seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
