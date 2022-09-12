import {useEffect, useState} from "react";
import axios from "axios";

const HomeBanner = () => {
    const [todo, SetTodo] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>{
                SetTodo(res.data)
        })
            .catch((err)=>{

        })
    },[])      //[] penalty array used for stop auto recalling

const MyList = todo.map((list,i)=>{
    return(
        <tr>
            <td>{list['userId']}</td>
            <td>{list['id']}</td>
            <td>{list['title']}</td>
            <td><button className="btn btn-danger">Delete</button></td>
            <td><button className="btn btn-primary">Edit</button></td>
            <td><button className="btn btn-success">Details</button></td>
        </tr>
    )
})
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th> User Id</th>
                        <th> Id</th>
                        <th> Title</th>
                        <th> Delete</th>
                        <th> Edit</th>
                        <th> Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {MyList}
                    </tbody>
                </table>
            </div>
        );
};

export default HomeBanner;