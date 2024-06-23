document.getElementById('uploadForm').addEventListener('submit', async function(event) {
 event.preventDefault();
 const imageInput = document.getElementById('imageInput');
 if (imageInput.files.length === 0) {
     alert('Please select an image file.');
     return;
 }
 const formData = new FormData();
 formData.append('image', imageInput.files[0]);

 const response = await fetch('http://localhost:5000/upload', {
     method: 'POST',
     body: formData
 });

 const result = await response.json();
 document.getElementById('result').innerText = \`Plant: \${result.plant}\`;
});
