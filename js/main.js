async function getWebsite() {
  let url = document.getElementById("sitelink").value; // DOM FOR ACCESING USER ENTERED URL
  let urlFinal = "https://cors-anywhere.herokuapp.com/" + url; //SOLUTION FOR CORS ERROR
  fetch(urlFinal) // FETCH FUNCTION FOR GRABBING THE CONTENT
    .then(function (response) {
      convertedText = response.text();
      parser = new DOMParser();
      getNode = parser.parseFromString(convertedText, "text/xml");
      return getNode; // CONVERTING IT INTO TEXT
    })
    .then(function (getNode) {
      var mainContainer = document.getElementById("myData"); // WHERE TO DISPLAY
      var div = document.createElement("div");

      div.innerHTML = "Grabbed The HTML code Check The Console"; //DISPLAY CONTENT HERE
      mainContainer.appendChild(div);
      console.log("ITS WORKING");
      console.log(getNode);
    })
    .catch(function () {
      // This is where you run code if the server returns any errors
      console.log("NOT WORKING");
    });
}

async function getJson() {
  // Test with an element.

  let url = document.getElementById("sitelink").value; // DOM FOR ACCESING USER ENTERED URL
  let urlFinal = "https://cors-anywhere.herokuapp.com/" + url; //SOLUTION FOR CORS ERROR
  fetch(urlFinal) // FETCH FUNCTION FOR GRABBING THE CONTENT
    .then(function (response) {
      var initElement = document.getElementsByTagName("html")[0];
      var json = mapDOM(initElement, true);
      console.log(json);
    })
    .then(function (myJSON) {
      var mainContainer = document.getElementById("myData"); // WHERE TO DISPLAY
      var div = document.createElement("div");

      div.innerHTML = "Grabbed The JSON code Check The Console"; //DISPLAY CONTENT HERE
      mainContainer.appendChild(div);
      console.log("ITS WORKING");
      console.log(myJSON);
    })
    .catch(function () {
      // This is where you run code if the server returns any errors
      console.log("NOT WORKING");
    });
}
getWebsite();
getJson();
