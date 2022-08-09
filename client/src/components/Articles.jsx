import { useEffect, useState } from 'react';
import {Box} from '@mui/material'
import { getData } from '../service/api'; 

//components
import Article from './Article';

const Articles = () =>{ 
    
    const[session, setSession] = useState([]);

    useEffect(() =>{
        sessionsData();
},[]);

    const sessionsData = async () =>{
        let response = await getData();
        setSession(response.data.sort((a,b) => a.date -b.date));
    }
    
    return(
        <Box >
            {
                
                session.map(data =>(
                    <Article data = {data}/>
                ))
            }
        </Box>
    )
}
export default Articles;