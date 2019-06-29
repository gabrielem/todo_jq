console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
$( document ).ready(function() {
    $('#textItem').focus()
    $("#textItem").keydown(function (e) {
      if (e.keyCode == 13) {
        addItem();
      }
    });
    $( "body" ).on( "redesignTodos", function( event ) {
      renderItems()
    });
});

let todos = []

const addItem = function(e) {
  if (e) {e.preventDefault()}
  console.log('textItem', $('#textItem').val());
  if (!$('#textItem').val()) {
    alert('You can not insert and empty item!')
  } else {
    todos.push($('#textItem').val())
    $('#textItem').val("")
    $('#textItem').focus()
    $( "body").trigger( "redesignTodos", [ "Custom", "Event" ] );
  }
}

const renderItems = function() {
  $('#listContainer').html('')
  $( todos ).each(function( index ) {
    console.log( index + ": " + todos[index] );
    const item = '<div class="alert alert-primary todoItem" role="alert">'
      + todos[index]
      + '<button type="button" name="button" class="btn btn-danger deleteBtn" onclick="deleteItem(\'' + index + '\')">x</button>'
      + '</div>'
    $('#listContainer').append(item)
  });
}
