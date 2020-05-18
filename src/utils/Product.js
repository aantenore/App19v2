import constants from "../constants/constants";

export default class Product{

    //this method return the features' object of a product object
    static getFeatureValuesObject(product){
        let feature = constants.nameOf(constants.features);
        return product?product[feature]?product[feature]:undefined:undefined;
    }

    //this method return the features' name string array of a product object
    static getFeatureNames(product){
        let features = [];
        let p = Product.getFeatureValuesObject(product);
        Object.keys(p)?.forEach(feature=>features.push(feature));
        return features;
    }

    //this method return the feature's value of product object given the feature's name
    static getValueOfFeature(product,featureName){
        let featureNames = Product.getFeatureNames(product);
        let feature = Product.getFeatureValuesObject(product);
        return featureNames?featureNames.indexOf(featureName)>-1?feature[featureName]:undefined:undefined;
    }

    //this method return the ingredients' string of a product object
    static getIngredients(product){
        let ingredients = constants.nameOf(constants.ingredients);
        return product?product[ingredients]?product[ingredients]:undefined:undefined;
    }

    //this method return the description string of a product object
    static getDescription(product){
        let description = constants.nameOf(constants.description);
        return product?product[description]?product[description]:undefined:undefined;
    }

    //this method return the name string of a product object
     static getName(product){
        return product?product['name']?product['name']:undefined:undefined;
    }

    //this method return the category string of a product object
    static getCategory(product){
        return product?product['category']?product['category']:undefined:undefined;
    }

    static getPrice(product){
        return product?product['price']?product['price']:undefined:undefined;
    }

    //this method return the components' string array of a combined product object
    static getComponents(product){
        let components = [];
        Object.keys(product)?.forEach(property=>{if(property.indexOf('c_')==0)components.push(product[property])});
        return components;
    }


}