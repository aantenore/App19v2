import firebaseClass from '../constants/database';
import constants from '../constants/constants';
import Getter from'./Getter';

class Remover{
    //if you are using this class pay attention at the user on which you are removing, i have setted it to 'testshopWriteTest' int the App.js row 60

    static removeProduct(dataObj){
        console.log(dataObj.category+constants.pathOf(dataObj.name));
        if(dataObj.category&&dataObj.name) _remove(constants.productsPath()+dataObj.category+constants.pathOf(dataObj.name));
    }

    static removeCategory(categoryName,type,saltyOrSweet,fixedOrCombined){
        switch(type){
            case constants.foods:
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.fixed)Remover.removeFixedSaltyFoodCategory(categoryName);
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.combined)Remover.removeCombinedSaltyFoodCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.fixed)Remover.removeFixedSweetFoodCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.combined)Remover.removeCombinedSweetFoodCategory(categoryName);
                break;
            case constants.drinks:
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.fixed)Remover.removeFixedSaltyDrinkCategory(categoryName);
                if(saltyOrSweet===constants.salty&&fixedOrCombined==constants.combined)Remover.removeCombinedSaltyDrinkCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.fixed)Remover.removeFixedSweetDrinkCategory(categoryName);
                if(saltyOrSweet===constants.sweet&&fixedOrCombined==constants.combined)Remover.removeCombinedSweetDrinkCategory(categoryName);
                break;
            case constants.rawMaterials:
                Remover.removeRawMaterialCategory(categoryName);
            default: break;
        }
    }

    static removeCategoryByContext(categoryName,context){
        if(context?.type) var a = context?.type;
        if(context?.saltyOrSweet) var b = context?.saltyOrSweet;
        if(context?.fixedOrCombined) var c = context?.fixedOrCombined;
        Remover.removeCategory(categoryName,a,b,c);
    }

    static removeFixedSaltyFoodCategory(category){
        let basePath = constants.saltyFixedFoodsPath();
        _removeCategory(basePath,category);
    }

    static removeCombinedSaltyFoodCategory(category){
        let basePath = constants.saltyCombinedFoodsPath();
        _removeCategory(basePath,category);
    }

    static removeFixedSweetFoodCategory(category){
        let basePath = constants.sweetFixedFoodsPath();
        _removeCategory(basePath,category);

    }

    static removeCombinedSweetFoodCategory(category){
        let basePath = constants.saltyCombinedFoodsPath();
        _removeCategory(basePath,category);
    }

    static removeFixedSaltyDrinkCategory(category){
        //for now there is no division salty sweet drinks --> if change, let substitute fixedDrinksPath with saltyFixedDrinksPath
        let basePath = constants.fixedDrinksPath();
        //let basePath = constants.saltyFixedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeCombinedSaltyDrinkCategory(category){
        //for now there is no division salty sweet drinks --> if change, let substitute combinedDrinksPath with saltyCombinedDrinksPath
        let basePath = constants.combinedDrinksPath();
        //let basePath = constants.saltyCombinedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeFixedSweetDrinkCategory(category){
        //for now there is no division salty sweet drinks --> if change, let substitute fixedDrinksPath with sweetFixedDrinksPath
        let basePath = constants.fixedDrinksPath();
        //let basePath = constants.sweetFixedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeCombinedSweetDrinkCategory(category){
        //for now there is no division salty sweet drinks --> if change, let substitute combinedDrinksPath with sweetCombinedDrinksPath
        let basePath = constants.combinedDrinksPath();
        //let basePath = constants.sweetCombinedDrinksPath();
        _removeCategory(basePath,category);
    }

    static removeRawMaterialCategory(category){
        let basePath = constants.rawMaterialsPath();
        _removeCategory(basePath,category);
    }
}

function _remove(dataPath){
console.log(dataPath);
let ref = Getter.getDbRef(dataPath);
ref?.remove();
}

function _removeCategory(basePath,category){
    let temp = category.substring(0,category.lastIndexOf('/'));
    let commonIndex = basePath.indexOf(temp);
    let path = undefined;
    commonIndex = commonIndex>0?commonIndex:basePath.length;
    path = basePath.substring(0,commonIndex) + constants.pathOf(category);
    if(path) _remove(path);
}


export default Remover;