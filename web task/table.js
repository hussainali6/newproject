// Define sample data for the table
const tableData = [
  { name: "John Doe", age: 30, country: "USA", image: "https://via.placeholder.com/32x32" },
  { name: "Alice Smith", age: 25, country: "Canada", image: "https://via.placeholder.com/32x32" },
  { name: "Bob Johnson", age: 28, country: "UK", image: "https://via.placeholder.com/32x32" },
  { name: "Eva Williams", age: 32, country: "Australia", image: "https://via.placeholder.com/32x32" },
  { name: "Michael Brown", age: 27, country: "Germany", image: "https://via.placeholder.com/32x32" },
];

document.addEventListener("DOMContentLoaded", function () {
  // Get the table body element
  const tableBody = document.querySelector("#data-table tbody");

  // Populate the table with data
  tableData.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.country}</td>
      <td><img class="table-image" src="${item.image}" alt="Image" data-index="${index}"></td>
    `;
    tableBody.appendChild(row);
  });

  // jQuery event handler for image click
  $(".table-image").on("click", function () {
    const index = $(this).data("index");
    const imageUrl = tableData[index].image;
    window.open(imageUrl);
  });

  // jQuery event handlers for odd rows hover effect
  $("#data-table tbody tr:odd").hover(
    function () {
      $(this).css("color", "blue");
    },
    function () {
      $(this).css("color", "black");
    }
  );
});
