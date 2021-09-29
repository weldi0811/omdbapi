import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  return (
    <div className="bg-blue-600 h-16" data-testid="Navbar">
      <div className="max-w-6xl p-5">
        <h1
          className="text-white font-bold text-3xl cursor-pointer"
          onClick={() => {
            history.push('/');
          }}>
          OMDb
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
