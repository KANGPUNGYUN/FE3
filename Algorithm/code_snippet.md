# 1. 자료구조와 알고리즘, 코딩테스트

-   추천 서적
    -   학문적 접근 : The Art of Computer Programming(도널드 커누스)
    -   코딩테스트 접근 : 파이썬 알고리즘 인터뷰(박상길)
    -   기타 : 파이썬 자료구조와 알고리즘(중학교 학생 가르칠 때 사용), 그림으로 배우는 알고리즘(코드 없고 그림만 있습니다), 알고리즘 산책(역사적인 알고리즘을 쭉 훑어봅니다. 수학적인 내용이 많고 코드는 C++로 되어 있으나 보는데 큰 무리는 없습니다.)

## 1.1 코테 전 준비사항

1. 플렛폼에 익숙해지자! (프로그래머스, 구름EDU 등)
    - 프로그래머스 Node Version(12) -> replaceAll(15)
    - 사용 가능 라이브러리 미리 확인 등
    - 대부분 numpy나 pandas 같은 라이브러리 사용 금지이지만 간혹가다 제한이 없는 곳도 있습니다. numpy는 python보다 대부분의 경우 속도가 빠릅니다. 크기에 따라 다르지만 100000개 이상의 배열의 연산의 경우 50배 이상의 성능을 보입니다.
2. 언어 선택(속도 : C++, 풀이 : Python)
3. 코드 스니펫(트리, 검색, 최단경로(예를 들어 다익스트라), 직접 제작한 함수 등), Cheatsheet, A4 용지 준비
4. 유용한 라이브러리 정리! (collections, itertools(순열, 조합), functools, itertools, re, bisect 등) - [제주코딩베이스캠프](https://www.youtube.com/channel/UC4GnvNKtuJ4cqWsYjxNxAEQ) 유튜브 채널 확인
5. 기억해두자! 예외처리!
6. 속도개선
    1. class로 구현
    2. 메서드 대신 슬라이싱 구현(슬라이싱은 C로 구현되어 있어 메서드보다 통상 8배정도 빠릅니다.)하세요. 다만 공간복잡도가 상승할 수 있습니다. (리스트.reverse(), reversed(리스트), 리스트[::-1])
    3. for문 대신 list comprehension을 사용하세요. 더 빠릅니다.
    4. 재귀는 느립니다. 최후의 수단으로 사용하세요.

## 1.2 문제 유형과 출제 방식

-   5 ~ 6시간, 6 ~ 7문제
-   30분씩 4문제, 2시간씩 2문제
-   문제 유형 분석 관련 글
    -   [문제 유형 분석](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS4385594264)
    -   [언어 유불리 여부](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS9145550324&cate_cd=)
    -   [코딩 테스트에 가장 많이 출제 되는 알고리즘](https://www.hanbit.co.kr/media/channel/view.html?cms_code=CMS7793635735&cate_cd=)
        -   요구사항 구현 알고리즘(33%)
        -   그리디 알고리즘(20%)
        -   너비우선탐색, 깊이우선탐색(20%)
        -   정렬(8%)
        -   다이나믹 프로그래밍, 최단경로, 이진 탐색 등
-   전체 문제 유형
    -   알고리즘
        -   정렬
        -   이진 검색
        -   비트 연산
        -   슬라이딩 윈도우, 페이지 교체, 투포인트
        -   분할 정복
            -   그리디 알고리즘
            -   다이나믹 프로그래밍
            -   퀵소트, 병합정렬
    -   자료구조
        -   선형
            -   스택과 큐, 데크
            -   연결리스트, 해시 테이블
        -   비선형
            -   그래프(최단경로) - 다익스트라가 나오면 매우 어려운 문제
            -   트리
                -   힙
                -   트라이

## 1.3 워밍업 문제
* 활용할 수 있는 기본 개념 코드
```js
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER;

Infinity
-Infinity

(123.45).toFixed(); // 123
(123.45).toFixed(1); // 123.4

const arr = [1,2,3,4,5];
const result = arr.reduce((a,c) => a+=c);

// 평평하게 만들기 - flat()
[1, [2, [3, [4]]]].flat(); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity);

// 빈 배열 만들기
Array(10).fill(0);
[...Array(10)].map((_,i)=>i+1);
'.'.repeat(9).split('.');
Array.from('ab'.repeat(10))
```

* 활용할 수 있는 커스텀 메서드
```js
const zip = (a,b) => a.map((v,i)=> [v, b[i]]);
// zip('hello', [1, 2, 3, 4, 5]); //error
zip([1, 2, 3, 4, 5], 'hello'); // 성공. 앞의 매개변수로 배열 형태여야 한다.
// 0: (2) [1, 'h']
// 1: (2) [2, 'e']
// 2: (2) [3, 'l']
// 3: (2) [4, 'l']
// 4: (2) [5, 'o']
```

### 1.3.1 워밍업 문제(google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

문제 링크 : https://codingdojang.com/scode/393

- 풀이

```js
let str = '';

for (let i=1;i<=10000;i++) {
  str += i;
}

console.log(str.match(/8/g).length); 
```

```js
let str = ""
for(let i=1; i<=10000; i++){
    str += i
}
console.log(str.split("").filter(item => item==='8').length)
```

```js
Array(10000).fill(0).map((_, index)=>index+1).join('').match(/8/g).length
```

```js
[...Array(10000)].map((_, index)=>index+1).join('').match(/8/g).length
```

```js
let arr = []
for(let i = 1;i<=10000;i++){
    arr.push(i);
}
[...arr.join('')].filter(el=>el==='8').length

// [...arr.join('')]
// (38894) ['1', '2', '3', '4', '5', '6', '7', '8', '9', '1', '0', '1', '1', '1', '2', '1', '3', '1', '4', '1', '5', '1', '6', '1', '7', '1', '8', '1', '9', '2', '0', '2', '1', '2', '2', '2', '3', '2', '4', '2', '5', '2', '6', '2', '7', '2', '8', '2', '9', '3', '0', '3', '1', '3', '2', '3', '3', '3', '4', '3', '5', '3', '6', '3', '7', '3', '8', '3', '9', '4', '0', '4', '1', '4', '2', '4', '3', '4', '4', '4', '5', '4', '6', '4', '7', '4', '8', '4', '9', '5', '0', '5', '1', '5', '2', '5', '3', '5', '4', '5', …]
```
### 1.3.2 워밍업 문제(daum)

1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S=[1, 3, 4, 8, 13, 17, 20] 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

문제링크 : https://codingdojang.com/scode/408

```js
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = [];
for(let i=1; i < s.length-1; i++){
    arr.push(s[i] - s[i-1]);
}
// 연속된 값의 차이 중 최소값의 인덱스를 찾는 방법
let index = arr.indexOf(Math.min(...arr));
console(s[index], s[index+1]);
```

```js
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = [];
for(let i=1; i < s.length-1; i++){
    arr.push(s[i] - s[i-1]);
}
// 연속된 값의 차이 중 최소값의 인덱스를 찾는 방법
let index = arr.indexOf(Math.min(...arr));
console(s[index], s[index+1]);
```

```py
sorted(list(zip([1, 3, 4, 8, 13, 17, 20], [3, 4, 8, 13, 17, 20])), key=lambda i:i[1]-i[0])[0]
```

```js
const zip = (a,b) => a.map((v,i)=> [v, b[i]]);
let s = [1, 3, 4, 8, 13, 17, 20];

let pairs = zip(s.slice(0, s.length-1), s.slice(1));

// (1) 비교 정렬 콜백함수
// function 비교(a, b) {
//         if (a[1] - a[0] < b[1] - b[0]) {
//             return -1
//         }
//         if (a[1] - a[0] > b[1] - b[0]) {
//             return 1
//         }
//         return 0;
//     }

//     pairs.sort(비교)
//     pairs.sort(비교)[0]

// (2) 최소값쌍
let 최솟값 = Infinity;
let 최솟값쌍 = [];

for ([i,j] of pairs){
    if (j - i < 최솟값){
        최솟값 = j - i;
        최솟값쌍 = [i, j];
    }
}
```

## 1.4 기본 자료구조 및 알고리즘
1. 스택과 큐
2. 연결리스트
3. 트리와 그래프
    * 3.1 트리구현
    * 3.2 트리의 순회 
4. 정렬 알고리즘
    * 4.1 선택정렬
    * 4.2 삽입정렬
    * 4.3 병합정렬
    * 4.4 퀵정렬
5. 페이지 교체 알고리즘
6. 슬라이딩 윈도우와 투 포인터 알고리즘

### 1.4.1 스택과 큐
    * 스택 : (삽입)arr.push, (삭제)arr.pop
    * 큐 : (삽입)arr.push, (삭제)arr.shift
    * 큐 : (삽입)arr.unshift, (삭제)arr.pop
    * arr.unshift(1000) : 맨 앞에 1000을 삽입합니다.
    * arr.shift() : 맨 앞에 값을 꺼냅니다.
    * arr.push() : 맨 뒤에 값을 삽입합니다.
    * arr.pop(): 맨 뒤에 값을 꺼냅니다.

```js
class Stack {
    constructor(){
        this.arr = []; //연결리스트로 구현할 수 있지만, 지금 배우지 않았기 때문에 배열로 구현합니다.
        this.length = 0;
    }

    push(data){
        this.arr.push(data);
        this.length += 1;
    }

    pop(index){
        if(this.length == 0){
            return
        }
        if(index > this.arr.length - 1){
            this.length -= 1;
            return this.arr.pop();
        }
        let result = this.arr.splice(index, 1)
        this.length -= 1;
        return result;
    }

    empty(){
        if(this.length == 0){
            return 1;
        } else {
            return 0;
        }
    }

    top(){
        return this.arr[this.length -1];
    }

    bottom(){
        return this.arr[0];
    }

    display(){
        return this.arr;
    }
}
```

### 1.4.2 연결리스트
- 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
- js에서는 그다지 메모리 효율이 좋지 못함
- 개념 : https://en.wikipedia.org/wiki/Linked_list
- 자주 사용하는 연결리스트 형태(Singly linked list, Doubly linked list, Circular linked list)
- 알고리즘 시각화 : https://visualgo.net/ko

1. step 1 - object로 linkedlist 구현
```js
const list = {
    head: {
        value: 46,
        next: {
            value: 49,
            next: {
                value: 97,
                next: {
                    value: 12,
                    next: null
                }
            }
        }
    }
}
// list.head.next.next.value;

let list = {
    head: null
}
let node1 = {value: 46, next: null}
let node2 = {value: 49, next: null}
let node3 = {value: 97, next: null}
let node4 = {value: 12, next: null}

node1.next = node2;
node2.next = node3;
node3.next = node4;

list.head = node1;

// let node4 = {value: 12, next: null}
// let node3 = {value: 97, next: node4}
// let node2 = {value: 49, next: node3}
// let node1 = {value: 46, next: node2}

// list.head.next.next.value;
```

* 문제
```js
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.

let list = {
    head: null
}

let node5 = {value: 21, next: null}
let node4 = {value: 35, next: node5}
let node3 = {value: 77, next: node4}
let node2 = {value: 2, next: node3}
let node1 = {value: 90, next: node2}

list.head = node1;

list.head.next.next.next.value;
```

2. step 2 - class로 node 구현
```js
class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

node1 = new Node(90);
node2 = new Node(2);
node3 = new Node(77);
node4 = new Node(35);
node5 = new Node(21);

node1.next = noded2;
node2.next = noded3;
node3.next = noded4;
node4.next = noded5;

list.head.next.next.next.value;
```

3. step 3 - class로 linkedList 구현
```js
// head -> ['init', next]
//               ↑ 
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑ 
//                              tail
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)

// l.head.data
// 'init'
// l.head.next.data
// 1
// l.head.next.next.data
// 2
// l.head.next.next.next.data
// 3

// 새로운노드 = node(1, null)
// init.next 값은 null인데! null자리를 '새로운노드node(1, null)'로!
// this.tail은 이제 node(1, null)
// 
// 새로운노드 = node(2, null)
// node(1, null).next 값은 null인데! null자리를 '새로운노드node(2, null)'로!
// node(1, null) = 새로운노드node(2, null)
// 
// 새로운노드 = node(3, null)
// node(2, null).next값은 null인데! null자리를 '새로운노드node(3, null)'로!
// node(2, null) = 새로운노드node(3, null)
```

4. step 4 - class로 linkedList에서 length 구현
```js
// head -> ['init', next]
//               ↑ 
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑ 
//                              tail

// 여기서 데이터를 추가하면 생성되는 노드마다 데이터 공간이 할당되는 것이라 메모리가 크게 필요하게 됩니다.
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
        this.length = 0
    }

    length(){
        return this.length
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
        this.length += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
```

5. step 5 - class로 linkedList에서 toString 구현
```js
class Node {
    constructor(data){
        this.data = data
        this.next = null
        
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
        this.length = 0
        this.displayData = ''
    }

    length(){
        return this.length
    }

    toString(){
        return '<' + this.displayData.slice(0, -2) + '>'
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
        this.length += 1
        this.displayData += `${data}, `
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
```


6. step 6 - class로 linkedList에서 toArray 구현
```js
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
        this.length = 0
        this.displayData = ''
        this.displayDataArr = []
    }

    // length(){ //this.length가 덮어씀
    //     return this.length
    // }

    toString(){
        return '<' + this.displayData.slice(0, -2) + '>'
    }

    toArray(){
        return this.displayDataArr
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
        this.length += 1
        this.displayData += `${data}, `
        this.displayDataArr.push(data)
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
```

7. step 7 - (중요) toString을 순회로 구현
```js
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
        this.length = 0
    }

    length(){
        return this.length
    }
    
    toString(){
        let 순회용현재노드 = this.head

        //처음 순회용 현재 노드가 init이기 때문에 다음 값을 대입해줍니다.
        순회용현재노드 = 순회용현재노드.next

        let 출력데이터 = ''
        for(let i = 0; i < this.length; i++){
            출력데이터 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return 출력데이터
    }

    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
        this.length += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
```

8. step 8 - data를 arr로 만들기

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        let 순회용현재노드 = this.head;

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next;

        let 출력데이터 = "";
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }

        //return 출력데이터;
        return '[' + 출력데이터.slice(0, -2) + ']'
    }

    fullData(){
        return JSON.parse(this.toString())
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

9. step 9 - linked list에 node 삽입하기

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }

    // length() { //this.length가 덮어 씀
    //     return this.length;
    // }

    toString() {
        let 순회용현재노드 = this.head;

        //처음 순회용 현재 노드가 init이기 때문에
        순회용현재노드 = 순회용현재노드.next;

        let 출력데이터 = "";
        for (let i = 0; i < this.length; i++) {
            출력데이터 += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }

        //return 출력데이터;
        return '[' + 출력데이터.slice(0, -2) + ']'
    }

    fullData(){
        return JSON.parse(this.toString())
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.length += 1;
    }

    insert(index, data){
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next;
        }

        let 새로운노드 = new Node(data);
        새로운노드.next = 순회용현재노드.next;
        순회용현재노드.next = 새로운노드;
        this.length += 1;
    }
}

l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

10. Double linked list의 기본 형태
```js
const list = {
    head: null
};

let list1 = {value: 12, next: null, pre: null};
let list2 = {value: 99, next: null, pre: null};
let list3 = {value: 37, next: null, pre: null};
let list4 = {value: 2, next: null, pre: null};

list1.next = list2;
list2.next = list3;
list3.next = list4;

list1.pre = list.head;
list2.pre = list1;
list3.pre = list2;
list4 = list3;

list1.next.next.value;
// 37
list3.pre.pre.value;
// 12
list4.pre.pre.pre.next.next.value;
// 37
```

```js
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.pre = null;
    }
}

class DoubleLinkedList {
    constructor() {
        let init = new Node("init");
        this.head = init;
        this.tail = init;
    }

    append(data) {
        let 새로운노드 = new Node(data);

        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        새로운노드.pre = this.tail;
        
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;

    }
}

l = new DoubleLinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
```

### 1.4.3 트리와 그래프

### 1.4.4 정렬 알고리즘

-   재미있는 사실(재미없을 수도 있습니다. 사례를 말씀드릴게요.)
    -   JavaScript의 Array의 sort는 알고리즘이 고정이 아닙니다. 각 브라우저마다(벤더사마다) 다른 sort를 사용하고 있어서 같은 값이면 브라우저마다 보여지는 화면이 다를 수 있습니다.
    -   Google이 Chrome 70 이전에 개수에 따라 다른 알고리즘을 혼합하는 정렬을 사용했다가(InsertionSort & QuickSort 사용) 얼마전에(18년도에) Timsort로 변경했습니다.
    -   정렬 알고리즘 중에서 가장 인기있는 알고리즘은 병합정렬(존 폰 노이만 제작)이었습니다.
    -   Python에서 시작된 Timsort로(팀 피터스) 대동단결하고 있는 모양세입니다. Python 만세!
    -   Timsort는 삽입정렬과 병합정렬을 적절히 조합한 것이고, 2002년도에 Python을 위해 C로 구현되었습니다.
    -   정렬 알고리즘 3대장 비교(Bset, Worst)
        -   병합 정렬 : nlogn, nlogn
        -   퀵 정렬 : nlogn, n\*\*2
        -   팀소트 : n, nlogn

* 정렬 알고리즘을 작성할때 주의사항
```js
// 입력값.length는 고정값이 아닙니다!
// block 안에서 pop을 하게 되면 length가 변합니다.
입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
for (let i = 0; i < 입력값.length; i++) {
    console.log(입력값.pop());
    console.log(i);
}
// 아래와 같이 출력해보세요.
입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
for (let i = 0; i < 입력값.length; i++) {
    console.log(입력값.pop());
    console.log(i);
    console.log(입력값.length);
}
```
#### 1.4.4.1 선택정렬
* step

    * step 1
    ```
    전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
    후 = []
    ```

    * step 2
    ```
    전 = [199, 22, 33, 32, 64, 72, 222, 233]
    후 = [12]
    ```

    * step 3
    ```
    전 = [199, 33, 32, 64, 72, 222, 233]
    후 = [12, 22]
    ```

    * step 4
    ```
    전 = [199, 33, 64, 72, 222, 233]
    후 = [12, 22, 32]
    ```

    * step 5
    ```
    전 = [199, 64, 72, 222, 233]
    후 = [12, 22, 32, 33]
    ```
- 선택정렬 구현
```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
// let 길이 = 입력값.length //가변될수 있는 값을 변수로 선언하는 방식을 사용할 수 있습니다.
while(!!입력값.toString()){
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1);
}
console.log(정렬된배열);
```

```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
function selectionSort(arr){
    // [199, 22, 33, 12, 32, 64, 72, 222, 233]
    // 첫번째 순회
        // min_index = 0
        // 두번째 순회
            // arr[min_index] > arr[j]
            // arr[0] > arr[1] -> min_index = 1
            // arr[1] > arr[2] -> min_index = 1
            // arr[1] > arr[3] -> min_index = 3
            // arr[3] > arr[4] -> min_index = 3
            // arr[3] > arr[5] -> min_index = 3
            // arr[3] > arr[6] -> min_index = 3
            // arr[3] > arr[7] -> min_index = 3
        // arr[0](199) <-> arr[3](12)
        // 순회가 돌면 돌수록 순회값이

    for(let i = 0; i < arr.length; i++){
        let min_index = i;
        for (let j = i +1; j < arr.length; j++){
            if(arr[min_index] > arr[j]){
                min_index = j;
            }
        }

        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] =temp
    }
}
```
#### 1.4.4.2 삽입정렬(껴들기)
* step
    * step 1
    ```
    전 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
    후 = []
    ```

    * step 2
    ```
    전 = [22, 33, 12, 32, 64, 72, 222, 233]
    후 = [199]
    ```

    * step 3
    ```
    전 = [33, 12, 32, 64, 72, 222, 233]
    후 = [22, 199]
    ```

    * step 4
    ```
    전 = [12, 32, 64, 72, 222, 233]
    후 = [22, 33, 199]
    ```

    * step 5
    ```
    전 = [32, 64, 72, 222, 233]
    후 = [12, 22, 33, 199]
    ```
* 구현코드
```js
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값){
    for(const i in 정렬된배열){
        if(삽입값 < 정렬된배열[i]){
            return i
        }
    }

    return 정렬된배열.lengthaj
}

for(let i=0; i < 배열의길이; i++){
    let 삽입값 = 입력값.shift();
    let 인덱스 = 삽입값이_들어갈_인덱스(정렬된 배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값)
}
```

#### 1.4.4.3 병합정렬(1개가 되도록 분할하고 각각을 병합하는 과정 병합 시 맨 앞의 데이터부터 비교하여 정렬하는 방법),(Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일할 수 있음))

* step
    ```js
    // 분할
    [5, 10, 66, 77, 54, 32, 11, 15]
    [5, 10, 66, 77], [54, 32, 11, 15]
    [5, 10], [66, 77], [54, 32], [11, 15]
    [5], [10], [66], [77], [54], [32], [11], [15]

    // 정복
    [5, 10], [66, 77], [54, 32], [11, 15]
    [5, 10, 66, 77], [54, 32, 11, 15]
    [5, 10, 66, 77, 54, 32, 11, 15]
    ```
* 구현코드
```js
    let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

    function 병합정렬(입력배열) {
        //분할
        let 입력배열의길이 = 입력배열.length;
        if (입력배열의길이 <= 1) {
            return 입력배열;
        }
        let 중간값 = parseInt(입력배열의길이 / 2);
        // ~~(입력배열의길이 / 2)와 같습니다.
        let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
        let 그룹둘 = 병합정렬(입력배열.slice(중간값));

        // return `그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n\n`;

        // 정복
        while(그룹하나.length != 0 && 그룹둘.length != 0){
            if(그룹하나[0] < 그룹둘[0]){
                결과값.push(그룹하나.shift());
            } else {
                결과값.push(그룹둘.shift());
            }
        }
        // while(그룹하나.length != 0){
        //     결과값.push(그룹하나.shift())
        // }
        // while(그룹둘.length != 0){
        //     결과값.push(그룹둘.shift())
        // }

        // 개선된 코드
        결과값 = [...결과값, ...그룹하나]
        결과값 = [...결과값, ...그룹둘]

        return 결과값
    }

    console.log(병합정렬(입력값));
```
#### 1.4.4.4 퀵정렬(앞부터 기준 세워서 기준보다 작은 값과 큰 값을 순서 상관없이 정렬하는 것을 반복하여 정렬한다)
* best - O(nlig2n), worst - O(n**2)
* 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중갑값, 마지막값, 혹은 빅오 worst를 피하기 위해 랜덤으로 주는 경우도 있음)
* 피봇값은 알고리즘을 만드는 사람이 결정하는 것이다. 따로 정해진 것은 없음. 하지만 한번 결정한 기준 방법은 그대로 사용해줄 것.
* 실무에서는 worst일경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.

* step

```js
// 원본
[66, 77, 54, 32, 10, 5, 11, 15]

// step 1
// 피봇값: 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

// step 2
// 피봇값: 54
[32, 10, 5, 11, 15] + [54] + [66] + [77]


// step 3
// 피봇값: 32
[10, 5, 11, 15] + [32] + [54] + [66] + [77]

// step 4
// 피봇값: 10
[5] + [10] + [11, 15] + [32] + [54] + [66] + [77]

// step 5
// 피봇값: 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]

[5, 10, 11, 15, 32, 54, 66, 77]
```

```js
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15]

function 퀵정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;

    if (입력배열의길이 <= 1) {
        return 입력배열;
    }
    
    let 피벗값 = [입력배열.shift()];
    let 그룹하나 = [];
    let 그룹둘 = [];

    for(let i in 입력배열){
        if(입력배열[i] < 피벗값){
            그룹하나.push(입력배열[i])
        } else {
            그룹둘.push(입력배열[i])
        }
    }
    // console.log(`그룹하나:${그룹하나}\n그룹둘:${그룹둘}\n피벗값 : ${피벗값}\n`);

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
}

퀵정렬(입력값)
```

### 1.4.5 페이지 교체 알고리즘

// https://www.notion.so/paullabworkspace/db83d9c4bbe6410ea208e6dc2daff07e
// 페이지 교체 알고리즘 : 메모리를 효율적으로 사용하기 위해서 어떤 데이터를 메모리에 적재할지 결정하는 알고리즘
// FIFO(오래된 녀석이 가장 빨리 나간다)
// 순서 : 0, 4, 6, 5, 4, 7, 8
[]
[0]
[0, 4]
[0, 4, 6]
[4, 6, 5]
[4, 6, 5] // 4가 hit
[6, 5, 7]
[5, 7, 8]
// LRU(오랫동안 사용되지 않은 녀석이 삭제)
// 순서 : 0, 4, 6, 5, 4, 7, 8
[]
[0]
[0, 4]
[0, 4, 6]
[4, 6, 5]
[6, 5, 4] // 4가 hit
[5, 4, 7]
[4, 7, 8]

// 문제 : https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/
// 캐시 크기(cacheSize)와 도시이름 배열(cities)
// cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30
// cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
// 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.
// LRU(Least Recently Used)를 사용한다.
// hit일 경우 실행시간은 1이다.
// miss일 경우 실행시간은 5이다.

// 캐시크기 3
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
["","",""]

["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]
["Jeju","",""] // 5

/////// stop //////

```js
// 캐시크기 3 - 총 27
// 바나나, 체리, 한라봉, 체리, a, b
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"][("Jeju", "", "")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Jeju", "Pangyo", "")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Jeju", "Pangyo", "Seoul")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Pangyo", "Seoul", "NewYork")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Seoul", "NewYork", "LA")][ //5
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("NewYork", "LA", "Seoul")][ //1
    ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("NewYork", "Seoul", "LA")][ //1
    // LRU
    // hit - 1
    // miss - 5
    ("바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리")
][바나나][(바나나, 체리)][(바나나, 체리, 한라봉)][(체리, 한라봉, 자몽)][ // 5 // 5 // 5 // 5
    (한라봉, 자몽, 수박)
][(한라봉, 자몽, 수박)][(자몽, 수박, 체리)][바나나][(바나나, 체리)][ // 5 // 1 - hit // 5 // 5 // 5
    (바나나, 체리, 한라봉)
][(바나나, 한라봉, 체리)][(한라봉, 체리, a)][(체리, a, b)][ // 5 // 1 // 5 // 5
    // FIFO 알고리즘(캐시:3)
    ("바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리")
][바나나][(바나나, 체리)][(바나나, 체리, 한라봉)][(체리, 한라봉, 자몽)][ // 5 // 5 // 5 // 5
    (한라봉, 자몽, 수박)
][(한라봉, 자몽, 수박)][(자몽, 수박, 체리)]; // 5 // 1 - hit // 5
```


## 2.1 코테 실전풀이

### 2.1.1 비밀지도(18년)
* https://school.programmers.co.kr/learn/courses/30/lessons/17681
* 주제: 2진법, 진산연법, replace, or 연산

n      5
arr1   [9, 20, 28, 18, 11]
arr2   [30, 1, 21, 17, 28]

    01001 (9)
or  11110 (30)
---------
    11111

    10100 (20)
or  00001 (1)
---------
    10101

    11100 (28)
or  10101 (21)
---------
    11101

["#####", "# # #", "### #", "#  ##", "#####"]

```js
// step 1
function solution(n, arr1, arr2){
    const zip = (a,b) => a.map((v,i)=> [v, b[i]]);

    for ([i,j] of zip(arr1, arr2)){
        console.log(i, j)
    }
}

// step 2 비트 단위 연산자 사용
function solution(n, arr1, arr2){
    answer = [];
    const zip = (a,b) => a.map((v,i)=> [v, b[i]]);

    for ([i,j] of zip(arr1, arr2)){
        console.log(i | j)
    }
}

// step 3 비트 단위 연산자 사용
function solution(n, arr1, arr2){
    answer = [];

    const zip = (a,b) => a.map((v,i)=> [v, b[i]]);

    for ([i,j] of zip(arr1, arr2)){
        answer.push((i | j).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
    }

    return answer;
}

// step 4 padStart 사용
function solution(n, arr1, arr2){
    answer = [];

    const zip = (a,b) => a.map((v,i)=> [v, b[i]]);

    for ([i,j] of zip(arr1, arr2)){
        answer.push((i | j).toString(2).replace(/1/g, '#').replace(/0/g, ' ').padStart(n, ' '));
    }

    return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// 기초상식
// 1. bit 단위 or 연산자
28 | 21
29
20 | 1
21
20 | 2
22
20 | 4
20

// 2. toString()
let x = 9;
x.toString();
'9'
x.toString(2);
'1001'
x.toString(8);
'11'
x.toString(16);
'9'

// 3. repalce()
x.toString(2).replace('1', '#');
'#001'
x.toString(2).replace(/1/g, '#').replace(/0/g, ' ');
'#  #'

// 4. padStart()
x.toString(2).padStart(5, '0');
'01001'
```

### 2.1.2 다트게임(18년)
* https://school.programmers.co.kr/learn/courses/30/lessons/17682
* 문자열 파싱(parsing)

* 문제풀이
    * step 1
    ```js
    testcase = [
        '1S2D*3T', // 37
        '1D2S#10S', // 9
        '1D2S0T' // 3
    ]

    function solution(dartResult) {
        let answer = []
        let result = 0
        let temp = 0

        for(let i = 0; i < dartResult.length; i++){
            if(dartResult[i] >= 0 && dartResult[i] <=9){
                temp = parseInt(dartResult[i]) // 이렇게 하게 되면 10점을 고려하지 않은 것!
            } else if(dartResult[i] == 'S') {
                answer.push(temp);
            } else if(dartResult[i] == 'D') {
                answer.push(temp**2);
            } else if(dartResult[i] == 'T') {
                answer.push(temp**3);
            }
        }

        return answer;
    }

    console.log(solution(testcase[0]));
    console.log(solution(testcase[1]));
    console.log(solution(testcase[2]));
    ```

    * step 2
    ```js
    function solution(dartResult){
        let answer = []
        let result = 0
        let temp = 0

        for (let i = 0; i < dartResult.length; i++) {
            if (dartResult[i] >= 0 && dartResult[i] <= 9){
                if(dartResult[i] == 1 && dartResult[i+1] == 0){
                    temp = 10
                    // continue
                    i++
                } else {
                    temp = parseInt(dartResult[i])
                }
            } else if(dartResult[i] == 'S'){
                answer.push(temp)
            } else if(dartResult[i] == 'D'){
                answer.push(temp**2)
            } else if(dartResult[i] == 'T'){
                answer.push(temp**3)
            } else if(dartResult[i] == '*'){
                answer[answer.length-1] *= 2
                answer[answer.length-2] *= 2
            } else if(dartResult[i] == '#'){
                answer[answer.length-1] *= -1
            }
        }
        for (const value of answer) {
            result += value
        }
        return result
    }

    // 번외편
    // 정규표현식을 사용하면 보다 편하게 문자열 parsing 문제를 풀수 있습니다.
    // '1S2D*3T'.match(/([0-9]|10)([SDT])([\*\#]?)/g)

    function solution(dartResult) {
        let 승수 = {'S': 1, 'D': 2, 'T': 3}
        let answer = dartResult.match(/([0-9]|10)([SDT])([\*\#]?)/g).map((item)=>{
            return parseInt(item[0])**승수[item[1]];
        })

        return answer.reduce((a,c)=> a + c)
    }
    ```

### 2.1.1 캐시(18년)
* 링크: https://school.programmers.co.kr/learn/courses/30/lessons/17680

* 문제풀이
```js
function solution(cacheSize, cities){
    let time = 0
    let cache = []
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase()
        let index = cache.indexOf(city)
        if(index !== -1){
            //hit
            cache.splice(index, 1)
            cache.push(city)
            time += 1
        } else {
            //miss
            cache.push(city)
            time += 5
            if(cacheSize < cache.length){
                cache.shift()
            }
        }
    }
    return time
}
```