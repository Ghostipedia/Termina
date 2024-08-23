TFCEvents.data(event => {
    event.itemSize('waystones:waystone', 'huge', 'very_heavy')
})
ServerEvents.tags('item', event => {
    event.add('curios:back', 'waystones:waystone')
})
