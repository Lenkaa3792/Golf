import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import NewGolfCourse from "./NewGolfCourse";
import GolfItem from "./GolfItem";
const GolfList = () => {
  const [courses, setCourses] = useState([]);
  function handleAddCourse(newcourse) {
    setCourses([...courses, newcourse]);
  }
  useEffect(() => {
    fetch("https://golfbakend.herokuapp.com/courses")
      .then((res) => res.json())
      .then((courses) => setCourses(courses));
  }, []);
  const courseList = courses.map((course) => {
    return (
        <GolfItem key={course.id} course={course} />
    ) 
  });
  return (
    <div className="list">
        <h4>Golf Courses in Kenya</h4>
      {courseList}
      <NewGolfCourse courses={courses} onAddCourse={handleAddCourse} />
    </div>
  );
};
export default GolfList;
