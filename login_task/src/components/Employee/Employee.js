import React, { useState } from "react";
import "./Employee.css";
export default function Employee(props) {
  const [totalContent, singleData] = useState({
    group: false,
    single: [],
  });
  const WorkersContent = [
    {
      id: "001",
      name: "Akshay",
      location: "Bangalore",
      salary: "50000",
      department: "Jr.Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, maximus vel magna at, finibus bibendum mi. Donec sit amet lorem sit amet ante malesuada elementum ut sed orci. ",
    },
    {
      id: "002",
      name: "Kumar",
      location: "Coimbatore",
      salary: "45000",
      department: "Jr.Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, maximus vel magna at, finibus bibendum mi. Donec sit amet lorem sit amet ante malesuada elementum ut sed orci. ",
    },
    {
      id: "003",
      name: "Swetha",
      location: "Chennai",
      salary: "20000",
      department: "Sr.Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, maximus vel magna at, finibus bibendum mi. Donec sit amet lorem sit amet ante malesuada elementum ut sed orci. ",
    },
    {
      id: "004",
      name: "Sounder",
      location: "Chennai",
      salary: "35000",
      department: "Sr.Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, maximus vel magna at, finibus bibendum mi. Donec sit amet lorem sit amet ante malesuada elementum ut sed orci. ",
    },
    {
      id: "005",
      name: "Suresh",
      location: "Coimbatore",
      salary: "50000",
      department: "Team Leader",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, maximus vel magna at, finibus bibendum mi. Donec sit amet lorem sit amet ante malesuada elementum ut sed orci. ",
    },
    {
      id: "006",
      name: "Raj",
      location: "Chennai",
      salary: "300000",
      department: "Manager",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, maximus vel magna at, finibus bibendum mi. Donec sit amet lorem sit amet ante malesuada elementum ut sed orci. ",
    },
    {
      id: "007",
      name: "Siva",
      location: "Chennai",
      salary: "100000",
      department: "Asst.Manager",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nunc erat, maximus vel magna at, finibus bibendum mi. Donec sit amet lorem sit amet ante malesuada elementum ut sed orci. ",
    },
  ];
  const IndividualEmployee = (i) => {
    WorkersContent.map((e) => {
      if (e.id == i + 1) {
        singleData(() => ({
          group: true,
          single: [
            {
              id1: e.id,
              name1: e.name,
              location1: e.location,
              salary1: e.salary,
              department1: e.department,
              content1: e.content,
            },
          ],
        }));
      }
    });
  };
  return (
    <div className="Employee">
      {totalContent.group ? (
        <div>
          {totalContent.single.map((e) => (
            <div className="individual_details">
              <div className="employee_details_individual">
                <div className="individual_name">
                  <h1>{e.name1}</h1>
                </div>
                <div className="individual_department">{e.department1}</div>
                <div className="individual_content">{e.content1}</div>

                <div className="button">
                  <button
                    className="button_login"
                    onClick={() => {
                      singleData(() => ({
                        group: false,
                        single: [
                          {
                            id1: e.id,
                            name1: e.name,
                            location1: e.location,
                            salary1: e.salary,
                            department1: e.department,
                          },
                        ],
                      }));
                    }}
                  >
                    back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="employee_content_1">
          <h1>Our Employees Details</h1>
          <table className="employee_details">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Department</th>
              </tr>
            </thead>

            <tbody style={{}}>
              {WorkersContent.map((e, i) => (
                <tr onClick={(x) => IndividualEmployee(i)}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.location}</td>
                  <td>{e.salary}</td>
                  <td>{e.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
