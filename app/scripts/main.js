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
});

let todos = []

const addItem = function(e) {
  if (e) {e.preventDefault()}
  console.log('textItem', $('#textItem').val());
  if (!$('#textItem').val()) {
    alert('You can not insert and empty item!')
  } else {
      todo.push($('#textItem').val())
  }
}
