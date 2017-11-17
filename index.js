// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`

function what-is-a-test(name){
if (name === 'Susan'){
    return 'Susan'
}else{
  return 'We expect the name to equal Susan.'
}


function Height(height){
  if( height < 40){
    return `Height is  ${height}`
  }else {
    return 'We expect the height to be less than 40.'
  }
}

function Message(name, height){
return `${name}, is ${} inches tall.`  
}



module.exports = {name, height, message}
