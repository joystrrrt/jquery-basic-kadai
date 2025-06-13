$(function(){
  //ボタンがクリックされたら、文字色を赤
  $('#change-color').on('click',function(){
    $('#target').css('color','red');
  });

  //ボタンがクリックされたら、文字内容をHello!に変更
  $('#change-text').on('click',function(){
    $('#target').text('Hello!');
  });

  //ボタンがクリックされたら、フェードアウトで文字が消える
  $('#fade-out').on('click',function(){
    $('#target').fadeOut();
  });

  //ボタンがクリックされたら、フェードインで文字が現れる
  $('#fade-in').on('click',function(){
    $('#target').fadeIn();
  });

});