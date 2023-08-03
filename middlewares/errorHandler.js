// 404 not found

const notFound = (req, res, next) => {
    const err = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(err);
};

// error handler
const errHandler = (err, req, res, next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode);
    res.json({
        message: err?.message,
        stack: err?.stack
    });
};

module.exports = {errHandler, notFound};
