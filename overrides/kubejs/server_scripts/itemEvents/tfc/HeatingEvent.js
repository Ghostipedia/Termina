const $TerminaKeys = Java.loadClass('com.ghostipedia.terminacore.api.metals.TerminaPropertyKeys')
ServerEvents.recipes(event => {
    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        let tfcMetalProp = material.getProperty($TerminaKeys.TFC_METAL_PROPERTY)
        if (tfcMetalProp != null) {
            let outputMaterial = (tfcMetalProp.getFluidMaterial() == null) ? material : tfcMetalProp.getFluidMaterial()
            let ingot = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            let plateSingle = ChemicalHelper.get(TagPrefix.plate, material, 1)
            let plateDouble = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
            let plateDense = ChemicalHelper.get(TagPrefix.plateDense, material, 1)
            let rod = ChemicalHelper.get(TagPrefix.rod, material, 1)
            let longRod = ChemicalHelper.get(TagPrefix.rodLong, material, 1)
            let bolt = ChemicalHelper.get(TagPrefix.bolt, material, 1)
            let screw = ChemicalHelper.get(TagPrefix.screw, material, 1)
            let ring = ChemicalHelper.get(TagPrefix.ring, material, 1)
            let dustTiny = ChemicalHelper.get(TagPrefix.dustTiny, material, 1)
            let dustSmall = ChemicalHelper.get(TagPrefix.dustSmall, material, 1)
            let dustNormal = ChemicalHelper.get(TagPrefix.dust, material, 1)
            let dustImpure = ChemicalHelper.get(TagPrefix.dustImpure, material, 1)
            let dustPure = ChemicalHelper.get(TagPrefix.dustPure, material, 1)
            let crushed = ChemicalHelper.get(TagPrefix.crushed, material, 1)
            let crushedPurified = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)
            let crushedRefined = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1)
            let rawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
            let nugget = ChemicalHelper.get(TagPrefix.nugget, material, 1)
            //TODO OUR OWN TAGPREFIXES
            // let ingotDouble = ChemicalHelper.get(TagPrefix.doub, material, 1)
            // let swordHead = ChemicalHelper.get(TagPrefix, material, 1)
            // let butcheryKnife = ChemicalHelper.get(TagPrefix, material, 1)
            // let miningHammer = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let spade = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let pickaxe = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let axe = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let shovel = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let hoe = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let hammer = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let saw = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let scythe = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let file = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let knife = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            // let block = ChemicalHelper.get(TagPrefix.ingot, material, 1)

            if (!ingot.isEmpty()) {
                event.recipes.tfc.heating(ingot, tfcMetalProp.getMeltingTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                    .id(`tfc:heating/metal/${material.getName()}_ingot`)

                event.recipes.tfc.casting(ingot, 'tfc:ceramic/ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.1)
                    .id(`tfc:casting/${material.getName()}_ingot`)

                event.recipes.tfc.casting(ingot, 'tfc:ceramic/fire_ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.01)
                    .id(`tfc:casting/${material.getName()}_fire_ingot`)

            }

        }


    })











})

