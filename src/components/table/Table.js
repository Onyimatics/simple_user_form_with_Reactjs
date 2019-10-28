import React, { useState } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import '../form/form.css';

const MyTable = (props) => {
  const [searchText, setSearchText] = useState("")

  let searchInput;
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
  });

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0])
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("")
  };

    const columns = [
      // {
      //   title: 'User Id',
      //   dataIndex: 'id',
      //   key: 'id',
      //   ...getColumnSearchProps('id'),
      // },
      {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
        ...getColumnSearchProps('first_name'),
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
        ...getColumnSearchProps('last_name'),
      },
      {
        title: 'BirthDay',
        dataIndex: 'birth_day',
        key: 'birth_day',
        ...getColumnSearchProps('birth_day'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        ...getColumnSearchProps('age'),
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
        ...getColumnSearchProps('hobby'),
      },
    ];
    return <div className="main-form">
    <h2 className="register-title">Users Table</h2>
    <Table columns={columns} dataSource={props.data} />
    </div>;
  }

export default MyTable;
