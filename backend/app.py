from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

balance = 1000.0

@app.route('/balance', methods=['GET'])
def get_balance():
    return jsonify({'balance': balance})

@app.route('/deposit', methods=['POST'])
def deposit_amount():
    global balance
    amount = request.json.get('amount', 0)
    balance += amount
    return jsonify({'message': 'Amount deposited successfully', 'new_balance': balance})

@app.route('/withdraw', methods=['POST'])
def withdraw_amount():
    global balance
    amount = request.json.get('amount', 0)
    if amount > balance:
        return jsonify({'message': 'Insufficient balance', 'new_balance': balance})
    balance -= amount
    return jsonify({'message': 'Amount withdrawn successfully', 'new_balance': balance})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

