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

    const DeleteEvent=(id)=>{
        let DeleteID = "Delete ID ="+ id
        alert(DeleteID)
        //API CALL Delete

    }
    const EditEvent=(id)=>{
        let EditID = "Edit ID ="+ id
        alert(EditID)
        //API CALL Edit
    }
    const DetailsEvent=(id)=>{
        let DetailsID = "Details ID ="+ id
        alert(DetailsID)
        //API CALL Details
    }

const MyList = todo.map((list,i)=>{
    return(
        <tr>
            <td>{list['userId']}</td>
            <td>{list['id']}</td>
            <td>{list['title']}</td>
            <td><button onClick={DeleteEvent.bind(this,list['id'])} className="btn btn-danger">Delete</button></td>
            // use bind and this for prevent random selection
            <td><button onClick={EditEvent.bind(this,list['id'])} className="btn btn-primary">Edit</button></td>
            <td><button onClick={DetailsEvent.bind(this,list['id'])} className="btn btn-success">Details</button></td>
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