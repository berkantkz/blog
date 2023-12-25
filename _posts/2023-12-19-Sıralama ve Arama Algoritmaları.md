---
layout: post
number: 15
title: Sıralama ve Arama Algoritmaları
author: berkantkz
date: 2023-12-19 11:00:07
category: [kodlama, python]
type: python
tags: [python, "Veri Yapıları ve Algoritmalar"]
---
Sıralama ve arama algoritmaları, bilgisayar biliminde veri yapılarını düzenlemek ve içindeki öğeleri bulmak için kullanılan önemli tekniklerdir.

**Sıralama Algoritmaları:**
- **Kabarcık Sıralama (Bubble Sort):** Komşu öğeleri karşılaştırarak yer değiştirme işlemi yapar. Büyükten küçüğe veya küçükten büyüğe doğru sıralama yapabilir. Ancak büyük veri setleri için verimsiz olabilir.

**Örnek Kabarcık Sıralama:**
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

- **Hızlı Sıralama (Quick Sort):** Bir pivot seçerek veri setini pivot etrafında bölerek ve her alt kümeyi ayrı ayrı sıralayarak çalışır. Genellikle hızlıdır ve geniş veri setleri için idealdir.

**Örnek Hızlı Sıralama:**
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
- **Sıralı Arama (Linear Search):** Veri kümesini baştan sona tarar ve aranan öğeyi bulana kadar devam eder. Veri kümesi büyüdükçe etkisiz olabilir.

**Örnek Sıralı Arama:**
```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

- **Binary Search:** Veri kümesinin ortasını seçer, hedef değerle karşılaştırır ve aranan öğeyi bulana kadar arama yapar. Ancak sıralı bir veri kümesinde çalışır.

**Örnek Binary Search:**
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

Bu algoritmalar, veri sıralaması ve arama işlemlerinde farklı yaklaşımlar sunar. Hangi algoritmanın kullanılacağı, veri boyutu, performans gereksinimleri ve veri yapısının yapısı gibi faktörlere bağlıdır. Bu algoritmaların anlaşılması ve doğru bir şekilde kullanılması, veri manipülasyonunda ve problemlerin çözümünde önemlidir.