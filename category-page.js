const categoryPages = {
  men: { nameAr: "رجالي", nameEn: "Men", color: "category-men" },
  women: { nameAr: "حريمي", nameEn: "Women", color: "category-women" },
  kids: { nameAr: "أطفال", nameEn: "Kids", color: "category-kids" },
  bags: { nameAr: "شنط", nameEn: "Bags", color: "category-bags" },
  shoes: { nameAr: "أحذية", nameEn: "Shoes", color: "category-shoes" },
};
const productTags = {
  sale20: { ar: "خصم ٢٠٪", en: "20% off" },
  sale15: { ar: "خصم ١٥٪", en: "15% off" },
  sale16: { ar: "خصم ١٦٪", en: "16% off" },
  sale18: { ar: "خصم ١٨٪", en: "18% off" },
  bundleOffer: { ar: "عرض وهدية", en: "Bundle + gift" },
  exclusivePrice: { ar: "سعر حصري", en: "Exclusive price" },
  new: { ar: "وصل حديثًا", en: "New arrival" },
  featuredTag: { ar: "اختيار مميز", en: "Featured pick" },
  bestSeller: { ar: "الأكثر طلبًا", en: "Best seller" },
  todayPick: { ar: "اختيار اليوم", en: "Today's pick" },
};

const category = categoryPages[document.body.dataset.category];
const productGrid = document.querySelector("#category-product-grid");
const cartCount = document.querySelector("#category-cart-count");
const status = document.querySelector("#category-status");
const languageButton = document.querySelector("#category-language-toggle");
let language = "ar";
try {
  language = localStorage.getItem("setaylak-language") === "en" ? "en" : "ar";
} catch (error) {
  console.error("تعذر قراءة اللغة المحفوظة:", error);
}
let numberFormatter = new Intl.NumberFormat(language === "ar" ? "ar-EG" : "en-EG");
let currencyFormatter = new Intl.NumberFormat(language === "ar" ? "ar-EG" : "en-EG", {
  style: "currency",
  currency: "EGP",
  maximumFractionDigits: 0,
});

function getCategoryProductName(product) {
  return language === "ar" ? product.nameAr : product.nameEn;
}

function getCategoryPrice(price) {
  return language === "ar"
    ? `${numberFormatter.format(price)} جنيه`
    : currencyFormatter.format(price);
}

function renderCategoryProducts() {
  const categoryProducts = window.STORE_PRODUCTS.filter(
    (product) => product.category === document.body.dataset.category,
  );
  productGrid.replaceChildren();

  categoryProducts.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";
    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image;
    image.alt = getCategoryProductName(product);
    image.width = 640;
    image.height = 800;
    image.loading = "lazy";
    image.decoding = "async";
    image.dataset.categoryProductImage = String(product.id);
    imageWrap.append(image);

    const tag = document.createElement("span");
    tag.className = "product-tag";
    tag.textContent = productTags[product.tag]?.[language] || product.tag;
    imageWrap.append(tag);

    const details = document.createElement("div");
    details.className = "product-details";
    const categoryName = document.createElement("p");
    categoryName.className = "product-category";
    categoryName.textContent = language === "ar" ? category.nameAr : category.nameEn;

    const title = document.createElement("h2");
    title.className = "product-title";
    title.textContent = getCategoryProductName(product);

    const priceRow = document.createElement("div");
    priceRow.className = "product-price-row";
    const price = document.createElement("span");
    price.className = "product-price";
    price.dir = "ltr";
    price.textContent = getCategoryPrice(product.price);
    priceRow.append(price);
    if (product.oldPrice) {
      const oldPrice = document.createElement("span");
      oldPrice.className = "old-price";
      oldPrice.dir = "ltr";
      oldPrice.textContent = getCategoryPrice(product.oldPrice);
      priceRow.append(oldPrice);
    }

    const description = product[`description${language === "ar" ? "Ar" : "En"}`];
    if (description) {
      const descriptionElement = document.createElement("p");
      descriptionElement.className = "product-description category-product-description";
      descriptionElement.textContent = description;
      details.append(categoryName, title, descriptionElement);
    } else {
      details.append(categoryName, title);
    }

    if (product.sizes) {
      const sizes = document.createElement("p");
      sizes.className = "product-info-value";
      sizes.textContent = `${language === "ar" ? "المقاسات" : "Sizes"}: ${product.sizes[language]}`;
      details.append(sizes);
    }

    if (product.images?.length > 1) {
      const variants = document.createElement("div");
      variants.className = "color-swatches";
      variants.setAttribute("role", "group");
      variants.setAttribute(
        "aria-label",
        language === "ar" ? "الألوان المتاحة" : "Available colors",
      );
      product.images.forEach((variant, index) => {
        const swatch = document.createElement("button");
        swatch.className = "color-swatch";
        swatch.type = "button";
        swatch.style.setProperty("--swatch-color", variant.color);
        swatch.setAttribute(
          "aria-label",
          `${language === "ar" ? "اختيار اللون" : "Select color"} ${
            language === "ar" ? variant.colorAr : variant.colorEn
          }`,
        );
        swatch.setAttribute("aria-pressed", String(index === 0));
        swatch.addEventListener("click", () => {
          image.src = variant.src;
          image.alt = `${getCategoryProductName(product)} - ${
            language === "ar" ? variant.colorAr : variant.colorEn
          }`;
          variants.querySelectorAll(".color-swatch").forEach((button) => {
            button.setAttribute("aria-pressed", String(button === swatch));
          });
        });
        variants.append(swatch);
      });
      details.append(variants);
    }

    const actions = document.createElement("div");
    actions.className = "product-actions";
    const addButton = document.createElement("button");
    addButton.className = "add-to-cart";
    addButton.type = "button";
    addButton.setAttribute("aria-label", language === "ar" ? `أضف ${getCategoryProductName(product)} للسلة` : `Add ${getCategoryProductName(product)} to cart`);
    addButton.textContent = language === "ar" ? "＋ أضف للسلة" : "＋ Add to cart";
    addButton.addEventListener("click", () => addProductToCart(product));
    actions.append(addButton);

    details.append(priceRow, actions);
    card.append(imageWrap, details);
    productGrid.append(card);
  });

  document.querySelectorAll("[data-category-link]").forEach((link) => {
    const page = categoryPages[link.dataset.categoryLink];
    link.textContent = language === "ar" ? page.nameAr : page.nameEn;
  });
  const title = language === "ar" ? category.nameAr : category.nameEn;
  document.title = `${title} | ${language === "ar" ? "ستايلك" : "Setaylak"}`;
  document.querySelector("#category-title").textContent =
    language === "ar" ? `تسوّق قسم ${category.nameAr}` : `Shop ${category.nameEn}`;
  document.querySelector("#category-description").textContent =
    language === "ar"
      ? `تصفّح منتجات قسم ${category.nameAr} وأضف اختياراتك إلى السلة.`
      : `Browse ${category.nameEn.toLowerCase()} products and add your picks to the cart.`;
  document.querySelector("#category-home-link").textContent =
    language === "ar" ? "العودة للمتجر" : "Back to store";
  document.querySelector("#category-tagline").textContent =
    language === "ar" ? "ستايلك لكل يوم" : "Setaylak for every day";
  document.querySelector("#category-home-nav").textContent =
    language === "ar" ? "الرئيسية" : "Home";
  document.querySelector("#category-nav").setAttribute(
    "aria-label",
    language === "ar" ? "أقسام المتجر" : "Shop categories",
  );
  document.querySelector("#category-cart-label").textContent =
    language === "ar" ? "السلة" : "Cart";
  document.querySelector("#category-footer-link").textContent =
    language === "ar" ? "عن ستايلك" : "About Setaylak";
  document.querySelector("#category-products-title").textContent =
    language === "ar" ? "منتجات القسم" : "Category products";
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  languageButton.textContent = language === "ar" ? "EN" : "عربي";
  languageButton.setAttribute(
    "aria-label",
    language === "ar" ? "التبديل إلى الإنجليزية" : "Switch language to Arabic",
  );
  document.querySelectorAll(".brand-mark").forEach((mark) => {
    mark.textContent = language === "ar" ? "س" : "S";
  });
  const cartLink = document.querySelector(".category-cart-link");
  cartLink.setAttribute(
    "aria-label",
    language === "ar" ? "افتح سلة المشتريات" : "Open shopping cart",
  );
}

function renderCategoryCartCount() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("setaylak-cart") || "[]");
    const count = Array.isArray(savedCart)
      ? savedCart.reduce(
          (total, item) =>
            total +
            (Number.isInteger(item?.quantity) && item.quantity > 0
              ? item.quantity
              : 0),
          0,
        )
      : 0;
    cartCount.textContent = numberFormatter.format(count);
  } catch (error) {
    console.error("تعذر قراءة سلة المشتريات المحفوظة:", error);
    status.textContent =
      language === "ar"
        ? "تعذر قراءة سلة المشتريات المحفوظة."
        : "Couldn't read the saved cart.";
  }
}

function addProductToCart(product) {
  try {
    const savedCart = JSON.parse(localStorage.getItem("setaylak-cart") || "[]");
    const cart = Array.isArray(savedCart)
      ? savedCart
          .filter(
            (cartItem) =>
              cartItem &&
              Number.isInteger(cartItem.id) &&
              Number.isInteger(cartItem.quantity) &&
              cartItem.quantity > 0 &&
              window.STORE_PRODUCTS.some((item) => item.id === cartItem.id),
          )
          .map((cartItem) => ({
            ...cartItem,
            variant: Number.isInteger(cartItem.variant) ? cartItem.variant : 0,
          }))
      : [];
    const item = cart.find(
      (cartItem) => cartItem.id === product.id && cartItem.variant === 0,
    );
    if (item) item.quantity += 1;
    else cart.push({ id: product.id, quantity: 1, variant: 0 });

    localStorage.setItem("setaylak-cart", JSON.stringify(cart));
    status.textContent =
      language === "ar" ? "اتضاف المنتج إلى السلة." : "Product added to cart.";
    renderCategoryCartCount();
  } catch (error) {
    console.error("تعذر تحديث سلة المشتريات:", error);
    status.textContent =
      language === "ar"
        ? "تعذر حفظ المنتج في السلة على هذا الجهاز."
        : "Couldn't save the product to your cart on this device.";
  }
}

languageButton.addEventListener("click", () => {
  const nextLanguage = language === "ar" ? "en" : "ar";
  try {
    localStorage.setItem("setaylak-language", nextLanguage);
  } catch (error) {
    console.error("تعذر حفظ اختيار اللغة:", error);
    status.textContent =
      nextLanguage === "ar"
        ? "تعذر حفظ اختيار اللغة على هذا الجهاز."
        : "Couldn't save the language preference on this device.";
  }
  language = nextLanguage;
  numberFormatter = new Intl.NumberFormat(language === "ar" ? "ar-EG" : "en-EG");
  currencyFormatter = new Intl.NumberFormat(
    language === "ar" ? "ar-EG" : "en-EG",
    { style: "currency", currency: "EGP", maximumFractionDigits: 0 },
  );
  renderCategoryProducts();
  renderCategoryCartCount();
});

renderCategoryProducts();
renderCategoryCartCount();
