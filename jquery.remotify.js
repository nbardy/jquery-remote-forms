// Generated by CoffeeScript 1.6.1
(function() {

  $.remotify = function() {
    return $("form[data-remote='true']").submit(function(event) {
      event.preventDefault();
      return $.ajax({
        url: this.getAttribute('action'),
        type: this.getAttribute('method'),
        data: $(this).serialize()
      });
    });
  };

}).call(this);
