import React from 'react';
import { Container, Button } from 'reactstrap';


type State = {
    didDelete: boolean,
};



class DeleteToDo extends React.Component<{}, State> {
    constructor(props: State) {
        super(props);
        this.state = {
            didDelete: false,
        };
    }
    Delete = () => {
        const id = window.location.pathname.split('/')[3];
        fetch(`https://a-point-meant.herokuapp.com/todo/${id}`, {
        method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}` 
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    didDelete: true,
                    
                })
            })
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.Delete();
    }
    render() {
        return (
            <Container>
                    <ul>
                        <h1>Todo {this.state.didDelete ? "Successfully Deleted" : "Is Pending Delete" }</h1>
                    </ul>
                <Button onClick={() => window.history.back()}>Go Back</Button>
            </Container>
        )
    }            
}

export default DeleteToDo;