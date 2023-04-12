const table = new Map();
table.set("key", 100);
table.set("key2", "Hello");
console.log(table["key"]); // undefined
console.log(table.get("key")); // 100
const obj = { a: 1 };
table.set(obj, "A1"); // Map은 Object도 Key로 쓸 수 있다.
console.log(table.get(obj)); // A1
table.delete(obj);
console.log(table.get(obj)); // undefined
console.log(table.keys()); // {'key', 'key2'}
console.log(table.values()); // {100, 'Hello'}
table.clear();
console.log(table.values()); // {}
