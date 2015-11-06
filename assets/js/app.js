//NAVBAR - AXTELREFILLS
$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});


// Activa el data-toggle en los list groups
 $('.axtel-listgroup-item').on('click',function(e){
   var previous = $(this).closest(".axtel-list-group").children(".active");
   previous.removeClass('active'); // previous list-item
   $(e.target).addClass('active'); // activated list-item
});

//Activa el data-toggle en los button bars
$(".axtel-btn-group > .btn").click(function(){
   $(this).addClass("active").siblings().removeClass("active");
});


//BEGIN //Script para barra de paquetes de canales
jQuery(document).ready(function($) {
        $('#sliderpaquetes-axtelcanales').each(function(index, el){
          //hide the element
          $(el).addClass("sliderOn");
          
          //add the slider to each element
          var slider = $( '<div class="sliderHolder"><div class="fakeslider"></div><div class=\'horizontalSlider\'></div></div>' ).insertAfter( el ).find(".horizontalSlider").slider({
            min: 1,
            max: el.options.length,
            range: 'min',
            value: el.selectedIndex + 1,
            slide: function( event, ui ) {
              el.selectedIndex = ui.value - 1;
            }
          });
          
          //Create a legend under the slider so we can see the options
          var options = [];
          for (var option in $(el).children())
          {
            if(!isNaN(parseInt(option)))
            {
              options.push(el.options[option].text);
            }
          }
          //the width of each legend/option
          var width = (slider.width() / (options.length - 1));
          
          //Add the legend. Half the width of the first and last options for display consistency.
          slider.after('<div class="slider-legend"><p style="width:' + (width / 2) + 'px;text-align:left;">' + options.join('</p><p style="width:' + width + 'px;">') +'</p></div>').parent().find(".slider-legend p:last-child").css("width", width / 2).css("text-align", "right");
          
          //if there are too many options so that the text is wider than the width, then hide the text
          var lastChild = slider.parent().find(".slider-legend p:last-child");
          if(lastChild[0].clientWidth < lastChild[0].scrollWidth)
          {
            slider.parent().find(".slider-legend p").css("text-indent", '200%');
          }
          
        });
      });
//END //Script para barra de paquetes de canales

//BEGIN //Script para barra de paquetes de megas internet
jQuery(document).ready(function($) {
        $('#sliderpaquetes-axtelmegas').each(function(index, el){
          //hide the element
          $(el).addClass("sliderOn");
          
          //add the slider to each element
          var slider = $( '<div class="sliderHolder"><div class="fakeslider slidermegas"></div><div class=\'horizontalSlider handmegas\'></div></div>' ).insertAfter( el ).find(".horizontalSlider").slider({
            min: 1,
            max: el.options.length,
            range: 'min',
            value: el.selectedIndex + 1,
            slide: function( event, ui ) {
              el.selectedIndex = ui.value - 1;
            }
          });
        });
      });
//END //Script para barra de paquetes de megas internet


//BEGIND //Script tabs 
$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});

//END //Script tabs

//BEGIND //Script menu en pasos 
$(document).ready(function () {
  $('.menupasos').each(function(index) {
    $(this).children('li').first().children('a').addClass('activo').next().addClass('is-open').show();
  });
  $('.menupasos').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('activo')) {
      event.preventDefault();
      var pasosMenu = $(this).closest('.menupasos');
      pasosMenu.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      pasosMenu.find('.activo').removeClass('activo');
      $(this).addClass('activo');
    } else {
      event.preventDefault();
    }
  });
});
//END //Script menu en pasos

