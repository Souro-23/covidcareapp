import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Radio } from 'antd';
import "firebase/firestore";
import firebase from "../../Firebase/FirebaseConfig";
import './Table.css'



const EditableContext = React.createContext(null);
var db = firebase.firestore();



const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    isBoolean,
    children,
    dataIndex,
    record,
    handleSave,
    isRadio,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24,
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};

export default class FoodTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'name',
                dataIndex: 'name',
                editable: true,
            },
            {
                title: 'phone',
                dataIndex: 'phone',
                editable: true,
            },
            {
                title: 'Street Number',
                dataIndex: 'streetNumber',
                editable: true,
            },
            {
                title: 'Location',
                dataIndex: 'location',
                editable: true,
            },
            {
                title: 'isFree',
                dataIndex: 'isFree',
                editable: true,
            },
            {
                title: 'verified',
                dataIndex: 'verified',
                editable: true,
                sorter: (a, b) => a.verified.length - b.verified.length,
                sortDirections: ['descend', 'ascend'],
            },
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (_, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a>Delete</a>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
            dataSource: [],
            count: 0,
        };

        db.collection("Food").onSnapshot((querySnapshot) => {
                var data = []
                querySnapshot.forEach((doc) => {
                    data.push({
                        isFree: doc.data().isFree,
                        verified: doc.data().verified,
                        name: doc.data().name,
                        streetNumber:doc.data().streetNumber,
                        location:doc.data().location,
                        phone: doc.data().phone,
                        key: doc.id,
                    })
                })
                this.setState({ dataSource: data, count: data.length })
            })
    }


    handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];

        db.collection("Food").doc(key).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
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
            isFree: "",
            verified: "",
            location: "",
            streetNumber:"",
            newItem: true
        };
        this.setState({
            dataSource: [newData,...dataSource ],
            count: count + 1,
        });
    };
    handleSave = (row) => {

        if (row.newItem) {
            db.collection("Food").add({
                name: row.name,
                location: row.location,
                streetNumber:row.streetNumber,
                phone: row.phone,
                isFree: row.isFree,
                verified: row.verified,
                timestamp:new Date()
            })
        } else {
            db.collection("Food").doc(row.key).set({
                name: row.name,
                location: row.location,
                streetNumber:row.streetNumber,
                phone: row.phone,
                isFree: row.isFree,
                verified: row.verified,
                timestamp:new Date()
            })
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
                    type="primary"
                    style={{
                        marginBottom: 16,
                    }}
                >
                    Add a row
        </Button>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    pagination
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        );
    }
};




