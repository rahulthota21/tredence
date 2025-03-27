"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { Search } from "lucide-react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolling ? styles.sticky : ""}`}>
      <div className={styles.container}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          Margadarsh
        </Link>

        {/* Right Section */}
        <div className={styles.rightGroup}>
          {/* Links */}
          <nav className={styles.navLinks}>
            <Link href="/sign-in" className={styles.link}>Home</Link>
            <Link href="/sign-in" className={styles.link}>Plan a Trip</Link>
          </nav>

          {/* Search */}
          <div className={styles.search}>
            <div className={styles.inputWrapper}>
              <Search size={18} style={{ marginRight: "8px" }} />
              <input
                type="text"
                className={styles.input}
                placeholder="Search destinations"
              />
            </div>
          </div>

          {/* Auth Buttons */}
          <div className={styles.authButtons}>
            <Link href="/sign-in">
              <button className={`${styles.button} ${styles.login}`}>Sign In</button>
            </Link>
            <Link href="/sign-up">
              <button className={`${styles.button} ${styles.signup}`}>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
