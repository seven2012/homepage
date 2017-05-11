
/************** slides *********************/
slides(document.querySelector('.slides'))
header.addEventListener('mousemove', function(e){
/************** 3d *********************/
  let width = header.getBoundingClientRect().width
  let height = header.getBoundingClientRect().height
  let xCenter = header.offsetLeft + width / 2
  let yCenter = header.offsetTop + height / 2
  let xDiff = e.clientX - xCenter
  let yDiff = e.clientY - yCenter

  
  let xPercent = xDiff / (width/2)
  let yPercent = yDiff / (height/2)

  let xDeg = xPercent * 6
  let yDeg = yPercent * 5

  slidesBanner.style.transform = `translateZ(-50px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`
})

    /************** LightBox *********************/
      $(function(){
        $('[data-rel="lightbox"]').lightbox();
      });


    $('a[href="#top"]').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });