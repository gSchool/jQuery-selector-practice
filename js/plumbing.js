___ = ".replace-me";

function showNamesForSelector(button, selector){
  $(document).on("click", button, function(){
    $("#names").empty();
    $(selector).each(function () {
      addName(this.innerText);
    });
  });
}

function showValuesForSelector(button, selector){
  $(document).on("click", button, function(){
    $("#names").empty();
    $(selector).each(function () {
      addName($(this).val());
    });
  });
}

function addName(name) {
  $("#names").append($("<p></p>").text(name));
}