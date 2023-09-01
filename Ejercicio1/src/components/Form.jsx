import React, { useState} from 'react'
import Todo from '../components/Todo';
import Elementos from '../components/compras';

const Form =()=> {
    const[todo, setTodo] = useState({})
    
    const[todos, setTodos] = useState([
        {todo: 'Manzana ㅤ $0.50'},
        {todo: 'Soda     ㅤㅤㅤ$2.00'},
        {todo: 'Queso   ㅤㅤ $0.75'},
    ])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if (Object.keys(todo).length === 0 || todo.todo.trim()=== ''){
            alert('el campo no puede estar vacío')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos=[...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return(
        <>
        <form class="Rectangle-1" onSubmit ={e=>e.preventDefault()}>
            <h2>Lista de compras</h2><br />



  <select className="form-select" aria-label="Default select example"name="todo" onChange={handleChange}>
                <option selected>Agregar elemento</option>
                <option value="Manzanaㅤㅤ$0.50">Manzana </option>
                <option value="Polloㅤㅤ$4.00">Pollo</option>
                <option value="Cerealㅤㅤ$1.25">Cereal</option>
                <option value="Sodaㅤㅤ$2.00">Soda</option>
                <option value="Lecheㅤㅤ$1.75">Leche</option>
                <option value="Mayonesaㅤㅤ$0.50">Mayonesa</option>
                <option value="Pastaㅤㅤ$0.50">Pasta</option>
                <option value="Salsaㅤㅤ$0.50">Salsa</option>
                <option value="Embutidosㅤㅤ$1.00">Embutidos</option>
                <option value="Quesoㅤㅤ$1.75">Queso</option>
            </select> 

            
            <button onClick={handleClick}>Agregar</button>

            <thead className="thead-dark">
              <tr><th></th><th></th>
                <th scope="col">Nombre</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                <th scope="col">Cantidad</th><th></th><th></th>
              </tr>
            </thead> 
{
            todos.map((value,index) =>(<Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>))
        }

<p className="total">Total:  $4.00</p>
            </form>
       
        
        </>
    )
}


export default Form