const fs = require('fs')

module.exports = {
    dellFile(path) {
        let result = false

        fs.unlink(path, err => {
            result = err ? false : true
        })

        return result
    }
}