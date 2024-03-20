function ImageItem({ item }) {
  console.log(item.urls.full);
  return (
    <div className="image">
      <img src={item.urls.small} alt={item.alt_description} />
    </div>
  );
}

export default ImageItem;
