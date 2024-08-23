let UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")

GTCEuStartupEvents.registry('gtceu:tag_prefix', e => {
    function createStoneTypeOre(type, properties) {
        if (properties === undefined)
            properties = {}

        if (properties.baseModel === undefined)
            properties.baseModel = type.namespace + ":block/" + type.path

        if (properties.material === undefined)
            properties.material = null

        if (properties.blockState === undefined)
            properties.blockState = (() => Block.getBlock(type).defaultBlockState())

        e.create(type.path, 'ore')
            .stateSupplier(properties.blockState)
            .baseModelLocation(properties.baseModel)
            .materialSupplier(properties.material)
            .unificationEnabled(true)
            .materialIconType(GTMaterialIconType.ore)
            .miningToolTag("mineable/pickaxe")
            .generationCondition(ItemGenerationCondition.hasOreProperty)
    }
    //Examples 
    // createStoneTypeOre('aether:holystone', { blockState: () => UtilsJS.parseBlockState("aether:holystone[double_drops=true]")})
    // createStoneTypeOre('undergarden:depthrock')
    // createStoneTypeOre('create:asurine', { baseModel: 'create:block/asurine_natural_0' })
        //Raw
        createStoneTypeOre('tfc:rock/raw/granite')
        createStoneTypeOre('tfc:rock/raw/diorite')
        createStoneTypeOre('tfc:rock/raw/gabbro')
        createStoneTypeOre('tfc:rock/raw/shale')
        createStoneTypeOre('tfc:rock/raw/claystone')
        createStoneTypeOre('tfc:rock/raw/limestone')
        createStoneTypeOre('tfc:rock/raw/conglomerate')
        createStoneTypeOre('tfc:rock/raw/dolomite')
        createStoneTypeOre('tfc:rock/raw/chert')
        createStoneTypeOre('tfc:rock/raw/chalk')
        createStoneTypeOre('tfc:rock/raw/rhyolite')
        createStoneTypeOre('tfc:rock/raw/andesite')
        createStoneTypeOre('tfc:rock/raw/dacite')
        createStoneTypeOre('tfc:rock/raw/quartzite')
        createStoneTypeOre('tfc:rock/raw/slate')
        createStoneTypeOre('tfc:rock/raw/phyllite')
        createStoneTypeOre('tfc:rock/raw/schist')
        createStoneTypeOre('tfc:rock/raw/marble')
        createStoneTypeOre('tfc:rock/raw/gneiss')
        createStoneTypeOre('tfc:rock/raw/basalt')
        //Hardened
        createStoneTypeOre('tfc:rock/hardened/granite', { baseModel: 'tfc:block/rock/smooth/granite' })
        createStoneTypeOre('tfc:rock/hardened/diorite', { baseModel: 'tfc:block/rock/smooth/diorite' })
        createStoneTypeOre('tfc:rock/hardened/gabbro', { baseModel: 'tfc:block/rock/smooth/gabbro' })
        createStoneTypeOre('tfc:rock/hardened/shale', { baseModel: 'tfc:block/rock/smooth/shale' })
        createStoneTypeOre('tfc:rock/hardened/claystone', { baseModel: 'tfc:block/rock/smooth/claystone' })
        createStoneTypeOre('tfc:rock/hardened/limestone', { baseModel: 'tfc:block/rock/smooth/limestone' })
        createStoneTypeOre('tfc:rock/hardened/conglomerate', { baseModel: 'tfc:block/rock/smooth/conglomerate' })
        createStoneTypeOre('tfc:rock/hardened/dolomite', { baseModel: 'tfc:block/rock/smooth/dolomite' })
        createStoneTypeOre('tfc:rock/hardened/chert', { baseModel: 'tfc:block/rock/smooth/chert' })
        createStoneTypeOre('tfc:rock/hardened/chalk', { baseModel: 'tfc:block/rock/smooth/chalk' })
        createStoneTypeOre('tfc:rock/hardened/rhyolite', { baseModel: 'tfc:block/rock/smooth/rhyolite' })
        createStoneTypeOre('tfc:rock/hardened/andesite', { baseModel: 'tfc:block/rock/smooth/andesite' })
        createStoneTypeOre('tfc:rock/hardened/dacite', { baseModel: 'tfc:block/rock/smooth/dacite' })
        createStoneTypeOre('tfc:rock/hardened/quartzite', { baseModel: 'tfc:block/rock/smooth/quartzite' })
        createStoneTypeOre('tfc:rock/hardened/slate', { baseModel: 'tfc:block/rock/smooth/slate' })
        createStoneTypeOre('tfc:rock/hardened/phyllite', { baseModel: 'tfc:block/rock/smooth/phyllite' })
        createStoneTypeOre('tfc:rock/hardened/schist', { baseModel: 'tfc:block/rock/smooth/schist' })
        createStoneTypeOre('tfc:rock/hardened/marble', { baseModel: 'tfc:block/rock/smooth/marble' })
        createStoneTypeOre('tfc:rock/hardened/gneiss', { baseModel: 'tfc:block/rock/smooth/gneiss' })
        createStoneTypeOre('tfc:rock/hardened/basalt', { baseModel: 'tfc:block/rock/smooth/basalt' })
    /*
        NOTICE : All Code Present in Termina is Licensed under LGPL3.0 You MUST maintain the same license and give credit
        ~Ghostipedia
    */
})