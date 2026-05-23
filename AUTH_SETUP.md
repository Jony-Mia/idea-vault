# Authentication & Protected Routes Setup

## Overview

This implementation provides a complete authentication system with:
- **Middleware-level protection** for routes
- **Client-side route protection** using ProtectedRoute component
- **Custom hooks** for auth checks
- **API protection** for secured endpoints
- **Automatic redirects** to signup for unauthorized access

---

## How It Works

### 1. **Middleware Protection** (`middleware.ts`)

The middleware runs on every request and:
- ✅ Allows access to public routes
- ❌ Redirects unauthenticated users from protected routes to `/signup`
- ✅ Checks for session cookies (better-auth)
- ✅ Preserves the original URL in redirect for post-login redirect

**Protected Routes:**
- `/profile`
- `/addIdea`
- `/ideaDetails`

**Public Routes:**
- `/`
- `/login`
- `/signup`
- `/about`
- `/resources`
- `/contact`

### 2. **Client-Side Protection** (ProtectedRoute Component)

For pages that need client-side auth verification:

```jsx
'use client';

import { ProtectedRoute } from '@/component/ProtectedRoute';
import ProfileContent from './ProfileContent';

export default function ProfilePage() {
    return (
        <ProtectedRoute redirectTo="/signup">
            <ProfileContent />
        </ProtectedRoute>
    );
}
```

**Features:**
- Shows loading state while checking auth
- Automatically redirects if not authenticated
- Graceful fallback UI

### 3. **useProtectedRoute Hook**

For components that need auth state:

```jsx
import { useProtectedRoute } from '@/hooks/useProtectedRoute';

export default function MyComponent() {
    const { isAuthorized, isLoading, user, session } = useProtectedRoute();

    if (isLoading) return <div>Loading...</div>;
    if (!isAuthorized) return <div>Not authorized</div>;

    return <div>Hello, {user?.name}!</div>;
}
```

### 4. **API Protection** (withAuth Middleware)

For protecting API routes:

```typescript
// src/app/api/protected/route.ts
import { withAuth } from '@/lib/withAuth';
import { NextRequest, NextResponse } from 'next/server';

export const POST = withAuth(async (req: NextRequest) => {
    const user = (req as any).user;
    
    return NextResponse.json({
        message: `Hello, ${user.name}!`,
        userId: user.id
    });
});
```

### 5. **Configuration** (`authConfig.ts`)

Centralized auth configuration:

```typescript
export const AUTH_CONFIG = {
    publicRoutes: [...],
    protectedRoutes: [...],
    mixedAccessRoutes: [...],
    protectedApiRoutes: [...],
    redirects: {
        unauthenticated: '/signup',
        authenticated: '/profile',
    }
};
```

---

## Usage Examples

### Example 1: Protect a Page

```jsx
// src/app/mypage/page.jsx
'use client';

import { ProtectedRoute } from '@/component/ProtectedRoute';

export default function MyPage() {
    return (
        <ProtectedRoute redirectTo="/signup">
            <div>This page is protected</div>
        </ProtectedRoute>
    );
}
```

### Example 2: Access User Data

```jsx
'use client';

import { useUser } from '@/context/UserContextProvider';

export default function UserInfo() {
    const { user } = useUser();

    return <div>Hello, {user?.name}!</div>;
}
```

### Example 3: Redirect After Login

After user logs in, they can be redirected to their intended page:

```jsx
// In signup/login page
const searchParams = useSearchParams();
const redirect = searchParams.get('redirect');

// After successful login
router.push(redirect || '/profile');
```

---

## Data Access for Authenticated Users

All app data is automatically accessible to authenticated users:

1. **User Data**: Available via `useUser()` hook
2. **Ideas Data**: Available via `useIdeas()` hook  
3. **Session Data**: Available via `useSession()` from better-auth

```jsx
'use client';

import { useUser } from '@/context/UserContextProvider';
import { useIdeas } from '@/context/IdeasContextProvider';

export default function Dashboard() {
    const { user } = useUser();
    const { ideas } = useIdeas();

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            <p>You have {ideas.length} ideas</p>
        </div>
    );
}
```

---

## Security Flow Diagram

```
┌─────────────────────────┐
│  User Request to Page   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Middleware Checks Route│
└────────────┬────────────┘
             │
        ┌────┴────┐
        │          │
    Public?    Protected?
        │          │
        │    ┌─────▼──────┐
        │    │ Check Auth  │
        │    └─────┬──────┘
        │          │
        │      ┌───┴───┐
        │      │        │
        │   Valid?   Invalid?
        │      │        │
        │      │    Redirect
        │      │        │
        ▼      ▼        ▼
      Allow  Allow   /signup
```

---

## Environment Variables

Ensure these are set in your `.env.local`:

```env
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

---

## Testing Authentication

1. **Test Protected Route:**
   - Visit `/profile` without logging in → Should redirect to `/signup`
   - Log in → Should access `/profile` normally

2. **Test Data Access:**
   - After login, all ideas and user data should be accessible
   - Check browser cookies for `better-auth.session_token`

3. **Test Logout:**
   - After logout, revisiting protected routes should redirect to `/signup`

---

## Common Issues

### Issue: Still seeing protected page without login
**Solution:** Clear browser cookies and cache, then try again

### Issue: Redirect loop
**Solution:** Check that auth tokens are being set correctly in the API response

### Issue: Data not loading for authenticated user
**Solution:** Verify that the session is properly established before fetching data

---

## Future Enhancements

- [ ] Add role-based access control (RBAC)
- [ ] Implement refresh token rotation
- [ ] Add session timeout warnings
- [ ] Implement two-factor authentication
- [ ] Add audit logging for sensitive operations
