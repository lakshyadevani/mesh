import axios from 'axios';


export const getData = async () =>{
    const URL = 'http://localhost:8000';
    try{
        console.log('hello');
        return await axios.get(`${URL}/articles`);
        
    }catch(error){
        // console.log('helloerror');
        console.log('error while calling get data api',error);
    }

}