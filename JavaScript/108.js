// 클래스 상속을 받는 실습

class Sausage {
    constructor(el1, el2) {
        this.inside1 = el1;
        this.inside2 = el2;
    }

    taste() {
        console.log(`${this.inside1} 와 ${this.inside2} 맛이 난다`);
    }
}

class FireSausage extends Sausage {
    constructor(el1, el2, el3) {
        super(el1, el2);
        this.inside3 = el3;
    }

    taste() {
        console.log(`${this.inside1} 와 ${this.inside2} 와  ${this.inside3}  맛이 난다`);
    }
}

const fireS = new FireSausage('칠리','치즈','불맛');

fireS.taste(); // 칠리 와 치즈 와  불맛  맛이 난다



// 비공개(private) 프로퍼티
class Robot {
    #password

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }


    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    getPassword() {
        return this.#password
    }

    setPassword(pw) {
        this.#password = pw;
    }
}

const robot = new Robot('피터', '1234');

// robot.#password // Uncaught SyntaxError: Private field '#password' must be declared in an enclosing class

// #password는 비공개 프로퍼티로 위에서 정의한 getPassword메서드를 통해서만 password를 가져올 수 있다. 
robot.getPassword(); // '1234'