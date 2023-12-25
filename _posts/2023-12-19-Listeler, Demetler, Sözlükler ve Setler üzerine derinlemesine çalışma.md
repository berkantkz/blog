---
layout: post
number: 14
title: Listeler, Demetler, Sözlükler ve Setler üzerine derinlemesine çalışma
author: berkantkz
date: 2023-12-19 11:00:06
category: [kodlama, python]
type: python
tags: [python, "Veri Yapıları ve Algoritmalar"]
---
Listeler, demetler, sözlükler ve kümeler (sets), Python'da farklı veri yapılarını temsil eder ve her biri farklı özelliklere sahiptir. Bu veri yapıları, verileri depolamak, düzenlemek ve işlemek için kullanılır.

**Listeler (Lists):**
- **Listeler**, birden çok öğeyi sıralı bir şekilde depolamak için kullanılır.
- Listeler, köşeli parantez `[]` içine alınmış öğelerden oluşur.
- Listelerde farklı veri tipleri bir arada bulunabilir.

Örnek bir liste:
```python
my_list = [1, 2, 3, 'a', 'b', 'c']
```

**Demetler (Tuples):**
- **Demetler**, değiştirilemez (immutable) ve sıralı veri yapılarıdır.
- Demetler, parantez `()` içine alınmış öğelerden oluşur.
- Demetler, genellikle değiştirilemez olduğu için sabit verilerin saklanmasında kullanılır.

Örnek bir demet:
```python
my_tuple = (1, 2, 3, 'a', 'b', 'c')
```

**Sözlükler (Dictionaries):**
- **Sözlükler**, anahtar-değer çiftlerini depolamak için kullanılır.
- Sözlükler, süslü parantez `{}` içinde anahtarlar ve bu anahtarların karşılık gelen değerlerinden oluşur.
- Sözlüklerde, anahtarlar benzersiz olmalıdır ve değerler değiştirilebilir.

Örnek bir sözlük:
```python
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}
```

**Kümeler (Sets):**
- **Kümeler**, benzersiz ve değiştirilebilir (mutable) öğeleri saklamak için kullanılır.
- Kümeler, süslü parantez `{}` içinde benzersiz öğelerden oluşur.
- Listelerden, demetlerden veya diğer veri yapılarından kümeler oluşturulabilir.

Örnek bir küme:
```python
my_set = {1, 2, 3, 4, 5}
```

Bu veri yapıları, Python'da verileri farklı amaçlar için organize etmenin ve erişmenin farklı yollarını sunar. Listeler genellikle sıralı ve değiştirilebilir veriler için, demetler değiştirilemez veriler için, sözlükler anahtar-değer çiftlerini saklamak için ve kümeler benzersiz öğeler için kullanılır. Veri yapılarını doğru bir şekilde kullanmak, verileri düzenlemek ve işlemek için programlama sürecinde büyük önem taşır.