export default function AutoClickButton({ setAutoClick, cookieCount }) {
  const autoClickCost = 10;

  const handleClick = () => {
    if (cookieCount >= autoClickCost && !autoClick) {
    }
  };

  return (
    <div className="button-container">
      <button onClick={handleClick} className="autoclick-button">
        Enable Auto Click For {autoClickCost} Cookies
      </button>
    </div>
  );
}
