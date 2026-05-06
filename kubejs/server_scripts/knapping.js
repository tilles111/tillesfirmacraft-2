TFCEvents.data(event => {
    event.knappingType(
        'kubejs:eldrite_chunk',
        1,
        1,
        'tfc:item.knapping.stone',
        true,
        false,
        true,
        'kubejs:eldrite_chunk',
        'kubejs:eldrite'
    )
})

ServerEvents.recipes(event => {
    event.recipes.tfc.knapping(
        '2x kubejs:wayward_focus',
        'kubejs:eldrite',
        [
            '  X  ',
            ' XX  ',
            ' X X ',
            '  XX ',
            '  X  '
        ]
    )
})