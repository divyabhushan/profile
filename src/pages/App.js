import React from "react";
import styles from "./styles.module.css";

//https://www.youtube.com/watch?v=N9jK9ipnPw8

const EMP_DEPT = `
{
    employee(order_by: {empid: asc}) {
      empid
      empname
      departments {
        deptname
        region
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
    const [myState, getData] = React.useState([]); //state hook with an empty array

    //Use React Effect hook - to perform side effects
    React.useEffect(() => {
        fetch('https://myapi.hasura.app/v1/graphql', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-hasura-admin-secret": "azg431y5OY2WxHHPDrUxbQ61zF2PI4Zff1HCkwdLUtugqniHwRWXnajSjxy7K59D"
            },
            body: JSON.stringify({ query: EMP_DEPT }) //convert to json
        }).then(response => response.json()) //response [to get back the data for the above request, make a callback and get the response in json format]
            .then(data => getData(data.data.employee)) //promise [use then callback to get back the data]
        //Get access to .data property, within that .employee
    }, []);

    //arrow function: https://www.youtube.com/watch?v=tJOJPealurs
    return (
        <div className="container">
            <h1 className="header">Fetch data from Hasura GraphQL API</h1>
            <p>
                <h4>Employee ID | Employee Name | Department Name</h4>
                <ul>
                    <p>Loop through each field</p>
                    {myState.map((field) => (
                        <li>{field.empid}: {field.empname}: {field.departments.deptname} - {field.departments.region}</li>
                    ))}
                </ul>
                <button onClick="">mutation</button>
            </p>
        </div>
    );
}

//                    {JSON.stringify(launches, null, 2)}
