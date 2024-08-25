
const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
const $MaterialFlags = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.info.MaterialFlags")

TFCEvents.data(event => {
    function manageHeatByTagPrefix(tagPrefix, material, tfcMetalProp, heatCapacity) {
        let item = ChemicalHelper.get(tagPrefix, material, 1)
        if (!item.isEmpty()) event.itemHeat(item, heatCapacity, tfcMetalProp.getForgingTemp(), tfcMetalProp.getWeldingTemp())
    }
    function makeItemHeatByToolType(toolType, material, tfcMetalProp, heatCapacity) {
        let tool = ToolHelper.get(toolType, material)
        if (!tool.isEmpty()) event.itemHeat(tool, heatCapacity, tfcMetalProp.getForgingTemp(), tfcMetalProp.getWeldingTemp())
    }
    function assignMetaltoFluid(materialFluid, meltingTemp, heatCapacity, ingot, doubleIngot, plate, tier, material) {
        let ingotItem = ChemicalHelper.get(ingot, material, 1)
        // let ingotItem = ChemicalHelper.get(ingot, material, 1) ADD INGOT DOUBLE PROPERTY! ! !
        let plateItem = ChemicalHelper.get(plate, material, 1)
        if (!ingotItem.isEmpty()) event.metal(materialFluid, meltingTemp, heatCapacity, ingotItem, null, plateItem, tier, material)
    }
    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        let tfcMetalProp = material.getProperty($TerminaKeys.TFC_METAL_PROPERTY)
        if (tfcMetalProp != null) {
            manageHeatByTagPrefix(TagPrefix.ingot, material, tfcMetalProp, 1.429)
            assignMetaltoFluid(material, tfcMetalProp.getMeltingTemp(), tfcMetalProp.getHeatCapacity(), TagPrefix.ingot, null, TagPrefix.plate, tfcMetalProp.getTier(), tfcMetalProp.getFluidMaterial().getName())
            if(material.hasFlag($MaterialFlags.GENERATE_PLATE)) {
                manageHeatByTagPrefix(TagPrefix.plate, material, tfcMetalProp, 1.429)
                manageHeatByTagPrefix(TagPrefix.plateDouble, material, tfcMetalProp, 1.429)
            }

            if(material.hasFlag($MaterialFlags.GENERATE_GEAR))
                manageHeatByTagPrefix(TagPrefix.gear, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_GEAR))
                manageHeatByTagPrefix(TagPrefix.gear, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_SMALL_GEAR))
                manageHeatByTagPrefix(TagPrefix.gear, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_ROD))
                manageHeatByTagPrefix(TagPrefix.rod, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_LONG_ROD))
                manageHeatByTagPrefix(TagPrefix.rodLong, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_DENSE))
                manageHeatByTagPrefix(TagPrefix.plateDense, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_FRAME))
                manageHeatByTagPrefix(TagPrefix.frameGt, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_SPRING))
                manageHeatByTagPrefix(TagPrefix.spring, material, tfcMetalProp, 1.429)

            if(material.hasFlag($MaterialFlags.GENERATE_SPRING_SMALL))
                manageHeatByTagPrefix(TagPrefix.springSmall, material, tfcMetalProp, 1.429)
        }
    })

    
})