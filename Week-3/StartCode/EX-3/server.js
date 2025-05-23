// server.js
import express from 'express';
import courses from '../EX-2/course.js';
import logger from './logger.js';
import validateQuery from './validateQuery.js';
import auth from './auth.js';

const app = express();
const PORT = 3000;

app.use(logger);

app.get('/departments/:dept/courses', auth, validateQuery, (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;

    let filteredCourses = courses.filter(course =>
        course.department.toLowerCase() === dept.toLowerCase()
    );

    if (level) {
        filteredCourses = filteredCourses.filter(course =>
            course.level.toLowerCase() === level.toLowerCase()
        );
    }

    if (minCredits) {
        filteredCourses = filteredCourses.filter(course =>
            course.credits >= parseInt(minCredits)
        );
    }

    if (maxCredits) {
        filteredCourses = filteredCourses.filter(course =>
            course.credits <= parseInt(maxCredits)
        );
    }

    if (semester) {
        filteredCourses = filteredCourses.filter(course =>
            course.semester.toLowerCase() === semester.toLowerCase()
        );
    }

    if (instructor) {
        filteredCourses = filteredCourses.filter(course =>
            course.instructor.toLowerCase().includes(instructor.toLowerCase())
        );
    }

    res.json(filteredCourses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});