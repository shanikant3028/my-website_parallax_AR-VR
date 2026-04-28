from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/csv', methods=['POST'])
def read_csv():
    data = request.get_json()
    filename = data['filename']

    df = pd.read_csv(filename)
    df = df.fillna("")   

    return jsonify(df.to_dict(orient="records"))

if __name__ == '__main__':
    app.run(debug=True)