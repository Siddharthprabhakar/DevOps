import { query } from '../connect.js'

async function getAllCourses(){
  const data = await query(`SELECT * from course`);
    
  return data;
}

async function getCourseInfo(id) {
  // Check if id is undefined and set it to null if it is
  if (id === undefined) {
      id = null; // Consider if you really want to use null
  }

  try {
      // Call the stored procedure
      const data = await query('CALL GetCourseDetails(?)', [id]);

      // Check if data exists and return the first result
      if (data[0] && data[0][0]) {
          return data[0][0];
      } else {
          return null; // No data found
      }
  } catch (error) {
      console.error("Error fetching course info:", error);
      throw error; // Optionally rethrow the error for further handling
  }
}


async function isStudentEnrolled(courseid, studentid) {
    // Check if id is undefined and set it to null if it is
    if (courseid === undefined) {
      courseid = null;
    }
    // Check if id is undefined and set it to null if it is
    if (studentid === undefined) {
      studentid = null;
    }
    try {
      const isRegistered = await query('SELECT COUNT(*) FROM registers WHERE courseid = ? AND studentid = ?;', [courseid, studentid]);
      if(isRegistered[0]['COUNT(*)'] >= 1)
        return true;
      else
        return false;
    } catch (error) {
      console.error('Error:', error.message);
    }
}

async function createEnrollment(courseid, studentid) {
  // Check if id is undefined and set it to null if it is
  if (courseid === undefined) {
    courseid = null;
  }
  // Check if id is undefined and set it to null if it is
  if (studentid === undefined) {
    studentid = null;
  }
  try {
    const data = await query('INSERT INTO registers(courseid, studentid) VALUES(?, ?);', [courseid, studentid]);
    return data;
  } catch (error) {
    console.error('Error:', error.message);
  }

}

async function getEnrolledCourses(studentid){
  const data = await query(
    `SELECT * from course c JOIN registers r on c.courseid = r.courseid WHERE r.studentid = ?`,[studentid]
  );
    
  return data;
}

async function getTeachingCourses(instructorid) {
  const data = await query(`SELECT * from course c JOIN teaches t on c.courseid = t.courseid WHERE t.instructorid = ?`,[instructorid]);
  return data;
}

async function isInstructorTeaching(courseid,instructorid) {
  // Check if id is undefined and set it to null if it is
  if (courseid === undefined) {
    courseid = null;
  }
  // Check if id is undefined and set it to null if it is
  if (instructorid === undefined) {
    instructorid = null;
  }
  try {
    const isTeaching = await query('SELECT COUNT(*) FROM teaches WHERE courseid = ? AND instructorid = ?;', [courseid, instructorid]);
    if(isTeaching[0]['COUNT(*)'] >= 1)
      return true;
    else
      return false;
  } catch (error) {
    console.error('Error:', error.message);
  }
}
export { 
  getAllCourses, 
  getCourseInfo, 
  isStudentEnrolled, 
  createEnrollment, 
  getEnrolledCourses, 
  getTeachingCourses, 
  isInstructorTeaching 
}