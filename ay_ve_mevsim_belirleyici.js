//! Proje: Ay ve Mevsim Belirleyici:

//! Kullanıcıdan bir ay numarası alarak, o ayın hangi mevsime
//! denk geldiğini belirleyen bir program yaz. Switch-case
//! yapısını mevsimleri belirlemek için kullanabilirsin. Eğer
//! kullanıcı geçersiz bir sayı girerse, if-else ile bir hata mesajı ver.

//Amaç:
//Kullanıcının girdiği bir ay numarasına göre, o ayın hangi mevsime ait olduğunu belirlemek.

//1- Kullanıcıdan 1 ile 12 arasında bir ay numarası al.
let ay = parseInt(prompt("Lütfen 1 ile 12 arasında bir ay numarası giriniz."));

//2- Girilen ay numarasının geçerli olup olmadığını kontrol et:
//3- Geçersiz ise, kullanıcıya bir hata mesajı göster.
if (ay < 1 || ay > 12) {
  console.log("Geçersiz bir ay numarası girdini.");
}
//4- Geçerli ise, o ayın hangi mevsime ait olduğunu belirle.
//      Mevsimler:
//      Kış: Aralık (12), Ocak (1), Şubat (2)
//      İlkbahar: Mart (3), Nisan (4), Mayıs (5)
//      Yaz: Haziran (6), Temmuz (7), Ağustos (8)
//      Sonbahar: Eylül (9), Ekim (10), Kasım (11)
//5- Kullanıcının girdiği ay numarasına göre "Bu ay Kış, İlkbahar, Yaz veya Sonbahar" şeklinde bir mesaj göster.
else {
  switch (ay) {
    case 12:
    case 1:
    case 2:
      console.log("Bu ay Kış mevsimidir.");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Bu ay İlkbahar mevsimidir.");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Bu ay Yaz mevsimidir.");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Bu ay Sonbahar mevsimidir.");
      break;
    default:
      console.log("Bilinmeyen bir hata oluştu.");
      break;
  }
}
