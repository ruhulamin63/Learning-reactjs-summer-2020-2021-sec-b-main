export default function button(title,callback,id){
    return `<input type='button' class='btn' onclick="${callback(id)}"name='button' value='${title}'>`;
}