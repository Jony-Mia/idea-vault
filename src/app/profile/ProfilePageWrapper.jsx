// 'use client';

// import Profile from '@/component/Profile';
// import { ProtectedRoute } from '@/component/ProtectedRoute';
// import { useSession } from '@/lib/auth-client';
// import { useEffect, useState } from 'react';
// import { UserInsertedIdeas } from '../api/api';

// export default function ProfilePageWrapper({ UserInputedIdeas: initialIdeas }) {
//     const [ideas, setIdeas] = useState(initialIdeas);
//     const [isLoading, setIsLoading] = useState(false);
//     const { data: sessionData } = useSession();

//     useEffect(() => {
//         // Refetch ideas when session updates
//         if (sessionData?.user) {
//             const fetchIdeas = async () => {
//                 try {
//                     setIsLoading(true);
//                     const data = await UserInsertedIdeas();
//                     setIdeas(data);
//                 } catch (error) {
//                     console.error('Error fetching ideas:', error);
//                 } finally {
//                     setIsLoading(false);
//                 }
//             };

//             fetchIdeas();
//         }
//     }, [sessionData?.user]);

//     return (
//         <ProtectedRoute redirectTo="/signup">
//             <Profile UserInputedIdeas={ideas} />
//         </ProtectedRoute>
//     );
// }
