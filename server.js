const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')


app.use(cors())

let heroes = {

		'abaddon' : {
			'role' : 'offlane/support',
			'class' : 'undead'
		},
		'primal beast' : {
			'role' : 'offlane/mid',
			'class' : 'sentinel'
		},

		'juggernaut' : {
			'role' : 'carry',
			'class' : 'orc'
		},
		'slark' : {
			'role' : 'carry',
			'class' : 'naga'
		},
		'lion' : {
			'role' : 'support',
			'class' : 'orc'
		},
		'obsidian destroyer' : {
			'role' : 'mid',
			'class' : 'undead'
		},
		'snapfire' : {
			'role' : 'support/mid',
			'class' : 'orc'
		},
		'windranger' : {
			'role' : 'support/mid',
			'class' : 'sentinel'
		}
}

app.get('/', (request, response) => {

	response.sendFile(__dirname + '/index.html')

})

app.get('/api/:hero', (request, response) => {
	
	const hero = request.params.hero.toLowerCase()
	if(heroes[hero]){
		response.json(heroes[hero])
	}else{
		response.json(heroes[''])
	}
})

app.listen(process.env.PORT || PORT, () => {

	console.log(`Server running at port ${PORT}`)

})