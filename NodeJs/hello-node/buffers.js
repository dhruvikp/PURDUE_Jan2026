const buffer = Buffer.from('Hello, World!');

console.log('Buffer content:', buffer.toString("utf8"));
console.log('Buffer length:', buffer.length);


const buffer2 = Buffer.from([65, 66, 67, 68, 69]);

console.log('Buffer2 content:', buffer2.toString());
console.log('Buffer2 length:', buffer2.length);
