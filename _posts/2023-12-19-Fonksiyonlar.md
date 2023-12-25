---
layout: post
number: 7
title: Fonksiyonlar
author: berkantkz
date: 2023-12-19 11:00:03
category: [kodlama, python]
type: python
tags: [python]
---
Fonksiyonlar, Python'da tekrar tekrar kullanılabilir kod bloklarını gruplamak ve organize etmek için kullanılan önemli bir yapıdır. Fonksiyonlar, belirli bir işlemi yapmak için kullanılır ve program içerisinde çağrıldıkları zaman çalıştırılırlar.

Fonksiyonlar, belirli bir işlemi gerçekleştirmek için tanımlanır ve bu işlem, farklı parametrelerle çağrılarak çalıştırılabilir. Bir fonksiyon genellikle giriş parametreleri alır, belirli bir işlemi gerçekleştirir ve bir çıktı değeri döndürür.

```python
def greet(name):
    print("Merhaba, " + name + "! Nasılsınız?")
```

Yukarıdaki örnekte, `greet` adında bir fonksiyon tanımlanmıştır. Bu fonksiyon, `name` adında bir parametre alır ve bu parametre ile birlikte ekrana bir selamlama mesajı yazdırır.

Fonksiyonlar, genellikle tekrar eden işlemleri gruplamak ve kodu daha okunabilir ve yönetilebilir hale getirmek için kullanılır.

```python
def calculate_sum(a, b):
    total = a + b
    return total

result = calculate_sum(5, 3)
print(result) # Çıktı: 8
```

Yukarıdaki örnekte, `calculate_sum` adında bir fonksiyon tanımlanmış ve bu fonksiyon iki parametre alarak bunların toplamını döndürmüştür. Fonksiyon, 5 ve 3 değerleri ile çağrılmış ve döndürdüğü sonuç, `result` değişkenine atılmıştır.

Fonksiyonlar, bir program içinde kullanılan kodun daha modüler olmasını sağlar. Bu sayede, karmaşık görevleri küçük ve daha yönetilebilir parçalara bölebilir ve her bir parçayı ayrı ayrı ele alabilirsiniz. Bu da kodun daha okunabilir, anlaşılır ve yeniden kullanılabilir olmasını sağlar.

```python
def calculate_area(length, width):
    area = length * width
    return area

length = 5
width = 10
result = calculate_area(length, width)
print("Alan:", result) # Çıktı: Alan: 50
```

Yukarıdaki örnekte, `calculate_area` adında bir fonksiyon tanımlanmıştır. Bu fonksiyon, `length` ve `width` adında iki parametre alarak dikdörtgenin alanını hesaplar. Ardından, bu fonksiyon belirtilen uzunluk ve genişlik değerleriyle çağrılmış ve hesaplanan alan sonucu ekrana yazdırılmıştır.

Fonksiyonlar, programlamanın önemli yapı taşlarından biridir ve kodların yeniden kullanılabilirliğini, okunabilirliğini ve bakımını artırır. Python'da fonksiyonlar, programların modüler olmasını sağlar ve belirli işlevleri kolayca gerçekleştirmek için kullanılabilir.