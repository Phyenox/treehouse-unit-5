// lightbox

lightbox.option({
    showImageNumberLabel: false,
    wrapAround: true
})

// search field

let search = $("#search");    // target input search field
let imgs = $("a");            // target links 

// keyup event created within the search field
// search input case insensitive , converted to lower case
// links(thumbnail images) are visable
// if the value typed into the search field is strictly not equal to the value within the data-title the images are hidden

search.keyup((event) => {
  let value = search.val().toLowerCase();
  imgs.show();
  if (value !== "") {
    imgs.not(`[data-title*="${value}"]`).hide();
  } 
});