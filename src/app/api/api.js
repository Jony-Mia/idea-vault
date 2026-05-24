import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:4000'})

export const GetIdeas = async ()=> {
    let ideasData = await API.get('/ideas');
    return ideasData.data;
}
// Get Details of Ideas
export const GetIdeaDetails = async (id)=> {
    let ideasData = await API.get(`/ideas/${id}`);
    return ideasData.data;
}
// Create Ideas
export const PostUserIdea = async (data, id)=>{
    let CreateIdea = await API.post(`/userCreated`,{data,id});
    return CreateIdea.data;
}
// Ideas inserted by user
export const UserInsertedIdeas = async ()=>{
    const userIdeas= await API.get(`/userCreatedIdeas/`);
    console.log(id)
    return userIdeas.data;
}
export const ProfileIdeas = async (id)=>{
    const userIdeas= await API.get(`/profileIdeas/${id}`,id);
    console.log(id)
    return userIdeas.data;
}
// Update user Name
export const UpdateUserName = async (data,id)=>{
    const updateName = await API.patch(`/userNameUpdate/${id}`,data);
    return updateName.data;
}
// Delete ideas
export const DeleteUserIdea= async (idea, id)=>{
    const deleteIdea= await API.patch(`/deleteUserIdea/`,id)
    return deleteIdea.data;
}
// Update user ideas
export const UpdateUserIdea = async (formData, id)=>{
    const newIdea = await API.patch(`/updateUserIdes/${id}`,formData);
    return newIdea.data;
}