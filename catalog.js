// أضف المنتجات أو حدّث الأسعار والصور والوصف من هذا الملف.
// category وtag مفاتيح ترجمة موجودة في app.js؛ صور المنتجات المحلية تحفظ داخل assets/products.
window.STORE_PRODUCTS = [
  {
    id: 1,
    nameAr: "تيشيرت رجالي قطن بقصة مريحة",
    nameEn: "Men's relaxed-fit cotton T-shirt",
    category: "men",
    price: 520,
    oldPrice: 650,
    rating: "4.8",
    tag: "sale20",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    nameAr: "قميص كاجوال رجالي بأكمام طويلة",
    nameEn: "Men's casual long-sleeve shirt",
    category: "men",
    price: 890,
    rating: "4.7",
    tag: "featuredTag",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    nameAr: "فستان يومي بتصميم ناعم",
    nameEn: "Elegant everyday women's dress",
    category: "women",
    price: 1150,
    oldPrice: 1390,
    rating: "4.9",
    tag: "new",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    nameAr: "بلوزة حريمي بلون هادي",
    nameEn: "Women's blouse in a soft shade",
    category: "women",
    price: 640,
    rating: "4.6",
    tag: "bestSeller",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    nameAr: "طقم أطفال قطني للّعب",
    nameEn: "Cotton kids' playwear set",
    category: "kids",
    price: 480,
    oldPrice: 560,
    rating: "4.8",
    tag: "sale15",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    nameAr: "شنطة كتف عملية بتصميم أنيق",
    nameEn: "Everyday shoulder bag",
    category: "bags",
    price: 980,
    rating: "4.9",
    tag: "new",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    nameAr: "شنطة ظهر خفيفة للاستخدام اليومي",
    nameEn: "Lightweight everyday backpack",
    category: "bags",
    price: 1250,
    oldPrice: 1490,
    rating: "4.6",
    tag: "sale16",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    nameAr: "حذاء رياضي خفيف ومريح",
    nameEn: "Lightweight, comfortable sneakers",
    category: "shoes",
    price: 1490,
    rating: "4.8",
    tag: "bestSeller",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    nameAr: "حذاء كاجوال بتصميم بسيط",
    nameEn: "Minimal casual shoes",
    category: "shoes",
    price: 1320,
    oldPrice: 1550,
    rating: "4.7",
    tag: "sale15",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    nameAr: "تيشيرت حريمي أساسي بقماش ناعم",
    nameEn: "Women's soft cotton essential T-shirt",
    category: "women",
    price: 430,
    rating: "4.5",
    tag: "todayPick",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    nameAr: "بنطلون رجالي كاجوال بقصة مستقيمة",
    nameEn: "Men's straight-fit casual trousers",
    category: "men",
    price: 970,
    oldPrice: 1190,
    rating: "4.7",
    tag: "sale18",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 13,
    nameAr: "دريس شياكة بألوان تريند",
    nameEn: "Chic chiffon dress in trending colors",
    category: "women",
    price: 1100,
    tag: "new",
    descriptionAr: "خامة شيفون مبطن مستورد. متاح جميع المقاسات لحد وزن ١٢٠ كجم.",
    descriptionEn:
      "Imported lined chiffon. Available in all sizes, up to 120 kg.",
    image: "assets/products/dress-burgundy.png",
    images: [
      {
        src: "assets/products/dress-burgundy.png",
        colorAr: "نبيتي",
        colorEn: "Burgundy",
        color: "#681c2b",
      },
      {
        src: "assets/products/dress-brown.png",
        colorAr: "بني",
        colorEn: "Brown",
        color: "#503d36",
      },
      {
        src: "assets/products/dress-black.png",
        colorAr: "أسود",
        colorEn: "Black",
        color: "#161616",
      },
      {
        src: "assets/products/dress-green.png",
        colorAr: "أخضر",
        colorEn: "Green",
        color: "#075b4e",
      },
    ],
  },
  {
    id: 14,
    nameAr: "دريس الأميرات",
    nameEn: "Princess Dress",
    category: "women",
    price: 950,
    tag: "new",
    descriptionAr:
      "خامة روزالين مستورد بجودة مميزة، ومتاح جميع المقاسات. يأتي مع حزام من نفس الخامة.",
    descriptionEn:
      "Made from premium imported Rosalyn fabric. Available in all sizes and comes with a matching belt.",
    image: "assets/products/princess-dress-black.png",
    images: [
      {
        src: "assets/products/princess-dress-black.png",
        colorAr: "أسود",
        colorEn: "Black",
        color: "#171717",
      },
      {
        src: "assets/products/princess-dress-burgundy.png",
        colorAr: "نبيتي",
        colorEn: "Burgundy",
        color: "#691e2b",
      },
      {
        src: "assets/products/princess-dress-teal.png",
        colorAr: "بترولي",
        colorEn: "Teal",
        color: "#00565a",
      },
    ],
  },
  {
    id: 15,
    nameAr: "بيجامة بناتي صيفية فوشيا من Usine",
    nameEn: "Usine Girls' Fuchsia Summer Pajamas",
    category: "kids",
    price: 395,
    tag: "exclusivePrice",
    descriptionAr:
      "قطعة صيفية مميزة للخروجات والمصايف. الخامة سنجل ليكرا قطن، ومتاحة بالمقاسات ٢، ٤، ٦، ٨، ١٠، ١٢، ١٣. متاح المعاينة والدفع عند الاستلام.",
    descriptionEn:
      "A standout summer outfit for outings and holidays. Cotton Lycra single jersey, available in sizes 2, 4, 6, 8, 10, 12, and 13. Inspect before purchase; cash on delivery is available.",
    image: "assets/products/kids-pink-summer-pajamas.png",
    images: [
      {
        src: "assets/products/kids-pink-summer-pajamas.png",
        colorAr: "فوشيا",
        colorEn: "Fuchsia",
        color: "#e72783",
      },
    ],
  },
  {
    id: 16,
    nameAr: "عرض ٢ بيجامة بيتي + كاش طويل هدية",
    nameEn: "2 Home Pajamas + Long Robe Gift Bundle",
    category: "women",
    price: 675,
    tag: "bundleOffer",
    descriptionAr:
      "اختاري بيجامتين بيتي وخدي كاش طويل هدية. راحة وأناقة في إطلالة واحدة.",
    descriptionEn:
      "Choose two home pajama sets and get a long robe as a gift. Comfort and style in one look.",
    image: "assets/products/home-pajama-bundle.png",
  },
];
