// Constructor Function:
function Product(productName, image, price, featured, description) {
    this.productName = productName;
    this.image = image;
    this.price = price;
    this.featured = featured;
    this.description = description;

    this.displayProductListing = function () {
        return `
            <div class="product-box">
                <img src="${this.image}" alt="${this.productName}">
                <h1>${this.productName}</h1>
                <p class="price">$${this.price}</p>
                <p><button>Add to Cart</button></p>
            </div>
        `;
    }
}

// Declare an empty array named allProducts
var allProducts = [
    new Product("White Bikini", "images/bikini_white.jpg", 72.50, true, "White Bikini"),
    new Product("Black Bikini", "images/bikini_black.jpg", 50.00, false, "Black Bikini"),
    new Product("Palm-Tree One Piece", "images/palm-one-piece.jpg", 92.50, false, "Palm-Tree One Piece"),
    new Product("Checked Bikini", "images/bikini_black&white.jpg", 62.50, false, "Checked Bikini"),
    new Product("Orange Bikini", "images/bikini_orange.jpg", 85.00, true, "Orange Bikini"),
    new Product("White Bikini", "images/bikini_white.jpg", 72.50, true, "White Bikini"),
    new Product("Palm-Tree Bikini", "images/bikini_palm_tree.jpg", 65.50, true, "Palm-Tree Bikini"),
    new Product("Black Bikini", "images/bikini_black.jpg", 50.00, false, "Black Bikini"),
    new Product("Palm-Tree One Piece", "images/palm-one-piece.jpg", 92.50, false, "Palm-Tree One Piece"),
    new Product("Checked Bikini", "images/bikini_black&white.jpg", 62.50, false, "Checked Bikini"),
    new Product("Black Bikini", "images/bikini_black.jpg", 50.00, false, "Black Bikini")
];

function isFeaturedProduct(prod) {
    return prod.featured;
}

function getFeaturedProducts() {
    return allProducts.filter(isFeaturedProduct);
}

function displayProducts(featured) {
    let productsToDisplay = allProducts;

    if (featured) {
        productsToDisplay = getFeaturedProducts();
    }

    let htmlToReturn = "";

    for (const prod of productsToDisplay) {
        htmlToReturn += '<div class="flex-col">';
        htmlToReturn += prod.displayProductListing();
        htmlToReturn += '</div>';
    }

    return htmlToReturn;
}

$(document).ready(function () {
    var featuredProductsElement = $("#featuredProducts");
    if (featuredProductsElement.length > 0) {
        featuredProductsElement.html(displayProducts(true));
    }

    var allProductsElement = $("#allProducts");
    if (allProductsElement.length > 0) {
        allProductsElement.html(displayProducts(false));
    }
});

// Contact Us Form

// Validate Email:
let regexSimpleEmail = /@/;

$("#submitBtn").on("click", function () {
    let email_val = $("input").val();
    if (validateEmail(email_val, regexSimpleEmail)) {
        $("#result").addClass("isemail").show().html(`Your email ${email_val} is valid!`);
    } else {
        $("#result").removeClass("isemail").show().html(`Sorry, Your email ${email_val} is invalid!`);
    }
});

function validateEmail(email_val, emailRegex) {
    return emailRegex.test(email_val);
}

$("#clear").on("click", function () {
    $("#result").hide().html('');
    $("#inputemail").val("");
});

// Enable / Disable Submit Button:
function disableSubmit() {
    document.getElementById("submit").disabled = true;
}

function activateButton(element) {
    if (element.checked) {
        document.getElementById("submit").disabled = false;
    } else {
        document.getElementById("submit").disabled = true;
    }
}

