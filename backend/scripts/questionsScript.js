const {differenceInSeconds} = require("date-fns/fp");

const usersAndLastAdding = new Map()
const waitTime = 60

module.exports = {
    waitTime,

    getLastAdding(checkStr) {
        return usersAndLastAdding.get(checkStr)
    },
    deleteLastAdding(checkStr) {
        usersAndLastAdding.delete(checkStr)
    },
    addLastVisit(checkStr) {
        usersAndLastAdding.set(checkStr, new Date())
    },

    startCleaner() {
        setInterval(() => {
            usersAndLastAdding.forEach((value, key) => {
                const diff = differenceInSeconds(value, new Date())

                if(diff > waitTime) {
                    usersAndLastAdding.delete(key)
                }
            })
        }, waitTime)
    }
}