import React from 'react'
import UserList from '../components/UserList'

const List = () => {
    return (
        <div className="container x-1">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <UserList />
                </div>
            </div>
        </div>
    )
}

export default List
