import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../login/login.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FormLogin: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://stampingrobotapi-d0fpc6ghfggaf5az.southeastasia-01.azurewebsites.net/api/authen/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
            if (response.ok && data.accessToken) {
                console.log("Login Success:", data);
            
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);
            
                console.log("Token sau khi lưu:", localStorage.getItem("accessToken")); // Kiểm tra
            
                router.push("/user");
            }
             else {
                throw new Error(data.message || "Login failed. Please check your credentials.");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleLogin}>
                <h3 className={styles.title}>Login Here</h3>
                {error && <p className={styles.error}>{error}</p>}
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    className={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? "Logging in..." : "Log In"}
                </button>
                <p className={styles.socialText}>Login with a social media account</p>
                <div className={styles.socialIcons}>
                    <button className={styles.socialIcon} aria-label="Login with Facebook">
                        <FaFacebook />
                    </button>
                    <button className={styles.socialIcon} aria-label="Login with Twitter">
                        <FaTwitter />
                    </button>
                    <button className={styles.socialIcon} aria-label="Login with Instagram">
                        <FaInstagram />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormLogin;