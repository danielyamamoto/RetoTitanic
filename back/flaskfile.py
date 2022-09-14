import numpy as np
import pickle
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
model = pickle.load(open('perceptron.pkl', 'rb'))


@app.route('/')
def home():
    return "HOME"

@app.route('/', methods=['POST'])
def predict():

    resp = request.get_json()
    val1 = int(resp['sex'])
    val2 = int(resp['age'])
    val3 = int(resp['pclass'])
    val4 = int(resp['sibsp'])
    val5 = int(resp['parch'])
    val6 = int(resp['cabin'])

    features = [[val1, val2, val3, val4, val5, val6]]
    final_features = np.array(features).reshape(1, -1)
    print(final_features)
    prediction = model.predict(final_features)
    print(prediction[0])
    return "{}".format(prediction)
    '''
    int_features = [float(x) for x in request.form.values()]
    final_features = np.array(int_features).reshape(1,-1)
    prediction = model.predict(final_features)
    return render_template('index.html', prediction_text='Predicted Category {}'.format(prediction))
    '''

if __name__ == "__main__":
    app.run('192.168.1.69')