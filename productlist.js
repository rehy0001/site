fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lave en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }
  //appende
  document.querySelector("main").appendChild(copy);
}
/*
<article class="smallProduct">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/1573.webp" alt="produkt 8">
                <h2>produkt 8</h2>
                <p class="subtle">Tights </p>
                <p class="price"><span>Prev.</span>DKK 500,-</p>
                <div class="discounted">
                    <p>Now DKK 250,-</p>
                    <p>-50%</p>
                </div>
                <a href="product.html">Read More</a>
            </article>
*/

/* 
 {
  "id": 1165,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2013,
  "usagetype": "Sports",
  "productdisplayname": "Mean Team India Cricket Jersey",
  "price": 2495,
  "discount": 45,
  "brandname": "Nike",
  "soldout": 0
}
*/
