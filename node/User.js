import Button from './Button.js';
/* export default class User{
    constructor(name,id)
    {
        this.name=name;
        this.id=id;
    }
    getname(){
        return this.name;
    }
} */

export default function User({id,name,dept}){
    const editOnClick=(id)=>{
        console.log(`Edit button in action:${id}`);
        return `alert('Edit id:${id}')`;
    }
    const deleteOnClick=(id)=>{
        console.log(`Delete button in action:${id}`);
        return `alert(' id:${id}')`;
    };
    return(
        `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${dept}</td>
            <td>
            ${Button('Edit',editOnClick,id)} 
            ${Button('Delete',deleteOnClick,id)}
            </td>
        </tr>`
    );
}

//export const id=10;