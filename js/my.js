$(".uk-nav-sub").show();
$(document).ready(function(e) {
	$(".project").click(function() {
	  if ($(this).hasClass("project")) {
		$(this).removeClass("project").addClass("uk-icon-angle-down");
		$(this).parent().find('ul').slideUp();
	  } else {
		$(this).removeClass("uk-icon-angle-down").addClass("project");
		$(this).parent().find('ul').slideDown();
	  }
	  event.stopPropagation;
	});
});