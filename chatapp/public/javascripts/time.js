  //ここにカウントダウンの秒数定義
  let count = 5;
  //　属性の値を取得する
  const quiz_text = document.getElementById("btn-quiz");
  const status = quiz_text.getAttribute("type");
  if ($('.room-quiz_button').is(':visible')) {
    // 表示の場合
  } else {
    // 非表示の場合
    setInterval(count_down, 1000);
    function count_down() {
      count--;
      const count_text = 'クイズ回答終了まで'
      $('#countdown').text(count);
      // 0秒になった時
      if(count == 0) {
      location.href = 'https://fresh-recruit.rakus.co.jp/rakuraku/';
    }
  }  
  }

  // クイズボタンがクリックされた場合の処理
  $('.room-quiz_button').click(function(){
    setInterval(count_down, 1000);
    function count_down() {
      count--;
      const count_text = 'クイズ回答終了まで'
      $('#countdown').text(count);
      // 0秒になった時
      if(count == 0) {
      location.href = 'https://fresh-recruit.rakus.co.jp/rakuraku/';
    }
  }
  });
