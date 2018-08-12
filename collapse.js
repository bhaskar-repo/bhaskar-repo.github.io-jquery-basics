$(document).ready(() => {
	$(".content1").hide();
	$(".content2").hide();
	$(".content3").hide();

	$("#first").click(() => {
		if ($(".content1").is(":hidden")) {
			$(".content1").show();
		}
		else {
			$(".content1").hide();
		}
		$(".content2").hide();
		$(".content3").hide();
	})

	$("#second").click(() => {
		if ($(".content2").is(":hidden")) {
			$(".content2").show();
		}
		else {
			$(".content2").hide();
		}
		$(".content1").hide();
		$(".content3").hide();
	}) 

	$("#third").click(() => {
		if ($(".content3").is(":hidden")) {
			$(".content3").show();
		}
		else {
			$(".content3").hide();
		}
		$(".content1").hide();
		$(".content2").hide();
	})  
})