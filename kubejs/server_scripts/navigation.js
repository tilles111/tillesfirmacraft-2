ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:compass' })
    event.remove({ output: 'minecraft:recovery_compass' })
    event.remove({ output: 'minecraft:lodestone_compass' })

    event.shaped(Item.of('minecraft:compass').enchant('soulbound:soulbound', 1),[
        'F',
        'B'
        ],{
            F: 'kubejs:wayward_focus',
            B: '#tfc:bowls'
        }
    )
    event.shaped('minecraft:recovery_compass',[
        'GFG',
        ' B '
        ],{
            F: 'kubejs:wayward_focus',
            B: '#tfc:bowls',
            G: 'malum:grim_talc'
        }
    )
    
    event.shaped('minecraft:lodestone',[
        'SRS',
        'RFR',
        'SRS'
        ],{
            F: 'kubejs:wayward_focus',
            S: '#tfc:rock/smooth',
            R: '#tfc:rock/raw'
        }
    )
})