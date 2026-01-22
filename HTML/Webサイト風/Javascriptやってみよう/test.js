// メッセージ表示
function showMessage(){
 const msg = document.getElementById("msg");

 // ボタンを二回押すとメッセージ削除
 if (msg.textContent === ""){
   msg.textContent = "押された!!";
  } 
  else{
   msg.textContent = "";
  }
 }

// アラートでメッセージ表示
// function showMessage(){
   // alert("押された!!"):}

// 文字列を変更する
// 関数を用いてコードを見やすくする

document.addEventListener('DOMContentLoaded',function(){

  // ===== 文字切り替え関数 =====
  function toggleText(targetId,originStr,changeStr){
    let target = document.getElementById(targetId);
    if(target.textContent === originStr){
      target.textContent = changeStr;
    } else {
      target.textContent = originStr;
    }
  }

  document.getElementById('btn1').addEventListener("click",function(){
    toggleText("container1","このお好み焼きは美味しくない","たこやきおいしい(DOM操作)");
  });

  document.getElementById('btn2').addEventListener("click",function(){
    toggleText("container2","野菜炒め定食","焼肉定食(DOM操作)");
  });

  // ===== 色変更 =====
  let colorElement = document.getElementsByClassName('buttoncolor')[0];

  document.getElementById('red-button').addEventListener('click', () => {
    setBackgroundColor("red");
  });

  document.getElementById('blue-button').addEventListener('click', () => {
    setBackgroundColor("blue");
  });

  document.getElementById('yellow-button').addEventListener('click', () => {
    setBackgroundColor("yellow");
  });

  function setBackgroundColor(buttoncolor){
    colorElement.style.setProperty("--bg-color", buttoncolor);
  }

}); 


// ******************************************************************************* //
// リアルタイム(2桁表示)
// ******************************************************************************* //

let msgtime;		// 現在日時用

function twoDigit(time){
	if(time < 10) return "0" + time;
	return time;
}

// 使いまわしできる
function getRealTime(){
	let nowTime = new Date();
	let nowHour = twoDigit(nowTime.getHours());	// 時
	let nowMin = twoDigit(nowTime.getMinutes());	// 分
	let nowSec = twoDigit(nowTime.getSeconds());	// 秒

	return nowHour + ":" + nowMin + ":" + nowSec;
	}

function showRealTime(){
	let msg = "現在時刻" + getRealTime();
	document.getElementById("realtime").innerHTML = msg;
}


// ******************************************************************************* //

// ******************************************************************************* //
// 現在日時
// ******************************************************************************* //
function showRealDay(){
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth()+1;
	let week = today.getDay();
	let day = today.getDate();

	// 週の配列
	let weekArray = new Array("日","月","火","水","木","金","土");


	let realday = year  + "年" + month + "月" + day + "日" + weekArray[week] + "曜日";
	
	let multiTime = realday + getRealTime();
	document.getElementById("realdaytime").innerHTML = multiTime;
}



// ******************************************************************************* //

// 日時更新
setInterval(showRealTime,1000);
setInterval(showRealDay,1000);


// ******************************************************************************* //
// スクロール
// ******************************************************************************* //
document.addEventListener("DOMContentLoaded", function(){

  const scrollBtn = document.getElementById("scrollBtn");

  if(scrollBtn){
    scrollBtn.addEventListener("click", function(){
      document.getElementById("target").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

});

// ******************************************************************************* //
// トップへ戻るボタン
// ******************************************************************************* //
const backBtn = document.getElementById("backToTop");
const practiceTarget = document.getElementById("7"); // 戻り先

// ある程度スクロールしたら表示
window.addEventListener("scroll", function(){
  if(window.scrollY > 500){
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
});

// クリックで「スクロール練習」まで戻る
backBtn.addEventListener("click", function(){
  practiceTarget.scrollIntoView({
    behavior: "smooth"
  });
});
// ******************************************************************************* //


