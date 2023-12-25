---
layout: post
number: 9
title: Nesne Yönelimli Programlama (OOP)
author: berkantkz
date: 2023-12-19 11:00:03
category: [kodlama, python]
type: python
tags: [python, "İleri Seviye Python Kavramları"]
---
Nesne Yönelimli Programlama (OOP), bir programın yapısını ve organizasyonunu nesnelere dayandırarak tasarlamayı sağlayan bir programlama paradigmasıdır. Python gibi birçok modern programlama dilinde OOP kavramlarına dayalı programlama desteklenir.

Nesne Yönelimli Programlamanın temelinde üç ana unsur bulunur: **Sınıflar (Classes)**, **Nesneler (Objects)** ve **Metotlar (Methods)**.

- **Sınıflar (Classes):** Sınıflar, nesnelerin temel şablonlarını tanımlayan yapılardır. Her sınıf, belirli özelliklere (nitelikler/attributes) ve davranışlara (metotlar/methods) sahip olabilir.

Örnek bir sınıf tanımı:
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def drive(self):
        return f"{self.brand} {self.model} is being driven."
```

- **Nesneler (Objects):** Sınıflardan türetilen örneklerdir. Sınıf tanımlandığında, gerçek dünyadaki varlıkların temsil edileceği bir şablon oluşturulmuş olur. Bu şablonu kullanarak gerçek nesneleri oluşturabiliriz.

Örnek bir nesne oluşturma:
```python
car1 = Car("Toyota", "Corolla")
car2 = Car("Honda", "Civic")
```

- **Metotlar (Methods):** Sınıfların davranışlarını tanımlayan fonksiyonlardır. Bu fonksiyonlar, nesneler üzerinde belirli işlemleri gerçekleştirebilir.

Örnek bir metot kullanımı:
```python
print(car1.drive())  # Çıktı: "Toyota Corolla is being driven."
print(car2.drive())  # Çıktı: "Honda Civic is being driven."
```

Nesne Yönelimli Programlama, kodun daha organize, esnek ve tekrar kullanılabilir olmasını sağlar. Bu, büyük projelerde karmaşıklığı azaltmak, kodun daha sürdürülebilir olmasını sağlamak ve kodun okunabilirliğini artırmak için oldukça yararlıdır.

Python gibi bir dilde OOP, kodlama sürecini iyileştirir ve sınıflar ve nesneler kullanılarak gerçek dünyadaki varlıkları daha iyi modelleme imkanı sağlar. Bu da programcılara daha etkili ve modüler programlar yazma yeteneği verir.