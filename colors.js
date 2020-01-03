var Links = {setColor:function LinksSetColor(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i<alist.length){
        alist[i].style.color=color;
        i++;
      }
    }}

var Body = {
  setColor:function BodySetColor(color){
    var target = document.querySelector('body');
    target.style.color = color;
  }, setBackgroundColor:  function bodySetBackgroundColor(color){
      document.querySelector('body').style.backgroundColor=color;
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
