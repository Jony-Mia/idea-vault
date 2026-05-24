import Profile from '@/component/Profile';
import { ProfileIdeas } from '../api/api';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function ProfilePage() {
    let session = await auth.api?.getSession({
        headers: await headers()
    });

    console.log(session);
    const userId = session.user?.id
    let UserInputedIdeas = await ProfileIdeas(userId);

    return <Profile UserInputedIdeas={UserInputedIdeas} />
}

