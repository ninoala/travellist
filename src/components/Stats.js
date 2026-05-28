export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some items!</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked !== 100
          ? `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} or ${percentagePacked}% of items`
          : "Ready to go!"}
      </em>
    </footer>
  );
}
