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
            assignMetaltoFluid(material, tfcMetalProp.getMeltingTemp(), tfcMetalProp.getHeatCapacity(), TagPrefix.ingot, null, TagPrefix.plate, tfcMetalProp.getTier(), tfcMetalProp.getFluidMaterial())
        }
    })

})