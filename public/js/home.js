var positions = []
var countDownDate = new Date("Mar 10, 2018 16:00:00").getTime()

var x = setInterval(function() {
    var now = new Date().getTime()
    var distance = countDownDate - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    $("#days").text(days)
    $("#hours").text(hours)
    $("#minutes").text(minutes)
    $("#seconds").text(seconds)

    if (distance < 0) {
        clearInterval(x)
        $("#timer").hide()
    }
}, 1000)

var app = angular.module('app', [])
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
    	positions[3]+=980
    } else {
    	positions[3]+=4000
    }
})
app.controller('reviewsController', function($scope, $http) {
    $http.get('data/reviews.json').then(function(results) {
        $scope.reviews = results.data.data
    })
})

window.onscroll = function() {
	if (window.pageYOffset > 150) {
        $('.navbar').removeClass('topNav')
        $('.navbar').addClass('downNav')
    } else {
        $('.navbar').removeClass('downNav')
        $('.navbar').addClass('topNav')
    }

	var curr = document.documentElement.scrollTop
	var count = -1

	$.each(positions, function(index, element) {
		if (curr >= element) {
			count++
		} else {
			return false
		}
	})

	$(".scrollable").parent().removeClass('active')
	$('.scrollable:eq('+count+')').parent().addClass('active')
}

$(document).ready(function(){
    hashUp()
  // Add smooth scrolling to all links
    $(".scrollable").on('click', function(event) {
        if (this.hash !== "") {
            // event.preventDefault()
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
  });
});

window.onhashchange = function() {
    hashUp()
}

function hashUp() {
    var hrf = location.hash
    if (hrf) {
        $('.scrollable').parent().removeClass('active')
        $('.nav-link[href="' + hrf + '"]').parent().addClass('active')
    }
}