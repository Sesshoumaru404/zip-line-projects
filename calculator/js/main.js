$(document).ready(function (e) {
    "use strict";

      $(".allclear").click(function (e) {
          $(".input").text('')
      });

    $(".numbers").click(function (e) {
        if ()
        var input = $(".input").text()
        input += $(this).text()
        $(".input").text(input)
    });

    $(".dot").click(function (e) {
      var input = $(".input").text()
      // if (input.contains('.')) {
      //   return
      // }
      input += $(this).text()
      $(".input").text(input)
    });
});
