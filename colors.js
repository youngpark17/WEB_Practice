var Links = {
    setColor:function(color){
      // var alist = document.querySelectorAll('a');
      // var i = 0;
      // while(i<alist.length){
      //   alist[i].style.color=color;
      //   i++;
      // }
      //이 웹페이지에 있는 모든a태그를 jquery로 제어하겠다.
      $('a').css('color',color);
    }
  }

var Body = {
  setColor:function(color){
    //var target = document.querySelector('body');
    //target.style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor: function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
}

  function nightDayHandler(self){
    var target = document.querySelector('body');
      if(self.value === 'night'){
        Body.setBackgroundColor('black');
        self.value = 'day';
        Body.setColor('white');
        Links.setColor('powderblue');
      } else {
        Body.setBackgroundColor('white');
        self.value = 'night';
        Body.setColor('black');
        Links.setColor('blue');
      }
  }
