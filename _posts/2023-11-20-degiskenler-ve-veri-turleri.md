---
layout: post
number: 2
title: Değişkenler ve Veri Türleri
author: berkantkz
date: 2023-11-20 11:01:00
category: [kodlama, python]
type: python
tags: [python, temel python kavramları]
---

Python'da değişkenler, bir değeri saklamak için kullanılan adlandırılmış bellek yerleridir. Her değişken bir veri türüne sahiptir.

#### Değişkenlerin Tanımlanması

Python'da bir değişken tanımlamak için adını ve değerini atamak yeterlidir. Örneğin:

```python
x = 5
y = "Hello, World!"
```

Burada `x` bir tam sayı değeri saklar, `y` ise bir metin dizisi (string) saklar.

#### Veri Türleri

1. **Sayılar:**
    - **Tamsayılar (integers):** Tam sayıları temsil eder. Örnek: `5`, `100`, `-10`.
    - **Ondalıklı Sayılar (floats):** Ondalık sayıları temsil eder. Örnek: `3.14`, `2.718`.

2. **Metin Dizileri (Strings):**
    - Metin dizileri, karakterlerin bir dizisidir. Örnek: `"Hello"`, `'World'`, `"Merhaba"`.

3. **Boolean (Bool):**
    - `True` veya `False` değerlerini temsil eder. Koşullu ifadelerde sıkça kullanılır.

#### Veri Türü Belirleme ve Dönüşüm

Python'da `type()` fonksiyonu, bir değişkenin veri tipini belirlemek için kullanılabilir. Örneğin:

```python
x = 5
y = "Hello, World!"

print(type(x))  # <class 'int'>
print(type(y))  # <class 'str'>
```

Değişkenler arasında dönüşüm yapmak için ise bazı dönüşüm fonksiyonları kullanılabilir:

```python
x = 5
y = "10"

# String olan y değişkenini tamsayıya dönüştürme
y_as_int = int(y)

# Tamsayılar arasında işlem yapma
result = x + y_as_int
print(result)  # 15
```

Değişkenler ve veri tipleri, Python programlamasının temel taşlarından biridir. Bu kavramları anlamak, verileri işlemek ve programlama mantığını kavramak için önemlidir.