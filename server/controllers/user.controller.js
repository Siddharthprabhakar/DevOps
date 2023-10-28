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

export { validateLogin }