jQuery Event Lib

フロントのNavやaタグを利用したリンクなどに使えます。

使い方
1. <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>をhtmlに書き込む。
2. Lib-Class/ID に書いてあるid(例 link) を適応したオブジェクトにつけてください。

Lib-Class/ID
under-カーソルを合わせているときにアンダーラインを引く
link- カーソルを合わせているときに色を変える。(CSSで初期の色を#00bfffにしてください)
scroll/scobj-クリックすることでスクロール(MainNavとかで使える)

ScrollUsed
1.適応させたいボタンやNavに"scroll"というclassまたはidをつけてください。
2.次にスクロールさせてスクロールを止めたいところに、divを使って"scobj"というclassまたはidをつけてください。
これでOK
お好みでNavにunderもつけてみるといい感じです。