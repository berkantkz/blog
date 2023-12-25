---
layout: post
number: 3
title: Operatörler
author: berkantkz
date: 2023-11-20 11:02:00
category: [kodlama,python]
type: python
tags: [python]
---

Python'da operatörler, çeşitli işlemleri gerçekleştirmek için kullanılan semboller veya sözcüklerdir. Değişkenler arasında matematiksel işlemler yapmak, karşılaştırmalar yapmak veya mantıksal durumları kontrol etmek için kullanılırlar.

#### Aritmetik Operatörler

- **Toplama `+`:** İki değeri toplar.
- **Çıkarma `-`:** Bir değeri diğerinden çıkarır.
- **Çarpma `*`:** İki değeri çarpar.
- **Bölme `/`:** Bir değeri diğerine böler (ondalıklı sonuç verir).
- **Tam Bölme `//`:** Bir değeri diğerine böler (tam sayı sonuç verir).
- **Modülüs `%`:** Bir değerin diğerine bölümünden kalanı verir.
- **Üs Alma `**`:** Bir sayının üssünü alır.

#### Karşılaştırma Operatörleri

- **Eşitlik `==`:** İki değerin eşit olup olmadığını kontrol eder.
- **Eşit Değil `!=`:** İki değerin eşit olmadığını kontrol eder.
- **Daha Büyük `>` / Daha Küçük `<`:** Bir değerin diğerinden büyük veya küçük olduğunu kontrol eder.
- **Büyük Eşit `>=` / Küçük Eşit `<=`:** Bir değerin diğerinden büyük veya eşit, küçük veya eşit olduğunu kontrol eder.

#### Mantıksal Operatörler

- **and:** Her iki koşul da doğruysa `True` döndürür.
- **or:** Herhangi bir koşul doğruysa `True` döndürür.
- **not:** Koşulun tersini döndürür.

Operatörler, programlamada veriler üzerindeki işlemleri gerçekleştirmek için kullanılır. Örneğin:

```python
# Aritmetik Operatörler
x = 10
y = 3

print(x + y)  # Toplama
print(x - y)  # Çıkarma
print(x * y)  # Çarpma
print(x / y)  # Bölme (ondalıklı sonuç)
print(x // y) # Tam Bölme (tam sayı sonucu)
print(x % y)  # Modülüs (kalan)
print(x ** y) # Üs alma

# Karşılaştırma Operatörleri
a = 5
b = 10

print(a == b) # Eşitlik
print(a != b) # Eşit Değil
print(a > b)  # Daha Büyük
print(a < b)  # Daha Küçük

# Mantıksal Operatörler
p = True
q = False

print(p and q) # and operatörü
print(p or q)  # or operatörü
print(not p)   # not operatörü
```

Python'daki operatörler, programlama sürecinde önemli bir role sahiptir. Matematiksel işlemleri gerçekleştirmek, karşılaştırmalar yapmak veya mantıksal koşulları kontrol etmek için kullanılırlar. Farklı operatörleri kullanarak veriler üzerinde çeşitli işlemler yapabilir ve programınızın davranışını belirleyebilirsiniz.