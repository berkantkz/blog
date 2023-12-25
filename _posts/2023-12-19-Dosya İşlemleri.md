---
layout: post
number: 13
title: Dosya İşlemleri
author: berkantkz
date: 2023-12-19 11:00:06
category: [kodlama, python]
type: python
tags: [python, "İleri Seviye Python Kavramları"]
---
Dosya işlemleri, Python'da dosyaların okunması, yazılması, oluşturulması ve düzenlenmesi gibi işlemleri gerçekleştirmek için kullanılır. Bu işlemler, verileri kalıcı olarak depolamak veya programlar arasında veri alışverişi yapmak için yaygın olarak kullanılır.

**Dosya Açma ve Kapatma:**
- `open()` fonksiyonu, dosyayı açmak için kullanılır. Dosya adı ve işlem modu parametre olarak verilir.
- Dosya işlem modları arasında `r` (read), `w` (write), `a` (append) gibi seçenekler bulunur.
- Dosya işlemlerinin tamamlanmasının ardından `close()` fonksiyonu kullanılarak dosya kapatılır.

Örnek dosya açma ve kapatma:
```python
file = open("example.txt", "r")  # Dosyayı okuma modunda aç
# Dosya ile ilgili işlemler yapılır
file.close()  # Dosyayı kapat
```

**Dosyaya Yazma:**
- Dosyaya veri yazmak için `write()` fonksiyonu kullanılır. Bu fonksiyon, metin veya veri türündeki içerikleri dosyaya yazar.
- Dosya yazma modunda (`"w"`) açıldığında, dosyanın içeriği silinir ve yeniden yazılır.

Örnek dosyaya yazma:
```python
file = open("example.txt", "w")  # Dosyayı yazma modunda aç
file.write("Bu bir örnek metin.")  # Dosyaya metin yaz
file.close()  # Dosyayı kapat
```

**Dosyadan Okuma:**
- Dosyadan veri okumak için `read()` veya `readline()` fonksiyonları kullanılır.
- `read()` fonksiyonu dosyanın tamamını, `readline()` ise dosyanın bir satırını okur.

Örnek dosyadan okuma:
```python
file = open("example.txt", "r")  # Dosyayı okuma modunda aç
content = file.read()  # Dosyayı oku
print(content)  # Okunan içeriği ekrana yazdır
file.close()  # Dosyayı kapat
```

Dosya işlemleri, programlama sürecinde veri depolamanın ve veri alışverişinin önemli bir parçasıdır. Doğru kullanıldığında, dosya işlemleri verilerin kalıcı olarak saklanmasını, programların veri analizi yapmasını veya başka programlarla veri paylaşmasını sağlar. Ancak, dosya işlemleri yaparken dosyanın açık ve kapatılmış olduğundan emin olmak önemlidir, aksi halde beklenmeyen sonuçlar ortaya çıkabilir.