---
layout: post
number: 17
title: Algoritma Tasarımı ve Analizi (Sorting, Searching)
author: berkantkz
date: 2023-12-19 11:00:19
category: [kodlama, python]
type: python
tags: [python, "Veri Yapıları ve Algoritmalar"]
---

Algoritma tasarımı ve analizi, bilgisayar bilimindeki temel konulardan biridir. Özellikle sıralama (sorting) ve arama (searching) algoritmaları, veri yapılarını düzenlemek ve içerisinde arama yapmak için kullanılan algoritmaların temelini oluşturur.

**Sıralama Algoritmaları:**

- **Kabarcık Sıralama (Bubble Sort):** Bu algoritma, komşu elemanları karşılaştırarak yer değiştirme işlemi yapar. Her bir iterasyonda en büyük elemanı sağa iter.

Örnek:
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

- **Hızlı Sıralama (Quick Sort):** Bu algoritma, bir pivot seçerek veri setini pivot etrafında bölerek ve her alt kümeyi ayrı ayrı sıralayarak çalışır. Pivot seçimi ve bölme işlemi devam eder.

Örnek:
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[0]
        less = [x for x in arr[1:] if x <= pivot]
        greater = [x for x in arr[1:] if x > pivot]
        return quick_sort(less) + [pivot] + quick_sort(greater)
```

**Arama Algoritmaları:**

- **Sıralı Arama (Linear Search):** Bu algoritma, veri kümesini baştan sona tarar ve hedef değeri bulana kadar devam eder. En kötü durumda n elemanlı bir listede n adet karşılaştırma yapar.

Örnek:
```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

- **İkili Arama (Binary Search):** Bu algoritma, veri kümesini sıralı olarak kabul ederek orta elemanı seçer ve hedef değerle karşılaştırır. Her adımda aranan elemanı arama alanını yarıya indirir.

Örnek:
```python
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

Bu algoritmaların örnekleri, her bir algoritmanın nasıl çalıştığını ve hangi tür problemleri çözmek için kullanılabileceğini daha iyi anlamanıza yardımcı olabilir. Algoritma analizi, hangi algoritmanın belirli bir problem için daha etkili olduğunu anlamak için önemlidir ve algoritmaların performanslarını değerlendirirken zaman ve hafıza karmaşıklığını göz önünde bulundurur.