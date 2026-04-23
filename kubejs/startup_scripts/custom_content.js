// priority: 10

Platform.mods.kubejs.name = 'TFC: Dawn Till Dusk'

StartupEvents.registry('item', event => {
  event.create('eldrite_chunk')
  event.create('ancient_scrap')
})

StartupEvents.registry('block', (event) => {
  event.create('ancient_vessel')
    .displayName('Ancient Vessel')
    .soundType('decorated_pot')
    .hardness(0.5)
    .resistance(0.25)
    .tagBlock('minecraft:mineable/pickaxe')
    .fullBlock(false)
    .waterlogged()
    .box(2, 0, 2, 14, 14, 14, true)
})
