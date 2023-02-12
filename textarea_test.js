//【JavaScript】textareaの入力内容で高さを自動調整する

//textareaの要素取得
let textarea999 = document.getElementById("textarea999");
//textareaのデフォルトの要素の高さを取得
let ch = textarea999.clientHeight;

//textareaのinputイベント
textarea999.addEventListener('input', ()=>{
    //textareaの高さを再設定（デフォルトの高さから計算するため）
    textarea999.style.height = ch + 'px';
    //textareaの入力内容の高さを取得
    let sh = textarea999.scrollHeight;
    //textareaの高さに入力内容の高さを設定
    textarea999.style.height = sh + 'px';
});