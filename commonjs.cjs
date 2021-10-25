module.exports.createThread = (work=Function()) =>  {
    work();
}
module.exports.createThreads = (count=Number() , work=Function()) => {
    for (let i = 0; i < count; i++) {
        work();
    }
}
module.exports.createContinousThreads = (count=Number() , work=Function()) => {
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