var currentPic = 0;
  var pics = document.querySelectorAll('.alu-profile-card');
  var intervals = 3000;


  var timerr = setInterval(changeSlides, intervals);

  function changeSlides(n) {
    for (var i = 0; i < pics.length; i++) {
      pics[i].style.opacity = 0;
    }

    currentPic = (currentPic + 1) % pics.length;

    if (n != undefined) {
      clearIntervall(timerr);
      timerr = setIntervall(changeSlides, intervals);
      currentPic = n;
    }

    pics[currentPic].style.opacity = 1;
  }