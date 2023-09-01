import React from 'react'

const handleChange = e => Todo({[e.target.name]: e.target.value})
const Todo=({todo, index, deleteTodo})=> {
    return(
        <>
            <div className="list">
                <p>{todo}</p> ㅤㅤㅤㅤㅤㅤㅤ
                <select className="select-cantidad" aria-label="Default select example" name="cantidad" >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button className="btn-delete" onClick={()=> deleteTodo(index)}>x</button> 
            </div>
        </>
    )
}
export default Todo