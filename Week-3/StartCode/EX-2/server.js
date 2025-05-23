// server.js
import express from 'express';
import courses from './course.js';

const app = express();
const PORT = 3000;


app.get('/departments/:dept/courses', (req, res) => {
    const { dept } = req.params;
    const { level, minCredits, maxCredits, semester, instructor } = req.query;

    // Validate credit range
    if (minCredits && maxCredits && parseInt(minCredits) > parseInt(maxCredits)) {
        return res.status(400).json({ error: 'minCredits cannot be greater than maxCredits' });
    }

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