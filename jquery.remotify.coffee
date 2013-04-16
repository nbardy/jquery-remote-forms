$.remotify = ->
  $("form[data-remote='true']").submit (event) ->
    event.preventDefault()
    $.ajax
      url: this.getAttribute('action')
      type: this.getAttribute('method')
      data: $(this).serialize()

