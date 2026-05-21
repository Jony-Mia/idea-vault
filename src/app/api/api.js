import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000'})

export const GetIdeas = async ()=> {
    let ideasData = await API.get('/ideas');
    return ideasData.data
}
export const GetIdeaDetails = async (id)=> {
    let ideasData = await API.get(`/ideas/${id}`);
    return ideasData.data;
}
