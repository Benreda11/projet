from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/autre_page.html')
def autre_page():
    return send_from_directory('.', 'autre_page.html')

@app.route('/information.html')
def information():
    return send_from_directory('.', 'information.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

