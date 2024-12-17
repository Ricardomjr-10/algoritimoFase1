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
let bestP = []
jobs.sort((a, b) => b.profit - a.profit)

for (let i = 0; i < jobs.length; i++) {
    //bestP[0] = jobs[0]
    if (jobs[i].deadline === jobs[i].deadline + 1) {
        bestP.push(jobs[i])
    }
}


console.log(bestP)