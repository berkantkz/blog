---
layout: post
number: 10
title: Sınıflar ve Nesneler
author: berkantkz
date: 2023-12-19 11:00:03
category: [kodlama, python]
type: python
tags: [python, "İleri Seviye Python Kavramları"]
---
Sınıflar ve Nesneler, Nesne Yönelimli Programlama (OOP) paradigmasının temel yapı taşlarıdır ve birçok programlama dilinde kullanılan önemli kavramlardır. Sınıflar, nesnelerin temel yapılarını ve özelliklerini tanımlarken, nesneler ise bu sınıflardan türetilen örneklerdir.

- **Sınıflar (Classes):**
  - Sınıflar, nesnelerin yapısını tanımlayan şablonlardır.
  - Nesnelerin sahip olabileceği özellikleri (nitelikler/attributes) ve davranışları (metotlar/methods) içerir.
  - Sınıflar, Python'da `class` anahtar kelimesiyle tanımlanır.

Örnek bir sınıf tanımı:
```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} is barking."
```

- **Nesneler (Objects):**
  - Sınıflardan türetilen örneklerdir.
  - Sınıfın şablonuna göre özelliklere ve davranışlara sahip olan öğelerdir.
  - Sınıf adı ve parantez içine gerekli argümanlar ile oluşturulurlar.

Örnek bir nesne oluşturma:
```python
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)
```

Sınıflar ve Nesneler, gerçek dünyadaki varlıkları temsil etmek için kullanılabilir. Örneğin, yukarıdaki `Dog` sınıfı, gerçek hayattaki köpekleri temsil etmek üzere oluşturulmuştur. `Dog` sınıfından türetilen `dog1` ve `dog2` nesneleri ise belirli köpeklerin özelliklerini ve davranışlarını içerecektir.

Nesneler, sınıfın özelliklerine erişerek veya sınıfın metotlarını çağırarak işlem yapabilirler.

Örnek bir metot kullanımı:
```python
print(dog1.bark())  # Çıktı: "Buddy is barking."
print(dog2.bark())  # Çıktı: "Max is barking."
```

Sınıflar ve Nesneler, programlamada modülerlik ve esneklik sağlar. Büyük projelerde karmaşıklığı azaltır ve kodun daha okunabilir olmasını sağlar. Python gibi bir dilde OOP kavramları, programcılara gerçek dünyadaki varlıkları ve problemleri daha iyi modelleme imkanı sunar. Bu da daha düzenli, sürdürülebilir ve genişletilebilir programlar yazmaya olanak tanır.