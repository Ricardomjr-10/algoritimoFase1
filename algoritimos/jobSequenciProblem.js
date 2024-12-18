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
function getBestJobs(jobs) {
    const bestJobs = []
    const deadlines = {}

    jobs.forEach(job => {
        if (!deadlines[job.deadline]) {
            deadlines[job.deadline] = []
        }
        deadlines[job.deadline].push(job)
    })

    Object.keys(deadlines).sort((a, b) => b - a).forEach(deadline => {
        const jobsByDeadline = deadlines[deadline]
        jobsByDeadline.sort((a, b) => b.profit - a.profit)
        bestJobs.push(jobsByDeadline[0])
    })

    return bestJobs
}

console.log(getBestJobs(jobs))