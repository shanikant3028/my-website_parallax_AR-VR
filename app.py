from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_data():
    return jsonify({
        "message": "Hello from Flask",
        "students": ["Shani", "Rahul", "Amit"]
    })

if __name__ == '__main__':
    app.run(debug=True)