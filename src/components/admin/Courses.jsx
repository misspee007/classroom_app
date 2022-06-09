import "../../stylesheets/courses.css";
import { useContext } from "react";
import { DataContext } from "../../App";
import { Link } from "react-router-dom";

const Courses = () => {
  const data = useContext(DataContext);

  return (
    <section className="course-page">
      {data.map((course) => (
        <div key={course.id}>
          <Link to={`/admin/courses/${course.id}`}>
            <div className="course-card">
              <h2>{course.name.toUpperCase()}</h2>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Courses;
