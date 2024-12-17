class Job {
    constructor(id, deadline, profit) {
        this.id = id
        this.deadline = deadline
        this.profit = profit
    }
}

const job = new Job('a', 4, 20)
const job1 = new Job('b', 1, 10)
const job2 = new Job('c', 1, 40)
const job3 = new Job('d', 1, 30)




console.log(job.deadline)