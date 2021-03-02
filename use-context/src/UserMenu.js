import React, { useEffect, useState } from 'react';
import UserContext from './UserContext';

const UserMenu = ({onLogout}) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const avatarRef = React.createRef();

  useEffect(() => {
    return () => {
      document.addEventListener('click', hideMenu);
    }
  }, [])

  useEffect(() => {
    return () => {
      document.removeEventListener('click', hideMenu);
    }
  }, [])


  const hideMenu = e => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if (e.target !== avatarRef.current) {
   setMenuVisible(false)
    }
  };

 const  toggleMenu = () => {
  setMenuVisible(!menuVisible)
  };


    return (
      <UserContext.Consumer>
        {user => (
          <div className="UserMenu">
            <img
              className="UserAvatar"
              alt="User avatar"
              src={user.avatar}
              onClick={toggleMenu}
              ref={avatarRef}
            />
            {menuVisible && (
              <ul>
                <li onClick={onLogout}>Logout</li>
              </ul>
            )}
          </div>
        )}
      </UserContext.Consumer>
    );
  }

export default UserMenu;
