---
layout: post
number: 11
title: Kalıtım ve Polimorfizm
author: berkantkz
date: 2023-12-19 11:00:04
category: [kodlama, python]
type: python
tags: [python, "İleri Seviye Python Kavramları"]
---

Kalıtım ve Polimorfizm, Nesne Yönelimli Programlama (OOP) paradigmalarının önemli bileşenleridir ve programlamada esneklik ve yeniden kullanılabilirlik sağlar.

**Kalıtım (Inheritance):**
- **Kalıtım**, bir sınıfın diğer sınıflardan özelliklerini ve davranışlarını devralmasıdır.
- Alt sınıf (subclass) üst sınıfın (base class) özelliklerini ve metodlarını kullanabilir ve aynı zamanda kendi özelliklerini veya metodlarını da ekleyebilir.
- Python'da kalıtım, sınıf tanımlarken parantez içinde üst sınıfın adını belirterek gerçekleştirilir.

Örnek bir kalıtım:
```python
class Animal:
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        return "Woof!"
```

Yukarıdaki örnekte, `Animal` sınıfından türetilen `Dog` sınıfı, `Animal` sınıfının özelliklerini ve metodlarını miras alarak `sound` metodunu kendine özgü şekilde tanımlamıştır.

**Polimorfizm (Polymorphism):**
- **Polimorfizm**, aynı isme sahip metodların farklı sınıflarda farklı şekillerde davranabilmesidir.
- Polimorfizm, aynı metod adı altında farklı sınıflarda farklı davranışların sergilenebilmesini sağlar.
- Bu kavram, programcılara daha esnek ve genişletilebilir kod yazma imkanı sunar.

Örnek bir polimorfizm:
```python
class Cat(Animal):
    def sound(self):
        return "Meow!"

class Cow(Animal):
    def sound(self):
        return "Moo!"
```

Yukarıdaki örnekte, farklı alt sınıflar olan `Cat` ve `Cow`, üst sınıf olan `Animal`'ın `sound` metodunu farklı şekillerde ezerek (override) kendi davranışlarını sergilemişlerdir.

Kalıtım ve polimorfizm, programcılara kodlarını daha organize etme ve genişletme imkanı sağlar. Bu prensipler, kod tekrarını azaltır, kodun daha anlaşılır olmasını sağlar ve daha az hata yapmayı mümkün kılar. Nesne Yönelimli Programlama içinde bu kavramları anlamak ve doğru şekilde kullanmak, daha modüler, sürdürülebilir ve genişletilebilir yazılımlar oluşturmak için önemlidir.