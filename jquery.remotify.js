/**
 * @file remotify.js
 */

// Enable ajax on remote forms
(function() {

   /**
    * @function Adds a jquety method to call on a form which causes it to submit remotely.
    *
    * Ex. $("form").remotify();
    *
    * Optionally a callback can be passed to accept the return data on success.
    * 
    * Ex. $("form").remotify(function(data) {
    *        alert(data);
    *     })
    */
   this.$.fn.remotify = function(success) {
      // Add ajax to the form
      $(document).on('submit', this.selector, function(event) {
         // Setup default empty success function
         success = success || function() {};

         event.preventDefault();

         // Serialize data
         var data = $(this).serializeArray();

         var lastclicked;
         // If form was submitted via a submit button include that field
         if(lastclicked = $(this).find("*[type='submit'][data-clicked='true']")) {
            data.push({ 
               name: $(lastclicked).attr('name'),
               value: $(lastclicked).attr('value')
            });
         }
         // Retain context for success callback
         _this = this;

         return $.ajax({
            url: this.getAttribute('action'),
            type: this.getAttribute('method'),
            data: $.param(data),
            dataType: this.getAttribute('data-dataType'),
            success: function(data) { success.call(_this, data) }
         });
      });

      // Add a event handler to keep track of clicked buttons
      $(document).on('click', this.selector + " " + "*[type='submit']", function() {
         $("*[type='submit']", $(this).parents("form")).removeAttr('data-clicked');
         $(this).attr("data-clicked", "true");
      });
   }

}).call(this)

/* All forms with the attribute data-remote are automatically remotified.
 * 
 * If response behavior is necessary do not set data-remote and call 
 * remotify manually with the callback you desire.
 *
 */
$("[data-remote='true']").remotify();

