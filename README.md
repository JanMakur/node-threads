# node-threads
## a Simple Module to Create Threads
[Commonjs Example](https://github.com/Titan3301/node-threads/blob/main/examples/commonjs.cjs)
[Modernjs Example](https://github.com/Titan3301/node-threads/blob/main/examples/modernjs.mjs)
[TypeScript Example](https://github.com/Titan3301/node-threads/blob/main/examples/typescript.ts)
### CommonJS Example
```js
const { createContinuousThreads } = require('./commonjs.cjs');
const { createThreads } = require('./commonjs.cjs');
const { createThread } = require('./commonjs.cjs');
//Create Thread
createThread(() => {
    setTimeout(function() {
        console.log(`new thread`);
    } , 5000)
})
createThreads(5 , () => {
    console.log('multiple threads');
})
createContinuousThreads(6 , () => {
    console.log(`6 threads will run at a time :D after they end new thread will be created`);
})
```
### ModernJS Example
```js
import { createContinuousThreads } from './modernjs.mjs'
import { createThreads } from './modernjs.mjs'
import { createThread } from './modernjs.mjs'
//Create Thread
createThread(() => {
    setTimeout(function() {
        console.log(`new thread`);
    } , 5000)
})
createThreads(5 , () => {
    console.log('multiple threads');
})
createContinuousThreads(6 , () => {
    console.log(`6 threads will run at a time :D after they end new thread will be created`);
})
```
### TypeScript Example
```ts
import { createContinuousThreads } from '../typescript.ts';
import { createThreads } from '../typescript.ts';
import { createThread } from '../typescript.ts';
//Create Thread
createThread(() => {
    setTimeout(function() {
        console.log(`new thread`);
    } , 5000)
});
createThreads(5 , () => {
    console.log('multiple threads');
});
createContinuousThreads(6 , () => {
    console.log(`6 threads will run at a time :D after they end new thread will be created`);
});
```
