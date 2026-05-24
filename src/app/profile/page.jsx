
// import ProfilePageWrapper from './ProfilePageWrapper';
import Profile from '@/component/Profile';
import { UserInsertedIdeas } from '../api/api';
import { auth } from '@/lib/auth';

export default async function ProfilePage() {
    let session = await auth.api.getSession()
    let UserInputedIdeas = null;
    console.log(session);
    
    try {
        UserInputedIdeas = await UserInsertedIdeas();
    } catch (error) {
        console.error('Error fetching user ideas:', error);
    }
    return <Profile UserInputedIdeas={UserInputedIdeas} />
}

