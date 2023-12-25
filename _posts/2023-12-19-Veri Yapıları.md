---
layout: post
number: 16
title: Veri Yapıları (Stacks, Queues, Trees, Graphs)
author: berkantkz
date: 2023-12-19 11:00:12
category: [kodlama, python]
type: python
tags: [python, "Veri Yapıları ve Algoritmalar"]
---
Veri yapıları, bilgisayar biliminde verileri organize etmek, saklamak, düzenlemek ve erişmek için kullanılan yapısal modellerdir. Bu yapılar, farklı veri tiplerini depolamak ve işlemek için özelleştirilmiştir.

**Stacks (Yığıtlar):**
- **Yığıtlar**, verilerin son giren, ilk çıkan (LIFO - Last In, First Out) prensibiyle işlendiği veri yapısıdır.
- Elemanlar yığın içerisine eklendiğinde en üstte yer alır ve çıkartıldığında da en son eklenen eleman çıkar.
- Push (ekleme) ve pop (çıkartma) işlemleri yığıtlarda temel operasyonlardır.

Örnek bir stack (yığın):
```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()

    def is_empty(self):
        return self.items == []

    def peek(self):
        if not self.is_empty():
            return self.items[-1]

    def size(self):
        return len(self.items)

# Örnek kullanım
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # Çıktı: 3
```

**Queues (Kuyruklar):**
- **Kuyruklar**, ilk giren, ilk çıkan (FIFO - First In, First Out) prensibine göre işleyen veri yapısıdır.
- Kuyruklarda elemanlar en sona eklenir ve en önce eklenen eleman en önce çıkar.
- Enqueuing (ekleme) ve dequeuing (çıkartma) işlemleri kuyrukların temel operasyonlarıdır.

Örnek bir queue (kuyruk):
```python
from collections import deque

queue = deque()
queue.append(1)
queue.append(2)
queue.append(3)
print(queue.popleft())  # Çıktı: 1
```

**Trees (Ağaçlar):**
- **Ağaçlar**, hiyerarşik bir veri yapısıdır. Bir kök düğümü ve kökten çıkan alt düğümlerden oluşur.
- Her düğüm, bir veya daha fazla çocuk düğüme sahip olabilir. En üstteki düğüme kök (root), en alttakine ise yaprak (leaf) düğüm denir.
- Ağaçlar genellikle arama ağaçları, ikili ağaçlar, k-ary ağaçlar gibi çeşitli türlerde olabilir.

Örnek bir ağaç:
```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.children = []

    def add_child(self, child_node):
        self.children.append(child_node)

# Örnek kullanım
root = TreeNode("A")
child1 = TreeNode("B")
child2 = TreeNode("C")
root.add_child(child1)
root.add_child(child2)
```

**Graphs (Grafikler):**
- **Grafikler**, noktalar (düğümler) ve bu noktaları birbirine bağlayan kenarlar (edges) ile tanımlanan veri yapılarıdır.
- Grafikler, yönlü (directed) veya yönsüz (undirected) olabilir.
- Grafikler, sosyal ağlar, harita uygulamaları, iletişim ağları gibi birçok alanda kullanılır.

Örnek bir grafik:
```python
class Graph:
    def __init__(self):
        self.graph = {}

    def add_edge(self, node, neighbor):
        if node not in self.graph:
            self.graph[node] = [neighbor]
        else:
            self.graph[node].append(neighbor)

# Örnek kullanım
graph = Graph()
graph.add_edge(1, 2)
graph.add_edge(1, 3)
graph.add_edge(2, 3)
```

Bu veri yapıları, farklı türdeki verileri organize etmek ve işlemek için kullanılır. Her biri, belirli bir amaç için optimize edilmiş operasyonları sunar ve farklı problem alanlarına uygun olarak tercih edilebilir. Veri yapılarının anlaşılması, verileri düzenleme ve işleme yeteneklerini geliştirmek için önemlidir.