document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const imageInput = document.getElementById('imageInput');
    if (imageInput.files.length === 0) {
        alert('Please select an image file.');
        return;
    }
    const formData = new FormData();
    formData.append('image', imageInput.files[0]);

    const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('result').innerText = `Plant: ${result.plant}`;
});

const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

imageInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
    }
});