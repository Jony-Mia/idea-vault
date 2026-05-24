
// import ProfilePageWrapper from './ProfilePageWrapper';
import Profile from '@/component/Profile';
import { UserInsertedIdeas } from '../api/api';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function ProfilePage() {
    let session = await auth.api.getSession({
        headers: await headers()
    })
    let UserInputedIdeas = null;
    console.log(session);
    let userId = session.user.id;
    
    try {
        UserInputedIdeas = await ProfileIdeas(userId);
    } catch (error) {
        console.error('Error fetching user ideas:', error);
    }
    return <Profile UserInputedIdeas={UserInputedIdeas} />
}

