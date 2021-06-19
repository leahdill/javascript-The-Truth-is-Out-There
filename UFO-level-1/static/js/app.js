// from data.js
var tableData = data;

// YOUR CODE HERE!
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputDateField = d3.select("#datetime");
var inputCityField = d3.select("#city");
var cols = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        cols.forEach(col => row.append("td").text(ufoSightings[col])
        )
    });
}

addData(tableData);

button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputDateField.property("value").trim();
    var filterDates = tableData.filter(tableData => tableData.datetime === inputDate);
    $tbody.html("");
    let response = {
        filterDates
    }
    if(response.filterDates.length !== 0) {
        addData(filterDates);
    }
        else {
            $tbody.append("tr").append("td").text("No Supernatural Events Here...Yet");
        }
})