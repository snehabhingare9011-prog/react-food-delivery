

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(20).fill("").map((_, i) => (
        <div key={i} className="shimmer-card">
          <div className="shimmer-img"></div>
          <div className="remaing-items"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
