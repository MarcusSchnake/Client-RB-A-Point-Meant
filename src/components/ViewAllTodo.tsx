import React from 'react';

type State = {
    data: Array<any>,
    id: string,
}

function TodoById (){
    console.log(TodoById)
    const [state, setState] = React.useState<State>({
        data: [],
        id: ':id',
    });

    React.useEffect(() => {
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
            setState({
                data: data,
                id: ':id',
            })
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Todo By Id</h1>
            <ul>
                {state.data.map(todo => (
                    <li key={todo.id}>
                        {todo.subject}
                        {todo.todo_item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

// class ViewAllTodo extends React.Component< {}, State> {
//     constructor(props:State){
//         super(props);
//         this.state = {
//             data: [],
//             id: '',
//         }
//     };
//     componentDidMount(){
//         fetch(`http://localhost:3000/todo/appt/${this.state.id}`,{
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             this.setState({
//                 data: data,

//             })
//         })
//         .catch(err => console.log(err));

//     }

//     render() {
//         return (
//             <div>
//                 <h1>View All Todo</h1>
//                 <ul>
//                     {this.state.data.map((todo:any)  => {
//                         return (
//                             <div>
//                                 <p>{todo.subject}</p>
//                                 <p>{todo.todo_item}</p>
//                             </div>
//                         )
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }

export default TodoById;
    
