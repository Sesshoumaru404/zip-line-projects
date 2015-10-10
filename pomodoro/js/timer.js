$(document).ready(function(e) {
  // var timer = parseInt($('.timer').text(), 10);{
  var timer;
  var minutes;
  var seconds = 0;
  var c = 0;
  var t ;
  var timer_is_on = 0;
  var innerOffset = '690';
  var outerOffset = '750';
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', './audio/buzz.mp3');
  // audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.addEventListener('ended', function() {
       this.currentTime = 0;
   }, false);


  function change() {
    while (timer > 0) {
      --timer;
      $('.clock').text(timer);
      console.log(timer)
    }
  }

  function count(event){
    seconds = (seconds < 10) ? '0' + seconds.toString() : seconds;
    $('.clock').text(minutes+ ":" + seconds);
    if (seconds > 0) {
      --seconds;
    } else {
      --minutes
      seconds = 59
    }
    $('.inner').css('stroke-dashoffset', 0 + (c *(innerOffset/60)))
    $('.outer').css('stroke-dashoffset', outerOffset-(c *(outerOffset/(timer*60))))
    $(".testing").text(c)
    // $(".testing").text(event)
    if ( c== 0) {
      clearTimeout(t);
      audioElement.play();
      return
    }

    t = setTimeout(function(){ count() }, 1000);
    --c

  }

  $(".stop").click(function (e) {
    timer = parseInt($('.clock').text(), 10)
    clearTimeout(t);
    $('.clock').html("<span class='minute'>10</span>:00</span>");
  })

  $(".addTime").click(function (e) {
    var x = parseInt($(this).prev().text(), 10);
    $(this).prev().text(++x)
    if ($(this).prev().hasClass("timer")){
      $(".minute").text(x)
    }
  })

  $(".minusTime").click(function (e) {
    var y = parseInt($(this).next().text(), 10);
    $(this).next().text(--y)
    if ($(this).next().hasClass("timer")){
      $(".minute").text(y)
    }
  })


  $(".click").click(function (e) {
    if ( $(".click").text() == "Pause"){
      timer = parseInt($('.clock').text(), 10)
      clearTimeout(t);
      (".click").text("Start")
    } else {
    $(".click").text("Pause")
      minutes = parseInt($('.clock').text(), 10);
      timer = parseInt($('.clock').text(), 10);
      c = 3
      // c = timer * 60
      count()
      (".click").text("Pause")

    }
  })
});
