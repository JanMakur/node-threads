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
        return new Promise((resolve , reject) => {
            work()
            .then(() => {
                resolve(work())
            })
            .catch(() => {
                resolve(work())
            });
        })
    }
    for (let i = 0; i < count; i++) {
        toDo();
    }
}