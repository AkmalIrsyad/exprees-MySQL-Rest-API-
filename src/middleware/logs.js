const logRequest = (req, rest, next) => {
    console.log("Terjadi Request Ke Path", req.path);
    next();
}

module.exports = logRequest;