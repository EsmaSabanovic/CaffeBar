$(function(){
    $('.slider').each(function(){ 
    var $this =$(this);
    var $group=$this.find('.slide-group');
    var $slides = $this.find('.slide');
    var buttonArray = [];
    var currentlndex = 0; 
    var timeout;

   function move(newindex){
var animateLeft,slideLeft;
advance();
if ($group.is (':animated') || currentlndex === newindex) { 
    return;
   }
   buttonArray[currentlndex].removeClass('active'); 
   buttonArray[newindex].addClass('active'); 
   if (newindex > currentlndex) {
    slideLeft = '100%'; 
    animateLeft = '-100%';     
   }
   $slides.eq(newindex).css( {left: slideLeft, display: 'block'} ); 
   $group.animate( {left: animateLeft} , function() {
    $slides.eq(currentlndex).css( {display: 'none'} ); 
    $slides.eq(newindex).css( {left: O} );
    $group.css( {left: O} ); 
    currentlndex = newindex;});}  

    function advance()
    {clearTimeout(timeout);
        timeout= setTimeout(function (){ 
            if (currentlndex < ($slides.length-1)){
 move(currentlndex + l); }
 else { move(0); }}, 4000); 
    }

    $.each($slides, function(index){
        var $button= $('<button type="button" class="slide-btn" style="   height:50px; width:50px; background-color:black; color:white; border:0cm;">&bull;</button>'); 
        if (index === currentlndex) {
            $button.addClass( 'active');
        }
        $button.on('click' , function(){
            move(index); 
        }).appendTo('.slide-buttons'); 
        buttonArray.push($button); 
    }
    );
    advance();});});
    
    
