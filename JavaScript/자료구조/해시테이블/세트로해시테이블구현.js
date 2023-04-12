const table = new Set();
table.add("key"); // Key와 Value가 동일하게 들어간다
table.add("key2");
console.log(table.has("key")); // true
console.log(table.has("key3")); // false
table.delete("key2");
console.log(table.has("key2")); // false
table.add("key3");
console.log(table.size); // 2
table.clear();
console.log(table.size); // 0
