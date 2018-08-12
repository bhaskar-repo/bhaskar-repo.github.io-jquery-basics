$(document).ready(() => {
	$(".dropdown-menu").css("display","none");
	$(".navbar-item-row").css("display","none");

	$("#dropdown-menu-id").click(() => {
		if($(".dropdown-menu").css("display") == "none") {
			$(".dropdown-menu").css("display","flex");
			$("#dropdown-id").addClass("dropdown-menu-styles");
		}
		else {
			$(".dropdown-menu").css("display","none");
		}
	})

	$("#navbar-item-row-id").click(() => {
		if($(".navbar-item-row").css("display") == "none") {
			$(".navbar-item-row").css("display","flex");
			$("#navbar-item-id").addClass("dropdown-menu-styles");
		}
		else {
			$(".navbar-item-row").css("display","none");
		}
	})

	$("#navbar-id").find("a").addClass("link-style");
})