export const LevelBadge = ({ level }) => {
  const styles = {
    Master: "bg-yellow-100 text-yellow-800",
    Contributor: "bg-blue-100 text-blue-800",
    Newbie: "bg-gray-100 text-gray-800",
  };
  return (
    <span
      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
        styles[level] || styles.Newbie
      }`}
    >
      {level}
    </span>
  );
};
