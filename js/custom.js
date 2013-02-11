$(document).ready(function(){
	$(document).keypress(function(e){
		// Evento ao presssionar enter
		if(e.which == 13){
			// Pega o termo digitado
			term = $(".term_search").val();
			
			// Faz a requisição que irá retornar os dados em JSON
			$.getJSON("http://search.twitter.com/search.json?q="+term+"&rpp=6&callback=?", 
				function(data){
					// Inicia o template especificado no elemento html .template_render
					compile = _.template($(".template_render").text());
					// Renderiza o retorno da requisição (variavel data) no template
					// e retorna um elemento HTML
					el = $(compile(data));
					// Torna o elemento invisível
					el.hide();
					// Adiciona o elemento ao elemento lista
					el.appendTo(".tweet_list");
					// fadeIn para tornar o elemento visível com o efeito
					el.fadeIn();
				})
		}
	})
})
