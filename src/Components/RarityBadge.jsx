const RarityBadge = ({ rarity }) => {
  const styles = {
    Legendary: "bg-amber-100 text-amber-800 border-amber-300",
    Epic: "bg-purple-100 text-purple-800 border-purple-300",
    Rare: "bg-blue-100 text-blue-800 border-blue-300",
    Common: "bg-gray-100 text-gray-800 border-gray-300",
  };
  return (
    <span
      className={`text-xs font-bold px-2 py-1 rounded-full border ${
        styles[rarity] || styles.Common
      }`}
    >
      {rarity}
    </span>
  );
};
export default RarityBadge;
