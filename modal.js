$(document).ready(() => {
	$("#modal-items-id").hide();

	$("#modal-button-id").click(() => {
		$("#modal-items-id").show();
		$("#name").trigger("focus");
	})

	$("#name").focus(function() {
		$(this).addClass("input-style");
	})

	$("#message").focus(function() {
		$(this).addClass("input-style");
	})

	$("#name").focusout(function() {
		$(this).removeClass("input-style");
	})

	$("#message").focusout(function() {
		$(this).removeClass("input-style");
	})

	$("#cross-btn").click(() => {
		$("#modal-items-id").hide();
	})

	$("#close").click(() => {
		$("#modal-items-id").hide();
	})

	$("#save").click(() => {
		$("#modal-items-id").hide();
		alert("changes saved");
	})
})