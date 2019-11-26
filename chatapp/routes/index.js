'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db/db').db;
let quiz_start = "button";
let quiz_button = "投稿";
/**
 * Chat Entity
 */
class ChatEntity {
  /**
   * コンストラクタ
   *
   * @param id ID
   * @param name chatroom名
   * @param quiz_start クイズの状況（0:チャット状態,1:クイズ開始状態）
   */
  constructor(id, name, quiz_start) {
    this.id   = id;
    this.name = name;
    this.quiz_start  = quiz_start;
  }
}

var chatModel = require('../db/chat-model');
var roomModel = require('../db/room-model');

// ------------------------------------------------------------
// 成功時に呼び出される関数
// ------------------------------------------------------------
function FulfilledFunc (value){
	console.log('success',value.quiz_start);
}

// ------------------------------------------------------------
// 失敗時に呼び出される関数
// ------------------------------------------------------------
function RejectedFunc (reason){
  console.log(value);
}

// ログイン画面の表示
router.get('/', function(request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', async function(request, response, next) {
  const chat = new chatModel();
  let quiz_status = '';
  quiz_status = await chat.findById(1);
  console.log('ユーザ名：' + request.body.userName+quiz_status.quiz_start);
    if (quiz_status.quiz_start==0){
      quiz_start = "button";
      quiz_button = '投稿';
    }else{
      quiz_start = "hidden";
      quiz_button = '回答';
    }
    response.render('room', { userName: request.body.userName, quizrStart:  quiz_start, quizButton :quiz_button});
});

// リダイレクト先の表示
router.get('/end', function(request, response, next) {
    response.render('end');
})

module.exports = router;
