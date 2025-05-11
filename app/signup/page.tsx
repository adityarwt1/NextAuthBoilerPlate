'use client';
import { useState } from "react";
import React from "react";

export default function SignupPage() {
    const [form, setForm] = useState({ username: "", email: "", password: "" });

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
            <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Sign Up</button>
        </form>
    );
}
