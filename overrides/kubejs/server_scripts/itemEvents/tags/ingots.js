ServerEvents.tags('item', event => {
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        event.add('tfc:pileable_ingots', [`gtceu:${id.name}_ingot`])
      })
})
ServerEvents.tags('fluid', event => {
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        event.add('tfc:molten_metals', [`gtceu:${id.name}`])
        event.add('tfc:usable_in_ingot_mold', [`gtceu:${id.name}`])
      })
})