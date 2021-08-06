const Course = require('../models/Course');
const { mongooseToObj } = require('../../util/mongoose');
class CourseController {
    // [GET] /course/:slug
    async show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObj(course),
                });
            })
            .catch(next);
    }
}

module.exports = new CourseController();
