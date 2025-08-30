# Flask 라는 웹 서버 도구를 가져옵니다.
from flask import Flask

# 우리만의 웹 서버를 만듭니다.
app = Flask(__name__)

# 누군가 우리 웹 서버의 기본 주소('/')로 접속하면,
@app.route("/")
def hello_world():
    # "백엔드 서버가 살아있습니다!" 라는 메시지를 보여줍니다.
    return "백엔드 서버가 살아있습니다!"

print(hello_world)

if __name__ == '__main__':
    app.run(debug=True)