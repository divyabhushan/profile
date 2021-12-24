import React from "react";
import styles from "./styles.module.css";


const VIEW_EMPLOYEE = `
{
    employee {
        empname
    }     
}
`

const ROW_CUSTOM_CHECK = `
{"empid":{"_eq":"X-Hasura-User-Id"}}
`

export default function userAccess() {

    const [ myState, getData ] = React.useState([]);

    React.useEffect(() => {
        fetch('https://myapi.hasura.app/v1/graphql', {
            method: "POST",
            headers: {
                "Content_Type": "application/json",
                "x-hasura-admin-secret": "azg431y5OY2WxHHPDrUxbQ61zF2PI4Zff1HCkwdLUtugqniHwRWXnajSjxy7K59D",
                "x-hasura-role": "view-only",
                "x-hasura-user-id": 1
            },
            body: JSON.stringify({ query: VIEW_EMPLOYEE })
        }).then(response => response.json())
            .then(data => getData(data.data.employee))
    }, []);

    return (
        <div className="container"><h1 className="header">Roles & Session variables</h1>
            <p>The `x-hasura-role`: `view-only` has limited access to just the `empname` column from the `employee` table.</p>
            {myState.map((eachField) => (
                <ul>
                    <li>{eachField.empid}: {eachField.empname}: {eachField.bio}</li>
                </ul>
            ))}
            <p>
                <h5>In the Hasura cloud console, set permissions for "employee" table.</h5>
                Create a user with the name "view-only".
                <ul>
                    <li>Table: employee</li>
                    <li>Role: view-only</li>
                    <li>Action: select</li>
                    <li>Row select permissions:
                        <ul>
                            <li>with custom check: {ROW_CUSTOM_CHECK}</li>
                        </ul>
                    </li>
                    <li>Column select permissions: empname</li>
                </ul>
            </p>
        </div >
    );
}

