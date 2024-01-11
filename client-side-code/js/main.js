document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){

	const heroName = document.querySelector('input').value

	try{

		const response = await fetch(`https://frightened-bikini-bee.cyclic.app/api/${heroName}`)
		const data = await response.json()

		console.log(data)
		document.querySelector('h2').innerText.data.heroes

	}catch(error){
		console.log(error)
	}



}