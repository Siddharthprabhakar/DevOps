import { query } from '../connect.js'

async function getAllCourses(){
  const data = await query(
    `SELECT * from course`
  );
    
  return data;
}

async function getCourseInfo(id) {
    // Check if id is undefined and set it to null if it is
    if (id === undefined) {
      id = null;
    }
    
    const data = await query('CALL GetCourseDetails(?)', [id]);
    if(data[0][0])
        return data[0][0];
    else
        return null;
}

export { getAllCourses, getCourseInfo }