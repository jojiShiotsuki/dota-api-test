document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){

	const category = document.querySelector('input').value.toLowerCase()

	try{

		const response = await fetch(`https://frightened-bikini-bee.cyclic.app/api/${category}`)
		const data = await response.json()
		
		const heroInfo = data.heroes


		console.log(heroInfo)
		

	}catch(error){
		console.log(error)
	}



}