import axios, { create } from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000'})

export const GetIdeas = async ()=> {
    let ideasData = await API.get('/ideas');
    return ideasData.data
}
export const GetIdeaDetails = async (id)=> {
    let ideasData = await API.get(`/ideas/${id}`);
    return ideasData.data;
}
export const PostUserIdea = async (data, id)=>{
    
    let CreateIdea = await API.patch(`/userCreated/${id}`,data);
    return CreateIdea.data;
}