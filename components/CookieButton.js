import Image from "next/image";

export default function CookieButton({ setCookieCount }) {
  const handleClick = () => {
    setCookieCount((prev) => prev + 1);
  };

  return (
    <div className="button-container">
      <button onClick={handleClick} className="cookie-button">
        <Image src="/cookie.png" width={500} height={500} alt="Cookie" />
      </button>
    </div>
  );
}
