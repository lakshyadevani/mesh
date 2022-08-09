import axios from 'axios';


export const getData = async () =>{
    const URL = 'https://meshbackendiitjammu.herokuapp.com';
    try{
        console.log('hello');
        return await axios.get(`${URL}/articles`);
        
    }catch(error){
        // console.log('helloerror');
        console.log('error while calling get data api',error);
    }

}