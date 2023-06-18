import { useNavigate } from "react-router-dom";


export function Home(){
    
    
    const submitHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const nombre = e.target.nombre.value;
    

    console.log("los datos son: ", email, nombre)
    if(email!=="" && nombre !=="" ){
    navigate("/caracteres")}
}
const navigate = useNavigate();
    return(<div className="contLogin">

        <form  onSubmit={submitHandler}> 
            <label>
                <span>Ingrese su correo</span>
                <br/>
                <input type="text" 
                    placeholder="ingrese su Nombre" 
                    name="nombre"></input>
                
            </label>
            <br/>
            <br/>
            <label>
                <span>Ingrese su Email</span>
                <br/>
                <input 
                    type="email" 
                    placeholder="ingrese un email valido"
                    name="email">
                </input>
            </label>
            <br/>
            <br/>
            <input 
                type="submit" 
                className=" btn btn-info"  
                value="Entrar" 
                >    
            </input>
       
        </form>                   
        </div>
        
        )
}
