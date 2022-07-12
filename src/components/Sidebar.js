function Sidebar({ products }) {
  let sizes = products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  return (
    <aside className="flex-20 sidebar">
      <div className="flex wrap">
        {uniqueSizes.map((size, index) => (
          <span className="size" key={index}>{size}</span>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
