import React, { Component } from "react";
import { Table, Input, Button, Popconfirm, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

import "firebase/firestore";
import firebase from "../../Firebase/FirebaseConfig";
import BulkUpload from "./BulkUpload";
import "./Table.css";
import { locations } from "../../Constants/location";
import { EditableCell, EditableRow } from "./TableFunctions";

var db = firebase.firestore();

export class PatientTable extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "ID",
        dataIndex: "id",
        ...this.getColumnSearchProps("id"),
      },
      {
        title: "Name",
        dataIndex: "name",
        editable: true,
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "Phone Number",
        dataIndex: "phone",
        editable: true,
        ...this.getColumnSearchProps("phone"),
      },
      {
        title: "Oxygen Saturation",
        dataIndex: "saturationLevel",
        editable: true,
      },
      {
        title:"Last Updated",
        dataIndex:"timestamp",
        editable:false
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title='Sure to delete?'
              onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [],
      count: 0,
      emptyTableText: "",
    };

    db.collection("Patients")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (querySnapshot) => {
          var data = [];
          querySnapshot.forEach((doc) => {
            const timestamp = doc.data().timestamp.toDate()
            const date = timestamp.getDate()
            const month = timestamp.getMonth()
            const year = timestamp.getFullYear()
            const hours = timestamp.getHours()
            const mins = timestamp.getMinutes() 

            const lastupdated = date+"/"+ month+"/"+ year + "  "+ hours+":"+ mins
           
            data.push({
              id: doc.id,
              name: doc.data().name,
              phone: doc.data().phone,
              saturationLevel: doc.data().saturationLevel,
              key: doc.id,
              timestamp:lastupdated,

            });
          });
          this.setState({ dataSource: data, count: data.length });
        },
        (error) => {
          console.log("Error", error);
          this.setState({
            emptyTableText: "Not Authorized",
          });
        }
      );
  }
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type='link'
            size='small'
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}>
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  returnLocation = () => {
    return locations.map((location) => {
      return {
        text: location,
        value: location,
      };
    });
  };

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];

    db.collection("Patients")
      .doc(key)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: "Enter Name Here",
      phone: "",
      saturationLevel: "",
      newItem: true,
    };
    this.setState({
      dataSource: [newData, ...dataSource],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    if (row.newItem) {
      db.collection("Patients").add({
        name: row.name ? row.name : "",
        phone: row.phone ? row.phone : "",
        saturationLevel: row.saturationLevel ? row.saturationLevel : "",
        timestamp: new Date(),
      });
    } else {
      db.collection("Patients")
        .doc(row.key)
        .set({
          name: row.name ? row.name : "",
          phone: row.phone ? row.phone : "",
          saturationLevel: row.saturationLevel ? row.saturationLevel : "",
          timestamp: new Date(),
        });
    }
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type='primary'
          style={{
            marginBottom: 16,
          }}>
          Add a row{" "}
        </Button>
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          pagination
          dataSource={dataSource}
          columns={columns}
          locale={{ emptyText: this.state.emptyTableText }}
        />
        <br />
        <BulkUpload database='Patients' />
        <br />
        <br />
      </div>
    );
  }
}

export default PatientTable;
