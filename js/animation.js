var now = new Date();
var all_msg =[{"name":"Denis","content":"לורם איפסום הוא כינוי לטקסט חסר משמעות לחלוטין - הנקרא לפעמים גם דמי טקסט או ג'יבריש - ומיועד להיות ממוקם בסקיצות עיצוביות - של עלונים, מגזינים, מודעות, אתרי אינטרנט וכו"},
   {"name":"Ilia","content":"אם בשלב הסקיצה העיצובית עדיין לא קיים הטקסט הרלוונטי, לא מומלץ למקם טקסט אמיתי אחר."},
   {"name":"Yafit","content":"הסיבה היא, כי בעת הצגת סקיצה עם טקסט אמיתי קריא, יתחיל הצופה לקרוא אוטומטית את הטקסט, ואם תוכן הטקסט לא רלוונטי לעבודה המוצגת - הדבר יסיח את דעתו מהעיצוב."},
   {  "name":"Anna","content":"לוחצים על הכפתור שמתחת, מקבלים לורם איפסום טרי ורענן, בוחרים את כמות הטקסט הרצויה, מעתיקים" },
   {  "name":"Shlomi","content":"ומדביקים בתוכנת העיצוב הרצויה. או אז, אפשר לתת לו את איפיוני העיצוב הדרושים לסקיצה."},
   {"name":"Yosi","content":"בזמן הרפרוף עליו, מילה שתסיח את דעתו. לורם איפסום תוכנן בקפידה כך שיחקה במרקם ובקצב שלו טקסט אמיתי בעברית. "},
   {"name":"Michael","content":"רבים חושבים שיש משמעות לטקסט, אולם לא נועדה להיות לו כל משמעות."},
   {"name":"Shalom","content":"בזמן שאתם קוראים שורות אלו, אנשים אחרים עורכים ויוצרים ערכים."},
   {"name":"Kobi","content":"מומחים בתחומים שונים משתתפים באופן קבוע בכתיבת ערכים בשפות שונות"},
   {"name":"Miriam","content":"תן לערוך בין אם אתם משתמשים רשומים ובין אם לא."}

];


//display array objects in div's
$(document).ready(function() {
    for (var i = 0; i < all_msg.length; i++) {

      $("<li>").addClass("message").append('<div class="img_box"><img src="images/Post-img.png"/></div>' +
        '<p class="name">' + all_msg[i].name + '</p>' + '<p class="date">' + now.format("H:MM dd/m/yy ") + '</p>' + '<p class="content">' + all_msg[i].content + '</p>').appendTo(".message_wrapper");
  }
})

//adding new message from textarea
$(".btn").click(function(){
  var newMsg = document.getElementById("msg").value ;

   all_msg.push($("<li>").addClass("message").append('<div class="img_box">'+"<img src='images/Post-img.png'/>"+'</div>' +
     '<p class="name">New message</p>' +
      '<p class="date">' + now.format("H:MM dd/m/yy ") +
       '</p>' + '<p class="content">'+ newMsg+'</p>').appendTo(".message_wrapper"));
        $("#msg").val("");
  })



//making the message slide
var interval;
function startTicker() {
  $(".message_wrapper li:last-child").fadeOut(function() {
    $(this).prependTo($(".message_wrapper")).slideDown(1500);
  });
}
function stopTicker() {
  clearInterval(interval);
}
$(document).ready(function() {
  interval = setInterval(startTicker, 4500);
  $(".message_wrapper").hover(function() {
    stopTicker();
  }, function() {
    interval = setInterval(startTicker, 4500);
  });
});
