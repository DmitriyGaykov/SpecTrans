module.exports = {
    getCheckStrFromRequest(req) {
        return `${req.connection.localAddress}:${req.connection.localPort}`
    }
}