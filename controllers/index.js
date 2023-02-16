module.exports = () => {
    const controller = {};
    controller.index = (req, res) => {res.status(200).render("index")}

    return controller
};