---
layout: post
number: 1
title: Değişkenler ve Veri Tipleri
author: berkantkz
date: 2023-11-20 11:03:00
category: [kodlama, javascript]
type: js
tags: [javascript]
---

JavaScript'te değişkenler ve veri tipleri, temel yapı taşlarından biridir. Değişkenler, bilgileri saklamak ve daha sonra kullanmak için kullanılan "kutular" gibidir. Veri tipleri ise değişkenlerin içinde saklanabilen farklı türdeki veri kategorileridir. JavaScript'te değişkenler tanımlanırken belirli kurallara ve veri tiplerine dikkat etmek önemlidir.

#### Değişkenlerin Tanımlanması:
JavaScript'te değişken tanımlamak için `var`, `let`, veya `const` anahtar kelimeleri kullanılır. Örneğin:

```javascript
// var ile değişken tanımlama (eski yöntem)
var sayi = 10;

// let ile değişken tanımlama (blok kapsamı)
let isim = "Ahmet";

// const ile sabit tanımlama (değişken değeri sonradan değiştirilemez)
const PI_SAYISI = 3.14;
```

#### Veri Tipleri:
JavaScript'te yaygın olarak kullanılan veri tipleri şunlardır:
- **String:** Metinleri temsil eder. Örneğin: `"Merhaba"`, `'Dünya'`.
- **Number:** Sayıları temsil eder. Örneğin: `10`, `3.14`.
- **Boolean:** Mantıksal değerleri temsil eder. `true` veya `false`.
- **Array:** Bir dizi veriyi tutar. Örneğin: `[1, 2, 3, 4]`.
- **Object:** Karmaşık veri yapılarını temsil eder. Örneğin: `{ ad: 'Ali', yas: 25 }`.

```javascript
let isim = "Ayşe"; // String
let yas = 30; // Number
let dogrulama = true; // Boolean
let renkler = ['kırmızı', 'yeşil', 'mavi']; // Array
let kullanici = { ad: 'Ali', yas: 25 }; // Object
```

Değişkenler ve veri tipleri, JavaScript programlamasında bilgi saklamak, işlemek ve sonuçları elde etmek için önemlidir. Doğru veri tipi seçimi ve değişkenlerin düzgün kullanımı, kodunuzun okunabilirliğini ve işlevselliğini artırır. JavaScript'in esnek doğası sayesinde, farklı veri tipleriyle çalışabilir ve bunları kullanarak çeşitli programlama görevlerini gerçekleştirebilirsiniz.