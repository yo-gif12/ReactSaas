import React from "react";
import "antd/dist/antd.css";
import { Col, Row, Table, Space } from "antd";
import "../styles/_common.less";

const { Column } = Table;

const data = [
  {
    key: "1",
    Employés: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    Employés: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    Employés: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function ListDash() {
  return (
    <div id="ListDash" className="ListDash">
      <Row className="ListDashContain">
        <Col span={11}>
          <Table dataSource={data}>
            <Column title="Employés" dataIndex="Employés" key="Employés" />
            <Column title="Début" dataIndex="age" key="age" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <a>Contact {record.lastName}</a>
                  <a>Delete</a>
                </Space>
              )}
            />
          </Table>
        </Col>
        <Col span={11}>
          <Table dataSource={data}>
            <Column title="Employés" dataIndex="Employés" key="Employés" />
            <Column title="Début" dataIndex="age" key="age" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <a>Contact {record.lastName}</a>
                  <a>Delete</a>
                </Space>
              )}
            />
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default ListDash;
