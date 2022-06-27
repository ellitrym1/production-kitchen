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
                                {employee.shiftAssigned ? (
                                    employee.shiftAssigned.map(
                                        (shiftAssigned) => {
                                            return (
                                                <td key={shiftAssigned.day}>
                                                    {shiftAssigned.start ===
                                                    "OFF" ? (
                                                        "OFF"
                                                    ) : (
                                                        <>
                                                            <input
                                                                type="time"
                                                                defaultValue={
                                                                    shiftAssigned.start
                                                                }
                                                                step="1800"
                                                            />
                                                            -{" "}
                                                            <input
                                                                type="time"
                                                                defaultValue={
                                                                    shiftAssigned.finish
                                                                }
                                                                step="1800"
                                                            />
                                                        </>
                                                    )}
                                                </td>
                                            );
                                        }
                                    )
                                ) : (
                                    <td>{"Shift not available"}</td>
                                )}
                                <td>
                                    <button
                                        onClick={() => {
                                            console.log("MEOW");
                                        }}
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
