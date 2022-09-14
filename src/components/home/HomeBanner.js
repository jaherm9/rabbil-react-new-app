import React, {Component} from 'react';

class HomeBanner extends Component {

    constructor() {
        super();

        /*// state in class component
        this.state={
        color:"Red"
        }*/
    }

    // use Ref in class component
    MyClick=()=>{
        let text = this.MyText.value;
        alert(text)
    }

    render() {
        // use Ref in class component
        return(
            <div>
                <input ref={(abc)=>{this.MyText=abc}} className="form-control" type="text"/>
                <br/>
                <button className="btn btn-success" onClick={this.MyClick}>Submit</button>
            </div>


        //state in class component
        // useState only use in functional component

        /*
        return (
            <div>
                <h1>{this.state.color}</h1>
                <button onClick={()=>this.setState({color:"Blue"})}>Blue</button>
                <button onClick={()=>this.setState({color:"Red"})}>Red</button>
                <button onClick={()=>this.setState({color:"Green"})}>Green</button>
            </div>
            */


    /*render() {
        return (
            // object pass in class component
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.age}</p>
            </div>*/

            // object pass by props in functional component
            /*
            <div>
                <h1>props.title.name</h1>
                <h1>props.title.age</h1>
            </div>
            */
        )
    }
}

export default HomeBanner;
// functional component
/*
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
*/
