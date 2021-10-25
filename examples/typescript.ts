import { createContinousThreads } from '../typescript.ts'
import  { createThreads } from '../typescript.ts'
import { createThread } from '../typescript.ts'
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