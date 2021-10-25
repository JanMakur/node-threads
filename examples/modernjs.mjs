import { createContinousThreads } from '../modernjs.mjs'
import  { createThreads } from '../modernjs.mjs'
import { createThread } from '../modernjs.mjs'
//Create Thread
createThread(() => {
    setTimeout(function() {
        console.log(`new thread`);
    } , 5000)
})
createThreads(5 , () => {
    conole.log('multiple threads');
})
createContinousThreads(6 , () => {
    console.log(`6 threads will run at a time :D after they end new thread will be created`);
})