import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container} from 'reactstrap';

type State =
    Array<any>;


function ViewAllTodo() {
    console.log('ViewAllTodo');
    const [state, setState] = React.useState([]);

    React.useEffect(() => {
        const id = window.location.pathname.split('/')[3];
        fetch(`https://a-point-meant.herokuapp.com/todo/appt/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState(
                    data
                )
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Todo By Appointment Id</h1>
            <ul>
                {state.length > 0 && state?.map((todo: any) => (
                    <li key={todo?.id}>
                        {todo.subject}
                        {todo.todo_item}
                        <Container>
                            <Link to={`/todo/delete/${todo.id}`}>
                                <Button>
                                    Delete Todo
                                </Button>
                            </Link>
                            <Link to={`/todo/update/${todo.id}`}>
                                <Button>
                                    Update Todo
                                </Button>
                            </Link>
                        </Container>
                        {/* <Button onClick={() => window.history.back()}>Go Back</Button> */}
                    </li>
                    
                ))}
            </ul>
            <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
    );
}



export default ViewAllTodo;

