// 부모클래스
class Robot {
    // constructor 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다. 
	// 그리고 constructor 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    constructor(name) {
        this.name = name;
    }

    // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

// 자식클래스
class BabyRobot extends Robot {
    constructor(name) {
        super(name); // super는 부모 생성자(constructor)를 참조합니다. 상속을 받아야 하는 클레스인 경우에는 super는 무조건 넣어주여야 합니다. 그렇지 않을 경우 문법적 오류를 발생시킴.
        this.ownName = '아이크'; // 생성자 함수에서 this 값을 사용할 경우 super 함수는 반드시 this 보다 먼저 실행되어야 합니다.
    }

    sayBabyName() {
				// 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
        this.sayYourName();
        console.log('Suceeding you, Father!');
    }
}

const babyRobot = new BabyRobot('브랜든');

babyRobot.sayYourName(); // 삐리비리. 제 이름은 브랜든입니다. 주인님.