import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000'})

export const GetIdeas = async ()=> {
    let ideasData = await API.get('/ideas');
    return ideasData.data;
}
export const GetIdeaDetails = async (id)=> {
    let ideasData = await API.get(`/ideas/${id}`);
    return ideasData.data;
}
export const PostUserIdea = async (data, id)=>{
    let CreateIdea = await API.post(`/userCreated`,{data,id});
    return CreateIdea.data;
}

export const UserInsertedIdeas = async (id)=>{
    const userIdeas= await API.get("/userCreatedIdeas");
    return userIdeas.data[0];
}
export const UpdateUserName = async (data,id)=>{
    const updateName = await API.patch(`/userNameUpdate/${id}`,data);
    return updateName.data;
}
export const DeleteUserIdea= async (idea, id)=>{
    const deleteIdea= await API.patch(`/deleteUserIdea/`,id)
    return deleteIdea.data;
}
export const UpdateUserIdea = async (formData, id)=>{
    const newIdea = await API.patch(`/updateUserIdes/${id}`,formData);
    return newIdea.data;
}