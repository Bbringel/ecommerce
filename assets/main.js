/*
 * Student Name: Bianca Rocha Rodrigues Bringel
 * Student ID: 041086978
 * Course: CST8117 - Cross-Platform Web Design
 * Semester: Fall 2022
 * Assignment: Online Store – Part 4
 * Date Submitted: December 11, 2022
 */


//Constructor Function:

function Product (productName, image, price, featured, description) {

  this.productName = productName;
  this.image = image;
  this.price = price;
  this.featured = featured;
  this.description = description;

    this.displayProductListing = function () {

      let htmlToReturn = '<div class="product-box">';

      htmlToReturn += '<img src="images/' + this.image + '.jpg" alt="' + this.productName + '">';

      /*
        Source: https://www.w3schools.com/howto/howto_css_product_card.asp
        Author: W3 Schools
        Date Retrieved: 2022-11-23
      */

      <div class="product-box">
        <img src="images/bikini_white.jpg" alt="White Bikini">
        <h1>White Bikini</h1>
        <p class="price">$72.50</p>
        <p><button>Add to Cart</button></p>
      </div>  

      htmlToReturn += '</div>;'

      return htmlToReturn;
    }
  
}
// declare an empty array named allProducts
var allProducts = [];

allProducts.push(new Product("White Bikini", "images/bikini_white.jpg", 72.50, true, "White Bikini"));
allProducts.push(new Product("Black Bikini", "images/bikini_black.jpg", 50.00, false, "Black Bikini"));
allProducts.push(new Product("Palm-Tree One Piece", "images/palm-one-piece.jpg", 92.50, false, "Palm-Tree One Piece"));
allProducts.push(new Product("Checked Bikini", "images/bikini_black&white.jpg", 62.50, false, "Checked Bikini"));
allProducts.push(new Product("product-box", "images/bikini_orange.jpg", 85.00, true, "Orange Bikini"));
allProducts.push(new Product("product-box", "images/bikini_white.jpg", 72.50, true, "White Bikini"));
allProducts.push(new Product("product-box", "images/bikini_palm_tree.jpg", 65.50, true, "Palm-Tree Bikini")); 
allProducts.push(new Product("product-box", "images/bikini_black.jpg", 50.00, false, "Black Bikini"));
allProducts.push(new Product("product-box", "images/palm-one-piece.jpg", 92.50, false, "Palm-Tree One Piece"));
allProducts.push(new Product("product-box", "images/bikini_black&white.jpg", 62.50, false, "Checked Bikini"));
allProducts.push(new Product("product-box", "images/bikini_black.jpg", 50.00, false, "Black Bikini"));



function isFeaturedProduct (true) {
    return prod["featured"];
}

function getFeaturedProducts () {
    return allProducts.filter ( isFeaturedProduct );
}

function displayProducts(featured) {
    let productsToDisplay = allProducts;

    if (featured) {
      productsToDisplay = getFeaturedProducts();
    }

    let htmlToReturn = "";

    for (const prod of productsToDisplay) {
      htmlToReturn += '<div class="flex-col"'>;
      htmlToReturn += prod.displayProductListing();
      htmlToReturn += '</div>';

      return htmlToReturn;
    }

    var featuredProductsElement = $("#featuredProducts");

    if (featuredProductsElement) {
      featuredProductsElement.innerHTML = displayProducts(true);
    }

  }

  var allProductsElement = $("#allProducts");

  if (allProductsElement) {
    allProductsElement.innerHTML = displayProducts(false);

    allProductsElement.appendChild(displayProducts(false));

  }

//Contact Us Form

// Validate Email:

/*
  Source: https://www.abstractapi.com/guides/validate-email-address-jquery
  Author: Ankit Goyal
  Date retrieved: December 10, 2022
*/

let email_val = "";
let regexSimpleEmail = /@/;

$("#submitBtn").on("click",function(){
  email_val = $("input").val();
  if (validateEmail(email_val,regexSimpleEmail)){
      $("#result").addClass("isemail").show().html(`Your email ${email_val} is valid!`);
  }
  else{
      $("#result").removeClass("isemail").show().html(`Sorry, Your email ${email_val} is invalid!`);
  }
});

function validateEmail(email_val,emailRegex){
  if (emailRegex.test(email_val)){
      return true;
  }
  else {
      return false;
  }
}

$("#clear").on("click",function(){
  $("#result").hide().html('')
  $("#inputemail").val("");
});


// Enable / Disable Submit Button:
  function disableSubmit() {
   document.getElementById("submit").disabled = true;
  }
 
   function activateButton(element) {
 
       if(element.checked) {
         document.getElementById("submit").disabled = false;
        }
        else  {
         document.getElementById("submit").disabled = true;
       }
 
   }




  

