import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BsPlus, BsMoon, BsSun } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import backgroundImage from './components/low-poly-grid-haikei.svg'; // Pastikan file ini ada di folder assets

function App() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleShowForm = () => setShowForm(true);
    const handleCloseForm = () => {
        setShowForm(false);
        setTaskToEdit(null);
    };

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now() }]);
    };

    const editTask = (updatedTask) => {
        setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                padding: '20px',
            }}
        >
            <Container className={`my-5 ${darkMode ? 'dark-mode' : ''}`}>
                <Card className={`p-4 shadow-lg ${darkMode ? 'bg-dark text-white' : ''}`}>
                    <Card.Body>
                        <header className="d-flex flex-column align-items-center">
                            <h1 className="mb-3 text-center">To Do list PFS</h1>
                            <div className="d-flex justify-content-center">
                                <Button variant="outline-secondary" onClick={toggleDarkMode} className="me-2 btn-dark-mode">
                                    {darkMode ? <BsSun /> : <BsMoon />}
                                    {darkMode ? ' Light Mode' : ' Dark Mode'}
                                </Button>
                                <Button variant="primary" onClick={handleShowForm} className="ms-2">
                                    <BsPlus /> Add Task
                                </Button>
                            </div>
                        </header>
                        <TaskList tasks={tasks} deleteTask={deleteTask} showEditForm={setTaskToEdit} darkMode={darkMode} />
                        <TaskForm
                            show={showForm}
                            handleCloseForm={handleCloseForm}
                            addTask={addTask}
                            editTask={editTask}
                            taskToEdit={taskToEdit}
                            darkMode={darkMode}
                        />
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default App;
