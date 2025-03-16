export default function UpgradeButton({
  upgrade,
  setUpgrade,
  setCookieCount,
  cookieCount,
}) {
  const upgradeCost = 2 ** upgrade;

  const handleClick = () => {
    if (cookieCount >= upgradeCost) {
      setCookieCount((prev) => prev - upgradeCost);
      setUpgrade((prev) => prev + 1);
    }
  };

  return (
    <div className="button-container">
      <button onClick={handleClick} className="upgrade-button">
        Upgrade For {upgradeCost} Cookies
      </button>
      <p>Level: {upgrade}</p>
    </div>
  );
}
