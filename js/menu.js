$(document).ready(function() {
  // Accordion JS
  $('.tab-listing > li > a').click(function(event){
    event.preventDefault(); // stop browser to take action for clicked anchor
    // get displaying tab content jQuery selector
    var active_tab_selector = $('.tab-listing > li.active > a').attr('href');
    // find actived navigation and remove 'active' css
    var actived_nav = $('.tab-listing > li.active');
    actived_nav.removeClass('active');
    // add 'active' css into clicked navigation
    $(this).parents('li').addClass('active');
    // hide displaying tab content
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    // show target tab content
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
  });
  $(".accordion-1 h4").addClass("active");
  $(".accordion-1 > div:not(:first)").show();
  $(".accordion-1 > h4").click(function() {
    // $(this).next("div").slideToggle("slow").siblings("div:visible").slideUp("slow");
    // $(this).toggleClass("active");
    // $(this).siblings("h4").removeClass("active");
    $(this).toggleClass("active");
    $(this).next("div").slideToggle("slow");
  });
  // Menu Button and Accordion Menu JS
  $(".btn-open-menu").click(function() {
    $(".fixed-accordion-menu").toggleClass("active");
  });
  // Add Smooth Scrolling to Links
  $(".accordion-menu-listing > li > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $(".fixed-accordion-menu").removeClass("active");
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        window.location.hash = hash;
      });
    }
  });
});