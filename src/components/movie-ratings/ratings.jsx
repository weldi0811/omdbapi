const Ratings = ({ ratings }) => {
  return ratings.map((item, index) => {
    return (
      <p className="font-normal md:mx-1" key={index}>
        {item.Source} : {item.Value}
      </p>
    );
  });
};

export default Ratings;
