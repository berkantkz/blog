---
layout: post
number: 12
title: Hata Yakalama (Exception Handling)
author: berkantkz
date: 2023-12-19 11:00:05
category: [kodlama, python]
type: python
tags: [python, "İleri Seviye Python Kavramları"]
---
Hata Yakalama (Exception Handling), bir programın çalışması sırasında oluşabilecek hataları öngörmek ve bu hatalarla başa çıkmak için kullanılan bir programlama tekniğidir. Python gibi birçok programlama dilinde hata yakalama, try-except blokları kullanılarak gerçekleştirilir.

**Hata Türleri:**
- Python'da birçok hata türü bulunur. Bunlar arasında `TypeError`, `ValueError`, `ZeroDivisionError` gibi yaygın hatalar bulunur. 
- Hatalar, programın normal akışını bozabilir ve programın çökmesine neden olabilir.

**Try-Except Blokları:**
- `try` ve `except` blokları, belirli bir kod bloğunda olası hataları yakalamak ve işlemek için kullanılır.
- `try` bloğu içindeki kodlar çalıştırılır ve eğer bir hata oluşursa kontrol `except` bloğuna geçer.

Örnek bir hata yakalama:
```python
try:
    number = int(input("Lütfen bir sayı girin: "))
    result = 10 / number
    print("Sonuç:", result)
except ZeroDivisionError:
    print("Sıfıra bölme hatası!")
except ValueError:
    print("Geçersiz sayı girişi!")
```

Yukarıdaki örnekte, `try` bloğu içinde kullanıcıdan sayı girişi alınır. Eğer kullanıcı geçerli bir sayı girmezse veya sıfıra bölme işlemi yapmaya çalışırsa, program hatayı yakalar ve ilgili `except` bloğuna yönlendirilir.

**Finally Bloğu:**
- `finally` bloğu, her durumda çalışmasını istediğimiz kodları içerir. Bu blok, hata olsun olmasın her durumda çalıştırılır.
- Özellikle kaynakların serbest bırakılması gereken durumlarda (dosyaların kapatılması gibi) kullanılır.

Örnek bir finally bloğu:
```python
try:
    file = open("example.txt", "r")
    # Dosya ile ilgili işlemler yapılır
except FileNotFoundError:
    print("Dosya bulunamadı!")
finally:
    file.close()
```

Hata yakalama, programların daha sağlam olmasını sağlar. Özellikle kullanıcı girdilerinin doğrulanması veya harici kaynaklarla etkileşimde bulunurken bu yöntem kullanılır. Doğru şekilde uygulandığında, hata yakalama programların daha güvenilir olmasını sağlar ve kullanıcıya daha iyi bir deneyim sunar.
