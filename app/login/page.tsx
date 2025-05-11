'use client';
import { useState } from "react";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Log In</button>
        </form>
    );
}
