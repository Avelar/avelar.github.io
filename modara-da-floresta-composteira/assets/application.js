// Listas aceesíveis
var allPanels = $('.section-faq--accordion > dd').hide();
$('.section-faq--accordion > dt > a').click(function(e) {
  var faqQuestionBtn = $('.section-faq--accordion > dt > a');
  allPanels.slideUp();
  $(this).parent().next().stop().toggle(function(){
    if($(this).hasClass('is-active')){
      faqQuestionBtn.attr('aria-expanded', 'false');
      $(this).removeClass('is-active');
    } else {
      $(this).addClass('is-active');
      faqQuestionBtn.attr('aria-expanded', 'true');
    }
  });
  e.preventDefault();
});

// Select color
$('input[id="grey"]').prop('checked', true);
$('input[name="color"]').click(function(){
  if($(this).prop("checked") == true){
    var colorSelected = this.value;
    $(".image-color").attr('src', 'assets/images/colors/' + colorSelected + '.jpg');
  }
  else if($(this).prop("checked") == false){
     alert("Checkbox is unchecked.");
  }
});
