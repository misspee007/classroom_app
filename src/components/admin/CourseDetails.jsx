import { useContext } from "react";
import { DataContext } from "../../App";
import { useParams, useNavigate } from "react-router-dom";
import "../../stylesheets/courses.css";
import teacher from "../../assets/teacher.svg";

const CourseDetails = () => {
  const courseData = useContext(DataContext);
  const navigate = useNavigate();
  let { id } = useParams();


  return (
    <>
      {courseData.map((course) => {
        // eslint-disable-next-line eqeqeq
        if (course.id == id) {
          return (
            <section className="course-details" key={course.id}>
              <div className="head">
                <button className="back" onClick={() => navigate(-1)}>
                  back
                </button>
                <div className="title">
                  <h1>{course.name.toUpperCase()}</h1>
                  <img src={teacher} alt="teacher" />
                </div>
              </div>
              <div className="body">
                <h2>Intro</h2>
                <p>{course.details.intro}</p>
                <h2>Branches</h2>
                <ul>
                  {course.details.branches.map((branch) => (
                    <li>{branch}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        }
        return null;
      })}
    </>
  );
};

export default CourseDetails;
