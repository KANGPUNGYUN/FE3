// function Robot(name) {
//     this.name = name;
// }

// Robot.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }

// 클래스는 생성자를 이용한 타입 생성과 그 결과가 정확하게 일치. 이처럼 내부적인 동작은 동일하지만 더 보기 좋고 편리하게 개선된 문법을 신텍스슈가(Syntactic sugar) 라고 부릅니다.

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

const robot = new Robot('게리');

robot.name; // '게리'

// 실습 : 우리가 위에서 만들어본 여러분 자신의 생성자 함수를 class 문법으로 변경해봅시다.

class Me {
    constructor(name, team){
        this.name = name;
        this.team = team;
    }

    running(kg){
        weight.down();
    }

    eating (kg){
        weight.up();
    }

}

class Weight {
    constructor(kg){
        this.kg = kg;
    }

    up(){
        this.kg++;
    }

    down(){
        this.kg--;
    }
}

let pung = new Me('pung', 15);
let weight = new Weight(76);

pung.running();
weight; // {kg: 75}
