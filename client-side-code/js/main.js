document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){

	const heroName = document.querySelector('input').value

	try{

		const response = await fetch('localHost:8000')

	}catch(error){
		console.log(error)
	}



}