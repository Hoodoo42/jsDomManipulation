// creating a variable to grab the h1 tag by its id
let h1 = document.getElementById(`aTagInTheHeader`);
// using innerHTML to add new content within the tag
h1[`innerHTML`] += ` It is the first content tag in the body.`;


// creating a variable to help select all h5s by their tag 
let change = document.querySelectorAll(`h5`);
// the for loop will go through each element that is an h5 and change the all into spans through the outerHTML
for(i=0; i<change.length; i++){
change[i][`outerHTML`] = `<span>We are now spans</span>`;
}

// creating a variable to use querySelector to grab the h2 
let h2 = document.querySelector(`h2`);
// using outerHTML to insert a different tag above the selected h2
h2[`outerHTML`] = `<h3>What should we put in the main section?</h3>` + h2[`outerHTML`];

// creating a variable to use with the function that will grab all elements sharing the stated class
let mainP = document.getElementsByClassName(`main_p`);
// the for loop will run through each element indivually and add the styling chosen
for(i=0; i<mainP.length; i++){
mainP[i][`style`][`color`] = `yellow`;
}

// using a variable to grab footer with queySelector
let footer = document.querySelector(`footer`);
// using innerHTML to nest a link inside the footer tog.
footer[`innerHTML`]  += `<a href="#">Link</a>` 