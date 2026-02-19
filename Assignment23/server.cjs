const express = require('express');
const app = express();

app.use(express.json()); // IMPORTANT for JSON body

// Fake database (in-memory)
let courses = [];

/*
--------------------------------------------------
1️⃣ ADD COURSE
--------------------------------------------------
*/
app.post('/courses', (req, res) => {
    const { courseId, courseName, duration } = req.body;

    if (!courseId || !courseName || !duration) {
        return res.status(400).json({ message: "All fields required" });
    }

    const existingCourse = courses.find(c => c.courseId === courseId);

    if (existingCourse) {
        return res.status(400).json({ message: "Course already exists" });
    }

    const newCourse = { courseId, courseName, duration };
    courses.push(newCourse);

    res.json({ message: "Course added successfully", course: newCourse });
});

/*
--------------------------------------------------
2️⃣ LIST COURSES
--------------------------------------------------
*/
app.get('/courses', (req, res) => {
    res.json(courses);
});

/*
--------------------------------------------------
3️⃣ UPDATE COURSE
--------------------------------------------------
*/
app.put('/courses/:id', (req, res) => {
    const courseId = req.params.id;
    const { courseName, duration } = req.body;

    const course = courses.find(c => c.courseId == courseId);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    if (courseName) course.courseName = courseName;
    if (duration) course.duration = duration;

    res.json({ message: "Course updated", course });
});

/*
--------------------------------------------------
4️⃣ DELETE COURSE
--------------------------------------------------
*/
app.delete('/courses/:id', (req, res) => {
    const courseId = req.params.id;

    const index = courses.findIndex(c => c.courseId == courseId);

    if (index === -1) {
        return res.status(404).json({ message: "Course not found" });
    }

    const deletedCourse = courses.splice(index, 1);

    res.json({ message: "Course deleted", course: deletedCourse });
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
