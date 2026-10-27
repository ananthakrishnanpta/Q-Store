
import styles from "./AboutPage.module.css";

const About = () => {
    return (
        <main className={styles.about}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroGrid} />

                <div className={styles.heroContent}>
                    <div className={styles.systemTag}>
                        <span className={styles.dot} />
                        Q-SHOP NETWORK // ESTABLISHED
                    </div>

                    <h1>
                        WELCOME TO
                        <br />
                        THE <span>GRID.</span>
                    </h1>

                    <p className={styles.heroText}>
                        A next-generation digital shopping experience.
                        Discover your essentials, explore new possibilities,
                        and experience commerce beyond the ordinary.
                    </p>

                    <div className={styles.heroActions}>
                        <a href="/products" className={styles.primaryButton}>
                            EXPLORE PRODUCTS <span>↗</span>
                        </a>

                        <a href="#our-mission" className={styles.secondaryButton}>
                            OUR MISSION <span>↓</span>
                        </a>
                    </div>

                    <div className={styles.heroCoordinates}>
                        <span>SECTOR 01</span>
                        <span>NETWORK STATUS: ONLINE</span>
                    </div>
                </div>

                {/* Futuristic graphic */}
                <div className={styles.heroVisual} aria-hidden="true">
                    <div className={styles.outerRing}>
                        <div className={styles.middleRing}>
                            <div className={styles.innerRing}>
                                <div className={styles.core}>
                                    <span>Q</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.orbitLabel}>
                        <span>◈</span> DIGITAL COMMERCE
                    </div>

                    <div className={styles.visualCode}>
                        QS-001
                        <br />
                        GRID_CORE_ACTIVE
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statIndex}>01 //</span>
                    <strong>01</strong>
                    <span>UNIFIED MARKETPLACE</span>
                </div>

                <div className={styles.stat}>
                    <span className={styles.statIndex}>02 //</span>
                    <strong>24/7</strong>
                    <span>DIGITAL ACCESS</span>
                </div>

                <div className={styles.stat}>
                    <span className={styles.statIndex}>03 //</span>
                    <strong>∞</strong>
                    <span>POSSIBILITIES</span>
                </div>
            </section>

            {/* Mission */}
            <section
                id="our-mission"
                className={styles.mission}
            >
                <div className={styles.sectionHeading}>
                    <span className={styles.eyebrow}>
                        SECTOR 02 // PURPOSE
                    </span>

                    <h2>
                        BUILT FOR THE
                        <br />
                        <span>NEXT GENERATION.</span>
                    </h2>
                </div>

                <div className={styles.missionContent}>
                    <div className={styles.missionIcon}>
                        <span>◈</span>
                    </div>

                    <div>
                        <h3>OUR MISSION</h3>

                        <p>
                            Q-Shop is built around one simple idea:
                            online shopping should feel effortless,
                            intuitive, and enjoyable. We bring products
                            together in a clean, accessible digital
                            environment designed to make discovery easier.
                        </p>

                        <p>
                            From browsing the catalogue to managing your
                            cart, every interaction is designed to keep
                            you in control of your shopping experience.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className={styles.features}>
                <div className={styles.sectionHeading}>
                    <span className={styles.eyebrow}>
                        SECTOR 03 // SYSTEM CAPABILITIES
                    </span>

                    <h2>
                        THE <span>ADVANTAGE.</span>
                    </h2>

                    <p>
                        The core systems powering your Q-Shop experience.
                    </p>
                </div>

                <div className={styles.featureGrid}>
                    <article className={styles.featureCard}>
                        <span className={styles.featureNumber}>01</span>
                        <span className={styles.featureIcon}>⌕</span>

                        <h3>DISCOVER</h3>

                        <p>
                            Explore the product catalogue and find
                            items that fit your needs.
                        </p>

                        <span className={styles.featureFooter}>
                            SEARCH PROTOCOL
                        </span>
                    </article>

                    <article className={styles.featureCard}>
                        <span className={styles.featureNumber}>02</span>
                        <span className={styles.featureIcon}>◈</span>

                        <h3>TAKE CONTROL</h3>

                        <p>
                            Manage quantities, review item totals,
                            and organize your shopping cart.
                        </p>

                        <span className={styles.featureFooter}>
                            INVENTORY CONTROL
                        </span>
                    </article>

                    <article className={styles.featureCard}>
                        <span className={styles.featureNumber}>03</span>
                        <span className={styles.featureIcon}>⟡</span>

                        <h3>KEEP IT SIMPLE</h3>

                        <p>
                            Navigate a clear, responsive interface
                            built for desktop and mobile screens.
                        </p>

                        <span className={styles.featureFooter}>
                            USER EXPERIENCE
                        </span>
                    </article>
                </div>
            </section>

            {/* Closing CTA */}
            <section className={styles.cta}>
                <span className={styles.eyebrow}>
                    SECTOR 04 // YOUR NEXT MOVE
                </span>

                <h2>
                    READY TO ENTER
                    <br />
                    THE <span>GRID?</span>
                </h2>

                <p>
                    Your next discovery is only one connection away.
                </p>

                <a href="/products" className={styles.primaryButton}>
                    ENTER THE MARKETPLACE <span>↗</span>
                </a>

                <div className={styles.ctaLine} />
            </section>
        </main>
    );
};

export default About;
