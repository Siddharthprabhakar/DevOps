import { query } from '../connect.js'

async function validateLogin(user) {
    console.log(user.email);
    console.log(user.password);
    const data = await query('CALL GetUserDetails(?, ?)', [user.email, user.password]);
    if(data[0][0])
        return data[0][0];
    else
        return null;
}

async function createUser(user) {
    try {
        const insertResult = await query('INSERT INTO User(name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.password]);
        
        if (insertResult) {
            const selectResult = await query('SELECT userid FROM User WHERE email = ?', [user.email]);
            
            if (selectResult && selectResult[0] && selectResult[0].userid) {
                return selectResult[0].userid;
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }

    return null;
}


async function createStudent(student) {
    try {
        const userid = await createUser({ name: student.name, email: student.email, password: student.password });
        if (userid)
            student.userid = userid;
        else
            student.userid = null;
        const data = await query('INSERT INTO Student(userid, education_level) VALUES(?, ?)', [student.userid, student.education_level]);
        if (data) {
            const userDetails = await validateLogin(student)
            return userDetails;
        }
        else
            return null;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }   
}

async function createInstructor(instructor) {
    try {
        const userid = await createUser({ name: instructor.name, email: instructor.email, password: instructor.password });
        if (userid)
            instructor.userid = userid;
        else
            instructor.userid = null;
        const data = await query('INSERT INTO Instructor(userid, qualification, expertise) VALUES(?, ?, ?)', [instructor.userid, instructor.qualification, instructor.expertise]);
        if (data) {
            const userDetails = await validateLogin(instructor)
            return userDetails;
        }
        else
            return null;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }   
}

export { validateLogin, createUser, createStudent, createInstructor }