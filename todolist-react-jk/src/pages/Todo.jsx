import React, { useEffect, useState } from 'react'
import TitleHeader from '../components/TitleHeader'

const Todo = () => {
    // setter & getter title,body
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    // function input title & body
    const handleInputTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleInputBody = (event) => {
        setBody(event.target.value)
    }

    //handle submit form
    const handleSubmit = (event) => {
        event.preventDefault()
        let todoArrayLength = todoList.length
        setTodoList([
            ...todoList, // <= jika spread operator tidak ditambahkan maka semua data array akan hilang 
            //           //    jika atau kalau ada penambahan data / submit form
            {
                id: todoArrayLength + 1,
                title: title,
                body: body,
                isComplete: false
            }
        ])
        //reset form
        setTitle("")
        setBody("")
    }


    // debugging input state
    console.log("TITLE :" + title, "Body :" + body)


    const [todoList, setTodoList] = useState([{
        id: 1,
        title: "Belajar React",
        body: "Belajar React JS",
        isComplete: false
    }])

    //update status todo
    const handleUpdateStatus = (id) => {
        setTodoList(todoList.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        }))
        console.log(todoList)
    }

    useEffect(() => {
        console.log(todoList)
    }, [todoList])

    return (
        <div>
            <TitleHeader title={"Todo"} />
            <div className="grid gap-6 grid-cols-2">
                {/* tambah form todo */}
                <div className="border p-3">
                    <h1 className="text-3xl text-center my-3 font-semibold">Tambah Todo</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="title" className='block mb-2 text-sm font-bold text-gray-900 '>TITLE</label>
                            <input
                                type="text"
                                id='title'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                value={title}
                                onChange={handleInputTitle}
                            />

                        </div>
                        <div className="mb-6">
                            <label htmlFor="body" className='block mb-2 text-sm font-bold text-gray-900 '>BODY</label>
                            <input
                                type="text"
                                id='body'
                                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                value={body}
                                onChange={handleInputBody}
                            />
                        </div>
                        <div className="mb-6">
                            <input type="submit" className='bg-blue-500 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' />
                        </div>
                    </form>
                </div>

                {/* end tambah form todo */}

                {/* table form todo */}
                <div className="border p-3">
                    <h1 className='bg-orange-200 font-bold text-3xl uppercase text-center'>Table Todo</h1>
                    <table className='w-full text-left text-sm'>
                        {/* head */}
                        <thead className='bg-orange-200 uppercase'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    No
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Title
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Body
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Status
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {/* content */}
                        <tbody className='bg-orange-50 text-center'>
                            {todoList.map((todo, index) => (
                                <tr key={todo.id}>
                                    <td className='px-6 py-3'>{index + 1}</td>
                                    <td className='px-6 py-3'>{todo.title}</td>
                                    <td className='px-6 py-3'>{todo.body}</td>
                                    <td className='px-6 py-3'>{todo.isComplete ? "✔" : "❌"}</td>
                                    <td>
                                        {todo.isComplete ? (
                                            <span>✔</span>
                                        ) : (
                                            <button onClick={() => handleUpdateStatus(todo.id)}>Success</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* end table form todo */}
            </div>
        </div>
    )
}

export default Todo