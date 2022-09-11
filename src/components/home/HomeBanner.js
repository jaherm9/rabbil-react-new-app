import {useEffect, useState} from "react";
import axios from "axios";

const HomeBanner = () => {

    let [todo, SetTodo] = useState([])
useEffect(()=>{             // useEffect are use for load component data Automatically

    // API Call
    // axios.get().then().catch()
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            setTimeout(()=>{
                SetTodo(res.data)
            }, 3000)
        })
        .catch((err)=>{

        })
})
    return (
        <div>
            {JSON.stringify(todo)}
        </div>
    );
};

export default HomeBanner;