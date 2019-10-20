import React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import '../form/form.css';

class MyTable extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
    };
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
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
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  render() {
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'first_name',
        key: 'first_name',
        ...this.getColumnSearchProps('first_name'),
      },
      {
        title: 'Last Name',
        dataIndex: 'last_name',
        key: 'last_name',
        ...this.getColumnSearchProps('last_name'),
      },
      {
        title: 'BirthDay',
        dataIndex: 'birth_day',
        key: 'birth_day',
        ...this.getColumnSearchProps('birth_day'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        ...this.getColumnSearchProps('age'),
      },
      {
        title: 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
        ...this.getColumnSearchProps('hobby'),
      },
    ];
    return <div className="main-form">
    <h2 className="register-title">Users Table</h2>
    <Table columns={columns} dataSource={this.props.data} />
    </div>;
  }
}

export default MyTable;
