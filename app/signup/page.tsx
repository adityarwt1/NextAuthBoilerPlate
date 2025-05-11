'use client';
import { useState } from "react";

export default function SignupPage() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/signup", {    
            method: "POST",
            body: JSON.stringify(form),
        });
        const data = await res.json();
        alert(data.message || data.error);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" required onChange={e => setForm({ ...form, username: e.target.value })} />
            <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Sign Up</button>
        </form>
    );
}
