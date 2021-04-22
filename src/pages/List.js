import React from "react";
import "antd/dist/antd.css";
import { Typography } from "antd";
import { Table, Tag, Space } from "antd";

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
  }
];

const { Title } = Typography;

function Lists() {
  return (
    <div id="Lists" className="Lists">
      <Title>Liste des employés</Title>
      <Table className="Large" dataSource={data}>
        <Column title="Employés" dataIndex="Employés" key="Employés" />
        <Column title="Début" dataIndex="age" key="age" />
        <Column title="Fin" dataIndex="address" key="address" />
        <Column
          title="Types"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
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
    </div>
  );
}

export default Lists;
