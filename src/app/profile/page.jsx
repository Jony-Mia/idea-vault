
// import ProfilePageWrapper from './ProfilePageWrapper';
import Profile from '@/component/Profile';
import { UserInsertedIdeas } from '../api/api';

export default async function ProfilePage() {
    let UserInputedIdeas = null;

    try {
        UserInputedIdeas = await UserInsertedIdeas();
    } catch (error) {
        console.error('Error fetching user ideas:', error);
    }

    return <Profile UserInputedIdeas={UserInputedIdeas} />
}

