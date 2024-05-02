(function( $ ) {
    var cols = ["#252525", "#353535", "#555555", "#353535","#454545", "#111111"];
    var fp = $("#frontpage");
    var pg = fp.find("p");
    var raw = "";

    for (var i = 0; i < pg.eq(0).text().length; i++) {
        raw += "<div class='panel j" + i + "'>";

        pg.each(function() {
            raw += "<h1>" + $(this).text()[i] + "</h1>";
        });

        raw += "</div>";
    }

    fp.html(raw);

    fp.find(".panel").each(function(index) {
        $(this).css("background-color", cols[index]);
        $(this).css("z-index", 20-2*index);
    });
	
	$("#slide1 > .container").css("background-color", cols[5]);

}(jQuery));