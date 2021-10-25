export let createThread = (work:Function) =>  {
    work();
}
export let createThreads = (count:Number , work:Function) => {
    for (let i = 0; i < count; i++) {
        work();
    }
}
export let createContinousThreads = (count:Number , work:Function) => {
    let toDo = () => {
        return new Promise(async (resolve , reject) => {
            await work();
            await resolve(toDo())
        })
    }
    for (let i = 0; i < count; i++) {
        toDo();
    }
}