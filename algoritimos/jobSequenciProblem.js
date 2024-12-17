class Job {
    constructor(id, deadline, profit) {
        this.id = id
        this.deadline = deadline
        this.profit = profit
    }
}

const jobs = [
    new Job('a', 4, 20),
    new Job('b', 1, 10),
    new Job('c', 1, 40),
    new Job('d', 1, 30)
]




console.log(jobs)