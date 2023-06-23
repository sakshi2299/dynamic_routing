import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function UserDetails() {
  const { userId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const [data, setData] = React.useState('');

  useEffect(() => {
    const input = document.querySelector('#user-input');
    if (input) {
      input.value = data;
    }
  }, [data]);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleClick = () => {
    searchParams.set('name', data);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleSetSearchParams = () => {
    handleClick();
    const a = navigate('./NextPage'+`${location.pathname}?${searchParams.toString()}`);
    return a;
  };

  return (
    <div>
      <h1 className="text-indigo-600 m-12">User {userId}</h1>
      <h1>name {name}</h1>
      <input
        id="user-input"
        type="text"
        onChange={handleChange}
        value={data}
      />
      <button onClick={handleSetSearchParams}>setSearchParams</button>
    </div>
  );
}

export default UserDetails;
