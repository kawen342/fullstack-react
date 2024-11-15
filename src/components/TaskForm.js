import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const TaskForm = ({ show, handleCloseForm, addTask, editTask, taskToEdit, darkMode }) => {
  const [task, setTask] = useState({ name: '', priority: 'Medium', status: 'To Do' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (taskToEdit) {
      editTask(task);
    } else {
      addTask(task);
    }
    setTask({ name: '', priority: 'Medium', status: 'To Do' });
    handleCloseForm();
  };

  return (
    <Modal show={show} onHide={handleCloseForm} className={darkMode ? 'dark-mode' : ''}>
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="taskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="taskPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              value={task.priority}
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="taskStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={task.status}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseForm}>Close</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskForm;
