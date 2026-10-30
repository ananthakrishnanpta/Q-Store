
import Input from "../../../components/forms/Input/Input";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
    const fields = {
        username: "text",
        email: "email",
        password: "password",
        confirm_password: "password"
    };

    return (
        <div className={styles.registerPage}>
            <div className={styles.registerCard}>

                <div className={styles.registerHeader}>
                    <span className={styles.registerTag}>
                        SYSTEM ACCESS // 001
                    </span>

                    <h2>JOIN THE GRID</h2>
                    <p>Create your identity in the digital frontier.</p>
                </div>

                <form className={styles.registerForm}>
                    {Object.entries(fields).map(([name, type]) => (
                        <Input
                            key={name}
                            name={name}
                            type={type}
                            label={name.replace("_", " ").toUpperCase()}
                            placeholder={`Enter ${name.replace("_", " ")}`}
                        />
                    ))}

                    <button type="submit" className={styles.registerBtn}>
                        INITIALIZE ACCOUNT
                        <span>↗</span>
                    </button>
                </form>

                <div className={styles.registerFooter}>
                    <span className={styles.statusDot}></span>
                    SYSTEM ONLINE
                    <span>ENCRYPTED CONNECTION</span>
                </div>

            </div>
        </div>
    );
};

export default RegisterPage;
