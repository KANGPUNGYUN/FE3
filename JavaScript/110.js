// 클래스 안에 get, set이란 함수를 직접 정의하여 프로퍼티처럼 사용이 가능한데, 이 내용을 이해하지 못한 협업자들에게 get, set 안에 어떤 로직이 들어있는지 파악하지 못하고 단순히 객체의 프로퍼티를 수정한다는 착각을 일으킬 수 있으니 주의해서 사용하면 좋습니다.

class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    get password() {
        return this.#password
    }

    set password(pw) {
        this.#password = pw;
    }
}

const bot = new Robot('재현', 1234);

bot.password // 1234
bot.password = 5678;
bot.password // 5678