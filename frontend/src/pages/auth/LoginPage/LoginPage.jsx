
import Input from "../../../components/forms/Input/Input";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
    const fields = {
        username: "text",
        password: "password",
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>

                <div className={styles.loginHeader}>
                    <span className={styles.loginTag}>
                        SYSTEM ACCESS // 001
                    </span>

                    <h2>WELCOME TO THE GRID</h2>
                    <p>Confirm your identity in the digital frontier.</p>
                </div>

                <form className={styles.loginForm}>
                    {Object.entries(fields).map(([name, type]) => (
                        <Input
                            key={name}
                            name={name}
                            type={type}
                            label={name.replace("_", " ").toUpperCase()}
                            placeholder={`Enter ${name.replace("_", " ")}`}
                        />
                    ))}

                    <button type="submit" className={styles.loginBtn}>
                        START
                        <span>↗</span>
                    </button>
                </form>

                <div className={styles.loginFooter}>
                    <span className={styles.statusDot}></span>
                    SYSTEM ONLINE
                    <span>ENCRYPTED CONNECTION</span>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;
