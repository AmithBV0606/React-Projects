import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    const {userpassword} = useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return (
    <>
        <div>
            Welcome {user.username}
        </div>

        <div>
            Your Password is {userpassword.password}
        </div>
    </>
    );
}

export default Profile