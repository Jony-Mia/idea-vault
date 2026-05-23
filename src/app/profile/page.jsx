
import ProfilePageWrapper from './ProfilePageWrapper';
import { UserInsertedIdeas } from '../api/api';

export default async function ProfilePage() {
    let UserInputedIdeas = null;

    try {
        UserInputedIdeas = await UserInsertedIdeas();
    } catch (error) {
        console.error('Error fetching user ideas:', error);
    }

    return <ProfilePageWrapper UserInputedIdeas={UserInputedIdeas} />
}

