
# Ay ve Mevsim Belirleyici

## Proje Açıklaması
Bu proje, kullanıcıdan bir ay numarası alarak o ayın hangi mevsime denk geldiğini belirler. Girilen ay numarası 1-12 aralığında değilse kullanıcıya hata mesajı verir. Projede `switch-case` yapısı ile mevsim belirlenirken, geçersiz girişler için `if-else` yapısı kullanılmıştır.

## Gereksinimler
- JavaScript dilinde temel bilgi
- `switch-case` ve `if-else` yapılarının kullanımı
- Kullanıcıdan veri almak için `prompt()` ve ekrana çıktı vermek için `console.log()` bilgisi

## Özellikler
- Kullanıcıdan alınan ay numarasına göre hangi mevsimde olduğumuzu belirler.
- 1-12 aralığı dışında bir sayı girilirse kullanıcıyı uyarır.

## Proje Adımları

1. **Kullanıcıdan Ay Girişi Alma**
   - Kullanıcıdan ay numarasını `prompt()` ile isteyin.
   
2. **Geçerlilik Kontrolü**
   - Kullanıcıdan gelen değerin 1 ile 12 arasında olup olmadığını `if-else` yapısı ile kontrol edin.
   - Eğer ay numarası bu aralıkta değilse bir hata mesajı verin ve işlemi sonlandırın.

3. **Mevsim Belirleme**
   - Eğer ay numarası geçerliyse, `switch-case` yapısını kullanarak ayın hangi mevsime ait olduğunu belirleyin.
   - Her mevsim için bir `case` oluşturun:
     - Kış: Aralık (12), Ocak (1), Şubat (2)
     - İlkbahar: Mart (3), Nisan (4), Mayıs (5)
     - Yaz: Haziran (6), Temmuz (7), Ağustos (8)
     - Sonbahar: Eylül (9), Ekim (10), Kasım (11)

4. **Çıktı Gösterme**
   - Her bir mevsim için uygun bir mesaj gösterin. Örneğin, "Bu ay Kış." gibi.
   - Kullanıcı geçersiz bir ay numarası girdiğinde "Geçersiz ay numarası" gibi bir hata mesajı verin.

## Kod Yapısı

Projenin kod yapısına ( ay_ve_mevsim_belirleyici.js ) adlı dosyadan ulaşabilirsiniz.

## İpuçları
- Giriş doğrulama kısmında `alert()` veya `console.log()` gibi yapılarla kullanıcının dikkatini çekebilirsiniz.
- Test etmek için farklı ay numaraları girerek her mevsim ve geçersiz giriş durumunu kontrol edin.

## Sonuç
Bu proje ile `switch-case` ve `if-else` yapılarını kullanarak kullanıcı girişine dayalı bir program oluşturabilir ve mevsim belirleme konusunda pratik yapabilirsiniz.
