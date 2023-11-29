import React from 'react';
import Card from '../../shared/UI/Card';

import UserItem from './UserItem';
import * as classes from './UserList.module.css';

const UserList = props => {
console.log('Hello' ,props)
    if (props?.users?.length == 0) {
        return <div className="text-center text-3xl">
           <Card>
            No User Found
            </Card>
        </div>
    }
    return (
        <ul className={`grid grid-cols-3 gap-3 w-full ${classes.user}`}>
            {
                props?.users?.map(user => (
                    <UserItem key={user.id}
                        id={user.id}
                        name={user.name}
                        image={user.image}
                        placeCount={user.places}
                    />
                ))
            }
        </ul>
    )
}

export default UserList