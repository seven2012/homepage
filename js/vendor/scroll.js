    var button = document.getElementById('goToTop')
    button.onclick = function(){
      var height = window.scrollY // 1000
      // 1000ms 滚完   滚20次    每次建个 50ms
      var n = 1
      var id = setInterval(function(){
        if(n===20){
          clearInterval(id)
        }
        window.scrollBy(0, - height*n/20 )
        n += 1
      },10)
  }
