---
layout: post
number: 6
title: Listeler, Demetler (Tuples) ve Sözlükler (Dictionaries)
author: berkantkz
date: 2023-12-19 11:00:02
category: [kodlama, python]
type: python
tags: [python]
---
Listeler, Demetler ve Sözlükler, Python'da veri depolamanın farklı yollarını sunar. Bu veri yapıları, farklı özelliklere sahip olup, verileri düzenlemek, saklamak ve erişmek için kullanılır.

Listeler:
- **Liste**, Python'da en yaygın ve esnek veri yapısıdır. 
- **Öğeleri sıralı bir şekilde saklar ve değiştirilebilir (mutable)**.
- Bir liste, farklı veri tiplerini (sayılar, metin dizileri, listeler vb.) içerebilir.
- Liste tanımlanırken köşeli parantez `[ ]` kullanılır.
  
Örnek:
```python
my_list = [1, 2, 3, 'a', 'b', 'c']
```

Demetler (Tuples):
- **Demetler**, listelere benzer, ancak **değiştirilemez (immutable)**.
- Bir demet, farklı veri tiplerini içerebilir ve parantez `( )` kullanılarak tanımlanır.
- Elemanlar üzerinde değişiklik yapılamaz, eklenemez veya çıkarılamaz.

Örnek:
```python
my_tuple = (1, 2, 3, 'a', 'b', 'c')
```

Sözlükler (Dictionaries):
- **Sözlükler**, anahtar-değer çiftleriyle çalışan bir veri yapısıdır.
- Anahtarlar, sözlükteki değerlere erişmek için kullanılır ve her bir anahtarın karşısında bir değer bulunur.
- Sözlükler, köşeli parantez `{ }` ve anahtar-değer çiftleriyle tanımlanır.

Örnek:
```python
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}
```

Listeler, Demetler ve Sözlükler, verileri düzenlemenin ve organize etmenin farklı yollarını sunar. Listeler genellikle sıralı veriler için, demetler değiştirilemez veriler için ve sözlükler anahtar-değer çiftlerini depolamak için kullanılır.

Listelerde ve demetlerde indeksleme ve dilimleme gibi işlemler yapılabilirken, sözlüklerde anahtarlar kullanılarak değerlere erişilir. Bu veri yapıları, programlama sürecinde verileri tutmak, düzenlemek ve işlemek için güçlü ve esnek araçlar sunar. Veri yapılarını doğru bir şekilde kullanmak, Python programlamada verimliliği artırır ve verilerin düzenlenmesini kolaylaştırır.