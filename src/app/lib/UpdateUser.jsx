"user client"
import { useSession } from '@/lib/auth-client';
import { Button, Input, Label, TextField } from '@heroui/react';
import { useState } from 'react';
import { UpdateUserName } from '../api/api';

const UpdateUser = ({ userId }) => {

    const [statusMessage, setStatusMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [updating, setUpdating] = useState(false);
    const [nameTouched, setNameTouched] = useState(true);
    const [name, setName] = useState("");

    const { data } = useSession();
    const user = data?.user;
    // const [name, setName] = useState("");
    const displayName = nameTouched ? name : user?.name || "";
    const shortName = user?.name
    const handleUpdateName = async (event) => {
        event.preventDefault();
        const name = event.target;
        const form = new FormData(name);
        const formData = Object.fromEntries(form.entries())

        console.log(formData);
        console.log(name);
        await UpdateUserName(formData, userId)
        window.location.reload()

    };
    return (
        <div>
            <form onSubmit={handleUpdateName} className="grid gap-6">
                <div className="grid gap-2">
                    <TextField name="name" defaultValue={shortName} onChange={(event) => {
                        setName(event.target.value);
                    }}>
                        <Label className="text-sm font-semibold text-slate-800">
                            Display name
                        </Label>
                        <Input
                            placeholder="Enter your name"
                            required
                        />
                    </TextField>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        {statusMessage && <p className="text-sm text-emerald-600">{statusMessage}</p>}
                        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
                    </div>
                    <Button type="submit" disabled={updating} className="w-full sm:w-auto">
                        {updating ? "Updating..." : "Update name"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;