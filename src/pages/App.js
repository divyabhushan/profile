import React from "react";
import styles from "./styles.module.css";

const EMP_DEPT = `
{
    employee(order_by: {empid: asc}) {
      empid
      empname
      departments {
        deptname
      }
    }
}  
`

const DELETE_DEPARTMENT = `
mutation {
    delete_department(where: {deptid: {_eq: 0}}) {
      affected_rows
    }
}
`

export default function App() {
    /* Function that returns a stateful value and a function to update it*/
    
    //const [state_variable, setter]
    const [launches, setLaunches] = React.useState([]);

    React.useEffect(() => {
        fetch('https://myapi.hasura.app/v1/graphql', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret" : "azg431y5OY2WxHHPDrUxbQ61zF2PI4Zff1HCkwdLUtugqniHwRWXnajSjxy7K59D"
            },
            body: JSON.stringify({ query: EMP_DEPT })
        }).then(response => response.json())
        .then(data => setLaunches(data.data.employee))
    }, []);

    return (
        <div className="container">
            <h1 className="header">Fetch data from Hasura GraphQL API</h1>
            <p>
                <h4>Employee ID | Employee Name | Department Name</h4>
                <ul>
                    {launches.map((launch) => (
                        <li>{launch.empid}: {launch.empname}: {launch.departments.deptname}</li>
                    ))}
                </ul>
            </p>
        </div>
    );
}

//                    {JSON.stringify(launches, null, 2)}
