document.addEventListener("DOMContentLoaded", () => {
    const imageSelect = document.getElementById('colourSelect');
    const nameField = document.getElementById('nameField');
    const catImage = document.getElementById('cat_img');
  
    // Function to check the name field for a specific name
    const checkNameField = () => {
      const nameValue = nameField.value.toLowerCase().trim();
      
      if (nameValue === "zsolt") {
        catImage.src = './Pink_cat.svg'; // Image specifically for 'Zsolt'
        catImage.alt = 'Pink cat';
        return true; // Return true to indicate that a specific image was set
      }
      return false; // Return false to proceed with the dropdown selection
    };
  
    // Listen for changes in the name field
    nameField.addEventListener('input', function() {
      // Check the name field and display the image if matched
      if (checkNameField()) {
        // Reset dropdown selection if name matches "Zsolt"
        imageSelect.value = ""; // Optionally clear the dropdown selection
      }
    });
  
    // Listen for changes in the form (dropdown selection)
    imageSelect.addEventListener('change', function() {
      // If the name field doesn't match "Zsolt", proceed with dropdown logic
      if (!checkNameField()) {
        const selectedValue = this.value;
  
        // Change image source based on the selection
        switch(selectedValue) {
          case 'black':
            catImage.src = './Black_cat.svg'; // URL for black cat image
            catImage.alt = 'Black cat';
            break;
          case 'grey':
            catImage.src = './Grey_cat.svg'; // URL for grey cat image
            catImage.alt = 'Grey cat';
            break;
          case 'orange':
            catImage.src = './Orange_cat.svg'; // URL for orange cat image
            catImage.alt = 'Orange cat';
            break;
          case 'surprise':
            catImage.src = './Blue_cat.svg'; // URL for surprise blue cat image
            catImage.alt = 'Blue cat';
            break;
          default:
            catImage.src = '';
            catImage.alt = 'No cat colour selected';
        }
      }
    });
  });