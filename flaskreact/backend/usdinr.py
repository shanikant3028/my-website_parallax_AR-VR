from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "API Running"

@app.route('/convert', methods=['POST'])
def convert():
    data = request.get_json()
    dollars = float(data['dollars'])
    rate = float(data['rate'])

    result = dollars * rate

    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)