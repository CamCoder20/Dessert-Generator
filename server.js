//what this server needs//
const express = require('express')
const app = express ()
const port = 5000

//which door number is the server going to be listening at?//
app.listen(port, () => {
    console.log ('the server is running!')
})

//go get what type of files and send it back to the client side //
//types of requests: get, post, put, delete//
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:dessertiesName', (request, response) => {
    const dessertiesName = request.params.dessertiesName.toLowerCase()
    if (desserties[dessertiesName]) {
        response.json(desserties[dessertiesName])
    } else {
        response.json(desserties['no-more-sweets'])
    }

})

//json-object//

const desserties = {
    'cinnamonroll': {
        'yum level': 'so good',
        'type': 'yeast dough pastry',
        'average calories': '1000',
        'special ingredients': 'nuts, cinnamon'
    
    },
    'brownie': {
        'yum level': 'okay',
        'type': 'baking powder cake pastry',
        'average calories': '500',
        'special ingredients': 'coco powder, chocolate'
        },
    'strawberry-cheescake': {
        'yum level': 'pretty good',
        'type': 'cream cheese based pastry',
        'average calories': '400',
    'special ingredients': 'strawberries, cream cheese'
    },
    'sugar-cookie': {
        'yum level': 'nah..',
        'type': 'baking soda flour baed pastry',
        'average calories': '300',
    'special ingredients': 'nothing special'
    },
'no-more-sweets': {
        'yum level': 'nothing',
        'type': 'nothing',
        'average calories': 'nothing'
    
    }
}