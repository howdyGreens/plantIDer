from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    # Simulate plant identification
    plant = 'Aloe Vera'  # This should be replaced with actual model inference
    return jsonify({'plant': plant})

if __name__ == '__main__':
    app.run(debug=True)