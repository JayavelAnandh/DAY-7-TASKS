//DAY 6>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Movie{//OOPS TASK 1ST QUESTION
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if (rating==undefined){
            this.rating = "PG"
        }
       
            }
            set PG(arr){
                var newarr=[];
                if(rating=="PG"){
                    newarr.push(this.title);
                        console.log(newarr);
                    
        }
    }
}

var result= new Movie("Interstellar","Hollywood","PG22");
console.log(result);
var result2= new Movie("Casino Royale","Eon Productions","PG13")
console.log(result2);
//Movie {title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG13'}
//output
//----------------------------------------------------


class Person{// OOPS TASK 3RD question
    constructor(name,gender,age,nationality,qualification,martialstatus,birthdate,mothertoungue,profession){
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.nationality=nationality;
        this.qualification=qualification;
        this.martialstatus=martialstatus;
        this.birthdate=birthdate;
        this.mothertoungue=mothertoungue;
        this.profession=profession;
    }
}
var result3 = new Person("Johnny Deep","male","40","Indian","10th-Fail","divorced","1.1.1982","tamil","Actor");
console.log(result3);
console.log(result3.profession+"--"+result3.name);
//Person {name: 'Johnny Deep', gender: 'male', age: '40', nationality: 'Indian', //qualification: '10th-Fail', …}
//Actor--Johnny Deep
// output
//-----------------------------------------------

class Uberprice{//-----4th question OOPS METHOD
    constructor(startingpoint,destination,range,priceperkm,pricefor2share,pricefor4share,acprice){
        this.startingpoint=startingpoint;
        this.destination=destination;
        this.range=range;
        this.priceperkm=priceperkm;
        this.pricefor2share=pricefor2share;
        this.pricefor4share=pricefor4share;
        this.acprice=acprice;
    }
}
var result4= new Uberprice("erode","bhavani","12","15","25","50","5");
console.log(result4);
// Uberprice {startingpoint: 'erode', destination: 'bhavani', range: '12', priceperkm: '15', pricefor2share: '25', …}----output


// to find price of 2 people travelling in with ac from madras central to thoraipaikkam(assume 28 km)
var tr = new Uberprice("madras central","thoraipakkam",28,15,25,50,5);
var travelcharges=console.log(tr.range*(tr.pricefor2share+ (tr.acprice)));
//840---output

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//day 7 -array method tasks

//1st question
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send( );
request.onload=function(){
    var data = request.response;
    var obt = JSON.parse(data);

    var filreg = obt.filter((a)=>a.region=="Asia");
   // console.log(filreg);it shows in array of objects
    //to print their names
    var fgname = filreg.map((a)=>console.log(a.name.common+"--"+a.region));

//  Jordan--Asia
//  Vietnam--Asia
//  Brunei--Asia   sample ouput in console the full output has 50 countries
//  Japan--Asia
//  Hong Kong--Asia
//  Saudi Arabia--Asia
//  North Korea--Asia
//-------------------------------------

// 2nd question

var filpop = obt.filter((a)=>a.population<200000);
//console.log(filpop); it gives array of objects format
// to print the names of countries
var fpname=filpop.map((a)=>console.log(a.name.common+"--"+a.population));
        // output in console (full ouput has 68 countries)
//  Sint Maarten--40812
//  United States Minor Outlying Islands--300
//  Antigua and Barbuda--97928
//  Saint Pierre and Miquelon--6069
//  Saint Vincent and the Grenadines--110947
//  South Georgia--30
//  Caribbean Netherlands--25987

// 3rd question
obt.forEach(ele => {
    console.log(ele.name);
    console.log(ele.flag);
    console.log(ele.capital);
});

// 4th question
var redpop = obt.reduce((acc,cv)=>acc+cv.population,0);
console.log(redpop);
}

//5th question

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send( );
request1.onload=function(){
    var data1 = request1.response;
    var obt1 = JSON.parse(data1);

var filcur = obt1.filter((a)=>{
    for(let k in a.currencies){
        if(a.currencies[k].code=="USD"){
            console.log(a.name);
    }
    }
})
}










