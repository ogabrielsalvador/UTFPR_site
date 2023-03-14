//altera item ativo no menu
$(function () {
   $(window).on("scroll", function () {
      if ($(window).width() > 767)
      {
         //se for maior, é desk e muda o menu-ativo
         if ($(window).scrollTop() < 539) {
            $(".link-menu-1").removeClass("menu-ativo");
            $(".link-menu-2").removeClass("menu-ativo");
            $(".link-menu-3").removeClass("menu-ativo");
            $(".link-menu-4").removeClass("menu-ativo");
            $(".link-menu-5").removeClass("menu-ativo");
         }
         else if ($(window).scrollTop() > 540 && $(window).scrollTop() < 1599) {
            $(".link-menu-1").addClass("menu-ativo");
            $(".link-menu-2").removeClass("menu-ativo");
            $(".link-menu-3").removeClass("menu-ativo");
            $(".link-menu-4").removeClass("menu-ativo");
            $(".link-menu-5").removeClass("menu-ativo");
         }
         else if ($(window).scrollTop() > 1600 && $(window).scrollTop() < 2659) {
            $(".link-menu-1").removeClass("menu-ativo");
            $(".link-menu-2").addClass("menu-ativo");
            $(".link-menu-3").removeClass("menu-ativo");
            $(".link-menu-4").removeClass("menu-ativo");
            $(".link-menu-5").removeClass("menu-ativo");
         }
         else if ($(window).scrollTop() > 2660 && $(window).scrollTop() < 3769) {
            $(".link-menu-1").removeClass("menu-ativo");
            $(".link-menu-2").removeClass("menu-ativo");
            $(".link-menu-3").addClass("menu-ativo");
            $(".link-menu-4").removeClass("menu-ativo");
            $(".link-menu-5").removeClass("menu-ativo");
         }
         else if ($(window).scrollTop() > 3770) {
            $(".link-menu-1").removeClass("menu-ativo");
            $(".link-menu-2").removeClass("menu-ativo");
            $(".link-menu-3").removeClass("menu-ativo");
            $(".link-menu-4").addClass("menu-ativo");
            $(".link-menu-5").removeClass("menu-ativo");
         }
      }
   });
});

//efeito de rolagem na pagina ao clicar no menu
$(document).ready(function () {
   $('a[href^="#"]').click(function (event) {
      var id = $(this).attr("href");

      // se for diferente de #janela-modal (janela do modal)
      if(id!== "#janela-modal")
      {
         //funciona efeito scroll
         var target = $(id).offset().top - 91;
         $('html,body').animate({ scrollTop: target }, 1100);
         event.preventDefault();
      }
   });
});

//efeito modal
$(document).ready(function(){
   $("a[rel=modal]").click( function(ev){
       ev.preventDefault();
 
       var id = $(this).attr("href");
 
       var alturaTela = $(document).height(); //document pega a altura certa no mobile
       var larguraTela = $(window).width();

       //ao abrir o modal, retira o scroll (barra lateral) e ajusta o container
       $("body").css("overflow-y", "hidden");
       if($(id).width() > 340) // largura maior de 340 é do mobile para cima
       {
         $(".container").css("left", "-8px");
       }
     
       //colocando o fundo preto
       $('#mascara').css({'width':larguraTela + 17,'height':alturaTela}); //largura +17 pq retirou o scroll
       $('#mascara').fadeIn(700); 
       $('#mascara').fadeTo("slow",0.7);

       //altera o tipo do isolation (efeito blend) para o modal aparecer corretamente (por cima da mascara)
       $('.section-processo-sisu').css({'isolation':'auto'});
 
       var left = ($(window).width() / 2) - ( $(id).width() / 2 );
       var top = ($(window).height() / 2) - ( $(id).height() / 2 );
       
       $(id).css({'top':top,'left':left});
       $(id).show();   
   });
 
   //clicar na mascara (fundo do modal)
   $("#mascara").click( function(){
       $(this).hide();
       $(".window").hide();
       //volta o scroll da pagina e ajusta o container
       $("body").css("overflow-y", "auto");
       $(".container").css("left", "0");
      //altera o tipo do isolation para o efeito blend voltar a aparecer
       $('.section-processo-sisu').css({'isolation':'isolate'});
   });
   
   //clicar no botao fechar
   $('.btn-fechar').click(function(ev){
       ev.preventDefault();
       $("#mascara").hide();
       $(".window").hide();
       //volta o scroll da pagina e ajusta o container
       $("body").css("overflow-y", "auto");
       $(".container").css("left", "0");
      //altera o tipo do isolation para o efeito blend voltar a aparecer
       $('.section-processo-sisu').css({'isolation':'isolate'});
   });
});

// COLLAPSIBLE 
$(document).ready(function(){
var coll = document.getElementsByClassName("collapsible-profissao");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active-profissao");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
});