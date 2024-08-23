ServerEvents.recipes(event => {
    event.remove({ id: 'map_atlases:craft_atlas' })
    event.shaped('map_atlases:atlas', [
           'LBR',
           'SWN',
           'LCR',
    ], {
           W: 'minecraft:writable_book',
           B: 'firmaciv:barometer',
           N: 'firmaciv:nav_clock',
           S: 'firmaciv:sextant',
           C: 'firmaciv:firmaciv_compass',
           R: 'firmaciv:rope_coil',
           L: 'tfc_knapsacks:leather_strip',
    })
})