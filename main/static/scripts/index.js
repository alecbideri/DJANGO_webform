let buttonElement1 = document.getElementById("nav-item-tab-1");
let buttonElement2 = document.getElementById("nav-item-tab-2");

buttonElement1.addEventListener("click", () => {
  buttonElement1.classList.add("active");
  buttonElement2.classList.remove("active");
});

buttonElement2.addEventListener("click", () => {
  buttonElement2.classList.add("active");
  buttonElement1.classList.remove("active");
});

let mainContianer = document.getElementById("main-container");
let mainContianerForm = document.getElementById("main-container-form");

buttonElement1.addEventListener("click", () => {
  mainContianer.classList.add("main-active");
  mainContianerForm.classList.remove("main-active");
});

buttonElement2.addEventListener("click", () => {
  mainContianerForm.classList.add("main-active");
  mainContianer.classList.remove("main-active");
});

// Function to populate days in the dropdown
function populateDays() {
    const daySelect = document.getElementById('daySelect');
    daySelect.innerHTML = '<option value="">Day</option>';
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

// Function to populate years in the dropdown (adjust the range as per your requirement)
function populateYears() {
    const yearSelect = document.getElementById('yearSelect');
    yearSelect.innerHTML = '<option value="">Year</option>';
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

// Call the functions to populate days and years when the page loads
document.addEventListener('DOMContentLoaded', function() {
    populateDays();
    populateYears();
});


fetch("/static/scripts/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Reference to the dropdown
    const dropdown = document.getElementById("district-dropdown");
    const selectedArray = data.districts; // Change this to the array you want to use
    console.log(selectedArray)
    // Loop through the selected array and create options
    selectedArray.forEach((item) => {
      const option = document.createElement("option");
      option.value = item;
      option.textContent = item;
      dropdown.appendChild(option);
    });
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });
