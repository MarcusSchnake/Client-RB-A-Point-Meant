import React from 'react';
import { useParams } from 'react-router-dom';



type State = {
    subject: string,
    todo_item: string,
}
//  function getProfile(id: string | undefined) {
    
//  }

// function IdGrabber() {
//     console.log(IdGrabber);
//     const [user, setUser] = React.useState(null);
//     const {id} = useParams();
//     React.useEffect(() => {
//        getProfile(id);}, [id]);
       
//        .then(setUser)
//         .catch ((err: any) => console.log(err));
// }



class UpdateTodo extends React.Component<{}, State> {
    
    constructor(props: State) {
        super(props);
        this.state = {
            subject: '',
            todo_item: '',
        };
    };
    
    componentDidMount() {
        fetch('http://localhost:3000/todo/appt/:id', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({
                subject: data.subject,
                todo_item: data.todo_item,
            })
        })
        .catch(err => console.log(err));
    } 
    
    handleSubmit = (event: any) => {
        event.preventDefault();
        const { subject, todo_item } = this.state;
        const todo = {
            subject,
            todo_item,
        };
        console.log(todo);
    };


    render() {
        return (
            <div>
                <h1>Update Todo</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Subject:
                        <input type='text' value={this.state.subject} onChange={this.handleSubmit} name='subject'/>
                    </label>
                    <br/>
                    <label>
                        Todo Item:
                        <input type='text' value={this.state.todo_item} onChange={this.handleSubmit} name='todo_item'/>
                    </label>
                    <br/>
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}

export default UpdateTodo;

// function then(setUser: React.Dispatch<React.SetStateAction<string>>) {
//         throw new Error('Function not implemented.');
//     }
