import React, { useState } from 'react';

const FetchTest = () => {
    const { data } = useSession();
    const user = data?.user;
    const [ideas, setIdeas] = useState([]);
    const [loadingIdeas, setLoadingIdeas] = useState(true);
    const [name, setName] = useState("");
    const [nameTouched, setNameTouched] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [updating, setUpdating] = useState(false);
    const displayName = nameTouched ? name : user?.name || "";
    const memberSince = user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "";

    useEffect(() => {
        const fetchIdeas = async () => {
            if (!user) {
                setIdeas([]);
                setLoadingIdeas(false);
                return;
            }

            try {
                setLoadingIdeas(true);
                const response = await axios.get("http://localhost:4000/userCreated/ideas" || "https://idea-vault-backend-gray.vercel.app/userCreated/ideas");
                const payload = await response.data[0];

                if (!response.status === 200) {
                    setErrorMessage(payload?.error || "Unable to load your ideas.");
                    setIdeas([]);
                } else {
                    setIdeas(payload || []);
                }
            } catch (error) {
                setErrorMessage("Unable to load your ideas.");
                setIdeas([]);
            } finally {
                setLoadingIdeas(false);
            }
        };
        fetchIdeas()
    }, [user])
};

export default FetchTest;