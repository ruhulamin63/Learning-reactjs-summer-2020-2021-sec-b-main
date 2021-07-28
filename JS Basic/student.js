/* const student={
    id:1,
    name:'Rasel',
    dept:'CSE',
    getName:function(){
        return this.name;
    }
} */
const name="XYZ";
const student = function(){
	return {
		id: 1,
		name: 'alamin',
		getName: function(){
			return this.name;
		}
	}
}
//module.exports.myname= name;
module.exports= student;