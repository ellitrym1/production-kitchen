import React from "react";
const employees = require("../assets/employees");
export const Shift = () => {
    return (
        <div className="shift">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                {employee.shiftAssigned
                                    ? employee.shiftAssigned.map(
                                          (shiftAssigned) => {
                                              return (
                                                  <td>
                                                      {shiftAssigned.start ===
                                                      "OFF"
                                                          ? "OFF"
                                                          : `${shiftAssigned.start} - ${shiftAssigned.finish}`}
                                                  </td>
                                              );
                                          }
                                      )
                                    : "Shift not available"}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
