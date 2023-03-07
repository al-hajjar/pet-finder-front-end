import { useEffect, useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { apiHost } from "../../Variables";


const Pets = ({loggedIn}) => {
    const navigate = useNavigate()
    const [pets, setPets] = useState([])

    useEffect(()=>{
        if(!loggedIn){
            navigate('/home')
        }
    }, [])

    useEffect(()=>{
        fetch(`${apiHost}/pets`)
            .then((res) => res.json())
            .then((pets) => {
                setPets(pets)
                console.log(pets)
            })   
    }, [])

    // useEffect(()=>{
    //     fetch(`${apiHost}/${`my-pets/${JSON.parse(localStorage.getItem('user') || false)?.id}`}`)
    //         .then((res) => {
    //             if(res.ok){
    //                 res.json().then(data => setPets(data))
    //             }else {
    //                 res.json().then(error => console.warn(error))
    //             }
    //         })    
    // }, [])

    function handleDelete(deletedPet){
        fetch(`${apiHost}/pets/${deletedPet.id}`, {method: 'DELETE'})
        .then((res) => {
            if(res.ok){
                const newPetsList = pets.filter(pet => pet.id !== deletedPet.id)
                setPets(newPetsList)
            } else {
                res.json().then(error => console.warn(error))
            }   
        }) 
    }

    return ( 
        <div className="min-h-screen md:px-24 px-8 py-20">
            <div className="flex flex-col relative">
                <div className="flex justify-between items-center my-5">
                    <h1 className="md:text-2xl text-xl font-bold">ALL PETS</h1>
                    <div className="flex gap-5">
                        <button onClick={()=>navigate('/add-pet')}
                            className="border-solid border border-blue py-2 px-5 w-40 rounded-md bg-pink-400 hover:bg-pink-500">
                            Add New
                        </button>
                    </div>
                </div>
                <table>
                    {
                        <tr className="min-w-max-content border-x-solid border border-sky">
                            <th>Name</th>
                            <th>Breed</th>
                            <th>Image</th>
                            <th></th>
                            <th></th>
                        </tr>
                    }
                    {pets.map((pet) => (
                            <tr key={pet.id} className="border-x-solid border border-sky">
                                <td className="px-3" >{pet.name}</td>
                                <td className="px-3">{pet.breed}</td>
                                <td className="px-3 max-w-sm">
                                    <img src={pet.image_url} alt='pet-image'/>
                                </td>
                                <td className="px-5">
                                    <button 
                                        className="border-solid border border-blue py-2 px-4 rounded-md bg-green-300 hover:bg-green-400 w-full" 
                                        onClick={()=>handleDelete(pet)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
    );
}
 
export default Pets;