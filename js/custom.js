$(document).ready(function(){
	$(document).keypress(function(e){
		if(e.which == 13){
			term = $(".term_search").val();
		
			$.getJSON("http://search.twitter.com/search.json?q="+term+"&rpp=6&callback=?", 
				function(data){
					compile = _.template($(".template_render").text());
					el = $(compile(data));
					el.hide();
					el.appendTo(".tweet_list");
					el.fadeIn();
				})
		}
	})
})
