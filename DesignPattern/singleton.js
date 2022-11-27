// 싱글톤 패턴: 오직 하나의 인스턴스만을 생성해야할때 필요한 패턴

// class Test {
//     constructor() {

//     }
// }

// const test1 = new Test();
// const test2 = new Test();

// console.log(test1 === test2); // false

class Singleton {
    constructor(data) {
        this.data = data;

        const instance = this.constructor.instance;

        if(instance) {
            return instance
        }

        this.constructor.instance = this;
    }
}

const test = new Singleton(10);
const test2 = new Singleton(50);

console.log(test === test2); // true
console.log(test.data); // 10
console.log(test2.data); // 10 싱글톤 패턴이기 때문에 그 안에 있는 데이터도 동일