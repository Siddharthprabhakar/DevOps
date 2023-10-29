import { query } from '../connect.js'

async function getCertificate(id) {
    const data = await query('CALL GetCertificate(?);', [id] );
    if(data[0][0])
        return data[0][0];
    else
        return null
}

export { getCertificate }

