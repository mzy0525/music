	$(function(){
    function setRem(){
      var clientWidth=$(window).width();
      var nowRem=(clientWidth/375*10);
      $('html').css('font-size',nowRem+'px');
    };
    setRem();
    $(function(){
    var timer;
    $(window).bind('resize',function(){
      clearTimeout(timer)
        timer=setTimeout(function(){
          setRem();
        },100)
      })
    });
  });
  
  
var flse = false;//开关
var index = 0; //下标
  touch.on('#img1','tap',function(){
    flse = !flse;
    flse?audios.play():audios.pause();
  })



  touch.on('ul>li','tap',function(){
    $('#audios').attr('src',$(this).parents('li').attr('musc'));
    // $('#mingzi').html($(this).parents('li').find('.mingzi').text());
    audios.play();
    flse = true;
    index = $(this).parents('li').index();
  })



  function xunhuan(){
    var s = $('ul>li').length-1;
    // var x = document.getElementById('audios').duration;
    setInterval(function(){
      if(document.getElementById("audios").ended){
        index++;
        if(index>s)index=0;
        $('#audios').attr('src',$('ul>li').eq(index).attr('musc'))
        $('#mingzi').html($('ul>li').eq(index).find('.mingzi').text());
        audios.play();
        flse = true;
      }
      // 
      // console.log(document.getElementById('audios').duration);
    },1000)
    
  }
  $(function(){
    
    xunhuan();
  })
  
 