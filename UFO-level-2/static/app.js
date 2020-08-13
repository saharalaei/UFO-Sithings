//Assign data to a variable tableData

tableData = data;
var table = d3.select("tbody")

//Display all data
tableData.forEach((ufo) => {
    var row = table.append("tr");
    Object.values(ufo).forEach(value => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#button");

// Select the form
var form_date = d3.select("#form-date");
var form_country = d3.select("#form-country");
var form_shape = d3.select("#form-shape");

// Create event handlers 
button.on("click", runEnter);
form_date.on("submit",runEnter);
form_country.on("submit",runEnter);  
form_shape.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Clear table:
    table.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Get the value property of the input elements
    var filter = {};
    filter.date = d3.select("#UFO-form-date").property("value");
    filter.country = d3.select("#UFO-form-country").property("value");
    filter.shape = d3.select("#UFO-form-shape").property("value");
    console.log(filter);

    // Filter based on the user filter:

    function date_filter(ufo){
      if (filter.date!=""){
        return ufo.datetime === filter.date;
      }else{
        return true;
      }
    }

    function country_filter(ufo){
      if (filter.country!=""){
        return ufo.country === filter.country;
      }else{
        return true;
      }
    }

    function shape_filter(ufo){
      if (filter.shape!=""){
        return ufo.shape === filter.shape;
      }else{
        return true;
      }
    }

   filtered_data = tableData.filter(date_filter);
   filtered_data = filtered_data.filter(country_filter);
   filtered_data = filtered_data.filter(shape_filter);
   
    
    filtered_data.forEach((ufo) => {
        var row = table.append("tr");
        Object.values(ufo).forEach(value => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
   
  };
  

