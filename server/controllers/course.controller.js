import { query } from '../connect.js'

async function getAllCourses(){
  const data = await query(
    `SELECT * from course`
  );
    
  return data;
}

export { getAllCourses }