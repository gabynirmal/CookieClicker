"use client";

import styles from "./styles.css";
import { useState } from "react";
import CookieButton from "../../components/CookieButton";
import UpgradeButton from "../../components/UpgradeButton";

export default function Home() {
  const [cookieCount, setCookieCount] = useState(0);
  const [upgrade, setUpgrade] = useState(1);

  return (
    <div className="container">
      <h1>Cookie Clicker</h1>
      <p>Cookies: {cookieCount}</p>
      <CookieButton setCookieCount={setCookieCount} />
      <UpgradeButton
        upgrade={upgrade}
        setUpgrade={setUpgrade}
        setCookieCount={setCookieCount}
        cookieCount={cookieCount}
      />
    </div>
  );
}
