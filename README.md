Inspired by rails ajax forms.

````html
<form class="remote" action="index.php" method="POST" data-remote="true">
   <input type="text">
   <input type="submit">
</form>
````
Then call the one and only function.
````javascript
$("form.remote").remotify();

````
You have the option of passing in a callback.

````javascript
$("form.remote").remotify(function (data) {
   if(data['success'] == true) {
      $(this).html("Success.")
   } else {
      $(this).html("Failure!")
   }
})

````

Setting a forms data attribute 'remote' to true will set it to remote with an empty callback.
````html
<form class="remote" action="index.php" method="POST" data-remote="true">
````
