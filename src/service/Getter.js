import firebaseClass from '../constants/database';
import constants from '../constants/constants';
import { createFactory } from 'react';

class Getter{

    //this method returns a snapshot of db given a path
    static async getDbRef(path){
        let p = '/'+global.user+(path?path:'');
        let result = firebaseClass.db().ref(p);
        return result;
    }

    //this method returns an array of string categories given a db Reference or its path
    static async getChildren(dbReference){
        let ref = dbReference?(typeof dbReference === 'string')?  await Getter.getDbRef(dbReference): dbReference: await Getter.getDbRef();
        var categories = [];
         let snap=  await ref.once('value').then(x=>{return x});
         snap.forEach(category=>{
                if(category.key!==constants.nameOf(constants.features)) categories.push(category.key);
            });
        return categories;  
    }

    //this method returns an array of food objects in a category if given, else an array of all food objects 
    static async getFoods(category){
        global.counterLoop=0;
        if(constants.nameOf(category)===constants.nameOf(constants.salty)||constants.nameOf(category)===constants.nameOf(constants.sweet)){
        let cat = constants.foods+constants.fixed+constants.pathOf(category);
        let result =  await _getProducts(cat);
        cat = constants.foods+constants.combined+constants.pathOf(category);
        return result.concat( await _getProducts(cat));
        }else {
        let category_ = category==='/'?undefined:category;
        let cat = constants.foods+(category_?constants.pathOf(category):'');
        return  await _getProducts(cat);
        }
    }

    //this method returns an array of feature objects of a category and all its children if given, else an array of all feature objects 
    static async  getAllChildFeatures(category){
        global.counterLoop=0;
        let category_ = category==='/'?undefined:category;
        let cat = (category_?constants.pathOf(category):'');
        return await _getAllChildFeatures(cat);
    }

     //this method returns an array of drink objects in a category if given, else an array of all drink objects
    static async  getDrinks(category){
        global.counterLoop=0;
        if(constants.nameOf(category)===constants.nameOf(constants.salty)||constants.nameOf(category)===constants.nameOf(constants.sweet)){
            let cat = constants.drinks+constants.fixed+constants.pathOf(category);
            let result = await _getProducts(cat);
            cat = constants.drinks+constants.combined+constants.pathOf(category);
            return result.concat(await _getProducts(cat));
        }else {
            let category_ = category==='/'?undefined:category;
            let cat = constants.drinks+(category_?constants.pathOf(category):'');
            let a = await _getProducts(cat);
            return a;
        }
    }
    
    //this method returns the list of root children
    static async  getRootChildren(){
        return await Getter.getChildren(await Getter.getDbRef());  
    }

    //this method returns an array of raw material objects in a category if given, else an array of all raw material objects
    static async  getRawMaterials(rawMaterialCategory){
        global.counterLoop=0;
        let cat = constants.rawMaterials+(rawMaterialCategory?rawMaterialCategory.indexOf('/')==0?rawMaterialCategory:constants.pathOf(rawMaterialCategory):'');
        return await _getProducts(cat);
    }

    //this method return the feature description string given the features object or raw material name
    static async  getDescriptionOfRawMaterialCategoryFeature(source,featureName){
        if(typeof source == 'string'){
            var featureNames = Getter.getRawMaterialCategoryFeatureNames(source)
            var featureObj = Getter.getRawMaterialCategoryFeaturesObject(source);
        }else{
            var featureNames = Object.keys(source);
            var featureObj = source;
        }
        return featureNames?.indexOf(featureName)>-1?featureObj[featureName]:undefined;  
    }


    //this method return the features' object of the food or food category
    static async  getFixedFoodCategoryFeaturesObject(productCategoryName){ 
        return await _getFeaturesObject(productCategoryName,1);
    }
    //this method return the features' object of a drink or drink category
    static async  getFixedDrinkCategoryFeaturesObject(productCategoryName){
        return await _getFeaturesObject(productCategoryName,2);
    }
    //this method return an object of features of a rawMaterial or rawMaterial category
    static async  getRawMaterialCategoryFeaturesObject(rawMaterialCategoryName){
        return await _getFeaturesObject(rawMaterialCategoryName,3);
    }
    //this method return an object of features of a input based on type (constants.foods,constants.drinks,constants.rawMaterials)
    static async  getFeaturesObject(input,type){
        switch(type){
            case constants.foods:
                return await _getFeaturesObject(input,1);
            case constants.drinks:
                return await _getFeaturesObject(input,2);
            case constants.rawMaterials:
                return await _getFeaturesObject(input,3);
            default: return {};
        }
    }

    //this method return the string feature names array of a food or food category
    static async  getFixedFoodCategoryFeaturesNames(productCategoryName){
        return await _getFeatureNames(productCategoryName,1);
    }
    //this method return the string feature names array of a drink or drink category
    static async  getFixedDrinkCategoryFeaturesNames(productCategoryName){
        return await _getFeatureNames(productCategoryName,2);
    }
    //this method return the string feature names array of a rawMaterial or rawMaterial category
    static async  getRawMaterialCategoryFeatureNames(rawMaterialCategoryName){
        return await _getFeatureNames(rawMaterialCategoryName,3);
    }
    //this method return a list of string of features' name of a input based on type (constants.foods,constants.drinks,constants.rawMaterials)
    static async  getFeaturesNames(input,type){
        switch(type){
            case constants.foods:
                return await _getFeatureNames(input,1);
            case constants.drinks:
                return await _getFeatureNames(input,2);
            case constants.rawMaterials:
                return await _getFeatureNames(input,3);
            default: return {};
        }
    }
}

  async function _getProducts(category){
    global.counterLoop++;
    if(global.counterLoop>constants.counterLoop) return;
    var ref =  await Getter.getDbRef(constants.productsPath()+category);
    let products = [];
    let numOfSubCategories =  await _getDepthSubCategories(ref);
    if(numOfSubCategories==0){
        let snap=  await ref.once('value').then(x=>{return x});
            snap.forEach(product=>{
                if(product.key!==constants.nameOf(constants.features)){
                    let item = product.val();
                    item.name = product.key;
                    item.category = category;
                    products.push(item);
                }
            });
        return products;
    }else{
        var categories =  await Getter.getChildren(ref);
        for(let i=0;i<categories.length;i++){
            let prods = undefined;
            prods =   await _getProducts(category+constants.pathOf(categories[i]));
            global.counterLoop=0;
            if(prods) products=products.concat(prods);
        }
        return products;
    }
}

  async function _getAssociatedFeatures(categoryName){
    if(typeof categoryName === 'string'){
        var category = categoryName;
        var productPath = constants.productsPath();
        var path = productPath+category;
        var ref =   await Getter.getDbRef(path);
    }else{
        var ref =   categoryName.parent;
        var path = ref?.toString().substring(ref.root.toString().length);
        var productPath = constants.productsPath();
        var category = path.substring(productPath.length);
    }
    let features = undefined;
    let snap=  await ref.once('value').then(x=>{return x});
            var BreakException = {};
            try{
            snap.forEach(product=>{
                if(product.key===constants.nameOf(constants.features)){
                    let item = product.val();
                    item.name = product.key;
                    item.category = category;
                    features = item;
                    throw BreakException;
                }
            });
            }catch(e){
                if(e!== BreakException) throw e;
            }
    if(!features){
    if(!path) return;
    let higherFeatures = await _getAssociatedFeatures(ref);
    if(higherFeatures){
        features = higherFeatures;
        features.category=features.category.concat(path.substring(path.lastIndexOf('/')));
    }
    }
    return features;
}

  async function _getDepthSubCategories(ref){
    var depth = 0;
    var categories = await Getter.getChildren(ref);
    for(let i=0;i<categories.length;i++){
        let category = categories[i];
        if(category===constants.nameOf(constants.description)){
            return -1;
        }
    }
    if(categories.length>0) depth = await _getDepthSubCategories(ref.child(categories[0]));
    depth++;
    return depth;
}

  async function _buildPath(basePath, targetProduct){
    let children = await Getter.getChildren(basePath);
    let path = undefined;
    var BreakException = {};
    var depth = await _getDepthSubCategories(await Getter.getDbRef(basePath));
    if(depth<0) return;
    try{
    children.forEach(async child =>{
        if(child!==targetProduct) {
            let result = await _buildPath(basePath+constants.pathOf(child),targetProduct);
            if(result!==undefined){
                path = constants.pathOf(child.concat(result));
                throw BreakException;
            }
        }else{
            path='';
            throw BreakException;
        }
    });
    }catch(e){
        if(e!== BreakException) throw e;
    }
    return path;
}

  async function _getFeaturesObject(name,num){
    let basePath = num===3?(constants.rawMaterialsPath()):num===1?(constants.fixedPathOf(constants.foodsPath())):num===2?(constants.fixedPathOf(constants.drinksPath())):'';
    let path = await _buildPath(basePath,name);
    let isNotEmpty = path?.length!==0&&path!==constants.salty&&path!==constants.sweet;
    path = (num===3?(constants.rawMaterials):num===1?(constants.fixedPathOf(constants.foods)):num===2?(constants.fixedPathOf(constants.drinks)):'') 
        + (isNotEmpty?constants.pathOf(path):'') + (isNotEmpty?'':constants.pathOf(name));
    return name?path?await _getAssociatedFeatures(path):{}:{};
}

  async function _getFeatureNames(name,num){
    let featureNames = [];
    let featureObj = await _getFeaturesObject(name,num);
    if(featureObj){
        Object.keys(featureObj)?.forEach(feature => {
        if(feature!=='category'&&feature!=='name') featureNames.push(feature);
        });
    }
    return featureNames;
}

//this method returns an array of string categories given a db Reference or its path
  async function _getChildFeatures(dbReference){
    let ref = dbReference?(typeof dbReference === 'string')? await Getter.getDbRef(dbReference): dbReference: await Getter.getDbRef();
    var feature = undefined;
    let tempCategory = ref.path.pieces_;
    let category ='';
    tempCategory.slice(2).forEach(piece=>{
        category=category.concat('/'+piece);
    });
    let snap=  await ref.once('value').then(x=>{return x});
        var BreakException ={};
        try{
            snap.forEach(child=>{
                if(child.key===constants.nameOf(constants.features)){
                    feature=child.val();
                    feature.category=category;
                    throw BreakException;
                }
            });
        }catch(e){
            if(e!== BreakException) throw e;
        }
    return feature;  
}

  async function _getAllChildFeatures(category){
    global.counterLoop++;
    if(global.counterLoop>constants.counterLoop) return;
    let features = [];
    var ref =   await Getter.getDbRef(constants.productsPath()+category);
    let numOfSubCategories = await _getDepthSubCategories(ref);
    if(numOfSubCategories>-1){
        let newFeature = await _getChildFeatures(ref);
        if(newFeature){
            features.push(newFeature);
        }
    }
    if(numOfSubCategories>0){
        let categories = await Getter.getChildren(ref);
        for(let i=0;i<categories.length;i++){
            let newFeatures = await _getAllChildFeatures(category+constants.pathOf(categories[i]));
            global.counterLoop=0;
            if(newFeatures?.length>0) {
                newFeatures.forEach(asyncnewFeature=>{
                    let exist=false;
                    features.forEach(existingFeature =>{
                        let tempF = {...existingFeature};
                        let tempNF = {...newFeature};
                        delete tempF.category;
                        delete tempNF.category;
                        exist = JSON.stringify(tempNF)===JSON.stringify(tempF);
                        if(exist){
                            let c = existingFeature.category.split(',');
                            if(c.indexOf(newFeature.category)<0){
                                existingFeature.category = existingFeature.category+','+newFeature.category;
                            }
                        }
                    });
                    if(!exist) {
                        features.push(newFeature);
                    }
                });
            }
        }
    }
    return features;
}

export default Getter;