import React from 'react';
import SpinnerApp from '../../../containers/spinner';
import { Table, Button } from 'antd';

const columns = [
    {title:'Username',dataIndex: 'username'},
    {title:'Name',dataIndex: 'name'},
    {title:'Email',dataIndex: 'email'},
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (record) => <Button onClick={() => alert(record.id)} type="danger" shape="round" />,
      }
];

const displayList = ({data, loaded}) => {
    if(! loaded)
        return(<SpinnerApp />);
    else if(data.length === 0)
        return(<>No users. :(</>);
    else
        return(
            <Table columns={columns} dataSource={data} size="small" />
        );
}

const UserList = (props) => {
    return(
        <>{displayList(props)}</>
    );
}

export default UserList;