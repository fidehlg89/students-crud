import React from "react";
import Table from "../../components/table";
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Icon, H5, Spinner } from "@blueprintjs/core";

const StudentsList = ({ students, handleDelete, loading }) => {
    const history = useHistory();
    return (
        <div>
            <H5>Lista de Estudiantes</H5>
            <Button onClick={() => history.push("/estudiantes/nuevo")} intent="primary">Nuevo Estudiante</Button>
            {loading === true ? <div><Spinner intent="primary" size={50} /></div> : null}
            {students.length > 0 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Edad</th>
                            <th>Sexo</th>
                            <th>Fecha Nacimiento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td>{item.birthDate}</td>
                                <td>
                                    <ButtonGroup minimal>
                                        <Button intent="success"><Icon icon="edit" size={12} /></Button>
                                        <span className="bp3-divider"></span>
                                        <Button intent="danger" onClick={() => handleDelete(item)}><Icon icon="trash" size={12} /></Button>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </Table>
            ) : !loading && students.length === 0 ? <p><H5 className="info">No hay registros para mostrar</H5></p> : null
            }
        </div>
    );
};

export default StudentsList;
