"use strict";
$(document).ready( () => {
    
    $("#wrapper h4").click( evt => {
        $(evt.currentTarget).toggleClass("minus");
        $(evt.currentTarget).next().slideToggle(1000);
	});
    
});