async function getWebsite() {
  let url = document.getElementById("sitelink").value;// DOM FOR ACCESING USER ENTERED URL
  let urlFinal = "https://cors-anywhere.herokuapp.com/" + url; //SOLUTION FOR CORS ERROR
  fetch(urlFinal) // FETCH FUNCTION FOR GRABBING THE CONTENT
    .then((response) => response.text()) // CONVERTING IT INTO TEXT
    .then((response) => {
      var mainContainer = document.getElementById("myData");// WHERE TO DISPLAY
      var div = document.createElement("div");
      div.innerHTML = response;//DISPLAY CONTENT HERE
      mainContainer.appendChild(div);
      console.log("ITS WORKING");
    })
    .catch(function () {
      // This is where you run code if the server returns any errors
      console.log("NOT WORKING");
    });
}

getWebsite();
