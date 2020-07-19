import {NextApiHandler} from 'next';
import data from '../../data/data.json';

const User: NextApiHandler = (req, res) => {
    const {id} = req.query;
    const userData = data.find(x => String(x.id) === String(id))
    if(userData) res.status(200).json(userData);
    else res.status(404).end();
    console.log(id);
}

export default User