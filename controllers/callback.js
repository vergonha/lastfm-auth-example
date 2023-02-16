module.exports = () => {
    const controller = {};
    controller.callback = (req, res) => {
        res
            .status(200)
            .cookie('token', req.query.token)
            .render('callback')
    }

    return controller
};