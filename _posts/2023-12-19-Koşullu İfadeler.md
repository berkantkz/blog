---
layout: post
number: 4
title: Koşullu İfadeler (if/if-else/if-elif-else)
author: berkantkz
date: 2023-12-19 11:00:00
category: [kodlama, python]
type: python
tags: [python]
---
Koşullu ifadeler, programların belirli koşullara göre farklı adımlar atamasını sağlayan yapıları ifade eder. Bu yapılar, Python'da `if`, `else` ve `elif` (else if) anahtar kelimeleriyle oluşturulur.

Koşullu ifadeler, programlama sürecinde belirli şartların karşılanıp karşılanmadığını kontrol ederek, programın akışını yönlendirir. 

```python
x = 10

if x > 5:
    print("x, 5'ten büyük") # Eğer x 5'ten büyükse bu blok çalışır
else:
    print("x, 5'ten küçük veya eşit") # Değilse bu blok çalışır
```

Yukarıdaki örnekte, `if` ifadesi ile `x > 5` koşulu kontrol edilir. Eğer bu koşul doğruysa (True), ilgili `print` ifadesi çalışır. Eğer koşul doğru değilse, yani `x` 5'ten küçük veya eşitse, `else` bloğu çalışır.

```python
y = 20

if y > 50:
    print("y, 50'den büyük")
elif y == 50:
    print("y, 50'ye eşit")
else:
    print("y, 50'den küçük")
```

Yukarıdaki örnekte, `if` ve `elif` ifadeleriyle birden fazla koşul kontrol edilir. `if` koşulu doğru değilse `elif` bloğu kontrol edilir. Eğer ne `if` ne de `elif` koşulları doğru değilse, `else` bloğu çalışır.

Koşullu ifadeler, gerçek dünya senaryolarını programlamada modellemede yaygın olarak kullanılır. Örneğin, kullanıcıdan giriş alırken, belirli bir değerin belirli bir sınıra uyup uymadığını kontrol etmek, farklı işlemler gerçekleştirmek gibi durumlarda koşullu ifadeler büyük önem taşır.

```python
username = input("Kullanıcı adınızı girin: ")

if username == "admin":
    print("Hoş geldiniz, admin!")
else:
    print("Hoş geldiniz,", username)
```

Yukarıdaki örnekte, kullanıcı adı `admin` ise farklı bir çıktı verilirken, farklı bir kullanıcı adı girildiğinde farklı bir çıktı üretilmiştir.

Koşullu ifadeler, programların esnekliğini artırır ve belirli şartlara bağlı olarak farklı işlemler yapılmasını sağlar. Bu yapılar, programların daha karmaşık senaryolarda bile doğru kararlar almasını sağlayarak programlama sürecinde önemli bir rol oynar.


Koşullu ifadeler, programlama sürecinde programların belirli şartlara göre farklı davranışlar sergilemesini sağlayan yapılar olarak önemli bir role sahiptir. Bu yapılar, programların karar mekanizmalarını modellemek ve istenen koşullara göre işlem yapmak için kullanılır.