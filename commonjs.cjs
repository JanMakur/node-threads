module.exports.createThread = (work=Function()) =>  {
    work();
}
module.exports.createThreads = (count=Number() , work=Function()) => {
    for (let i = 0; i < count; i++) {
        work();
    }
}
module.exports.createContinuousThreads = (count=Number() , work=Function()) => {
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
