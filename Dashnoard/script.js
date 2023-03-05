// Get the upload button and document list
const uploadBtn = document.querySelector('.upload-btn');
const documentList = document.querySelector('.document-list');

// Add event listener to the upload button
uploadBtn.addEventListener('click', () => {
  // Open a file dialog to select a file
  const input = document.createElement('input');
  input.type = 'file';
  input.addEventListener('change', () => {
    // Create a new list item for the uploaded file
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = input.files[0].name;
    li.appendChild(link);
    documentList.appendChild(li);
  });
  input.click();
});