'use client';
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const router = useRouter();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            email: form.email,
            password: form.password,
            redirect: false
        });

        if (res.ok) router.push("/dashboard"); // change to your protected route
        else alert("Invalid login");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Log In</button>
        </form>
    );
}
