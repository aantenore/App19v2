import * as firebase from 'firebase';

export default class firebaseClass{
//this is a singleton which works as api for firebase
    static appinit=undefined;
    static db=undefined;
    static db = () => {return(this.appinit?this.database?this.db:this.appinit.database():app().database())}

}

const firebaseConfig = {
    apiKey: "AIzaSyDbJG13DTEhwbJO_6IBuLLoIG4IZrvatgk",
    authDomain: "growingapp-ec2cc.firebaseapp.com",
    databaseURL: "https://growingapp-ec2cc.firebaseio.com",
    projectId: "growingapp-ec2cc",
    storageBucket: "growingapp-ec2cc.appspot.com",
    messagingSenderId: "976710702186",
    appId: "1:976710702186:web:0fa81897805311e3e62613"
  };

function app(){firebaseClass.appinit = firebase.initializeApp(firebaseConfig); return firebaseClass.appinit}
