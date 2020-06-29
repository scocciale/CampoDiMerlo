// var a = 0;
// $(window).scroll(function () {
// 	var oTop = $('#counter-div').offset().top() - window.innerHeight;
// 	if (a == 0 && $(window).scrollTop() > oTop) {
// 		$('.count').each(function () {
// 			var $this = $(this),
// 				countTo = $this.attr('data-count');
// 			$({
// 				countNum: $this.text()
// 			}).animate({
// 				countNum: countTo
// 			}, {
// 				duration: 2000,
// 				easing: 'swing',
// 				step: function () {
// 					$this.text(Math.floor(this.countNum));
// 				},
// 				complete: function () {
// 					$this.text(this.countNum);
// 					//alert('finished');
// 				}

// 			});
// 		});
// 		a = 1;
// 	}
// });

var map = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.OSM()
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([12.380859,41.822713]),//Via della Magliana, 1081, 00148 Roma RM
		zoom: 18
	})
});
