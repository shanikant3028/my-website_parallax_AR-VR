from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    df = pd.read_csv("attendance-data.csv")
    table = df.to_html(index=False)
    return render_template("table.html", table=table)

if __name__ == "__main__":
    app.run(debug=True)