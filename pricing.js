let productType = prompt("Choisis un type de produit : standard / premium / vip");
let price;
if (productType === "standard") {
    price = 50;
} else if (productType === "premium") {
    price = 100;
} else if (productType === "vip") {
    price = 200;
} else { price = 0;
    console.log("Type de produit invalide ! Veuillez saisir standard, premium ou vip.");
} if (price > 0) {
    console.log("Le prix du produit est : " + price + " $");
}