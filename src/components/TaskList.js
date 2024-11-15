import React from 'react';
import { Card, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskList = ({ tasks, deleteTask, showEditForm, darkMode }) => {
  const priorityColor = {
    High: 'red',
    Medium: 'orange',
    Low: 'green',
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <Card className={`mb-3 ${darkMode ? 'dark-mode' : ''}`} key={index} style={{ borderLeft: `5px solid ${priorityColor[task.priority]}` }}>
          <Card.Body className="d-flex justify-content-between align-items-center">
            <div>
              <strong>Task:</strong> {task.name} <br />
              <strong>Priority:</strong> {task.priority} <br />
              <strong>Status:</strong> {task.status}
            </div>
            <div>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Edit this task</Tooltip>}
              >
                <Button
                  variant="outline-primary"
                  className={darkMode ? 'dark-mode' : ''}
                  onClick={() => showEditForm(task)}
                >
                  <FaEdit />
                </Button>
              </OverlayTrigger>{' '}
              
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Delete this task</Tooltip>}
              >
                <Button
                  variant="outline-danger"
                  className={darkMode ? 'dark-mode' : ''}
                  onClick={() => deleteTask(task.id)}
                >
                  <FaTrash />
                </Button>
              </OverlayTrigger>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;
