import { useState } from "react";

export default function Home() {
    const[items,setItems]=useState(['s21','s22']);
    const[user,setUser]=useState({username:'osama',usergmail:'osama.com'})


    return (
    <section>
        <div>Home</div>
        <h2>name is{user.name}</h2>
        <h2>gmail is {user.gmail} </h2>
    </section>
)
}
