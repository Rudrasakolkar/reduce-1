const cl=console.log;

// this code is by using object

var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


//compName:companies one , lifespan:1981 -2003


let result = companies.reduce((acc, cv) => {

    let obj = {
        compName: cv.name,
        lifeSpan: `${cv.start}-${cv.end}`
    };

     acc.push(obj);

    return acc;

},[]);

console.log(result);



// compName: 'Company One', lifespan: '1981-2003'
let result01 = companies.reduce((acc , cv)=>{

    acc.push({
        compName: cv.name,
        lifespan:`${cv.start}-${cv.end}`
    })

    return acc;

},[]);

cl(result01);



// compName: 'Company One', duration: '22 years'
let result02 = companies.reduce((acc , cv)=>{

    acc.push({
        compName:cv.name,
        duration:`${cv.end - cv.start} years`
    })

    return acc;

}, []);

cl(result02);



//  'The company name is Company One and category is Finance and it run for 22 years '
let result03 = companies.reduce((acc , cv)=>{

    acc.push(`The company name is ${cv.name} and category is ${cv.category} and it run for ${cv.end - cv.start} years `);

 return acc;

} ,[]);

cl(result03);


//catgory of companies must be "retail" 
let result04 = companies.reduce((acc, cv) => {

    if (cv.category.toLowerCase().includes("retail")) {
        acc.push(cv);
    }
    return acc;

}, []);

cl(result04);




//catgory of companies must be "Finance" 
let result05 = companies.reduce((acc, cv) => {

    if (cv.category.includes("Finance")) {
        acc.push(cv);
    }
    return acc;

}, []);

cl(result05);



//Create a array of who runs at least 10 years 

let result06 = companies.reduce((acc , cv)=>{
  if (cv.end - cv.start >=10){
    acc.push(cv);
  }
  return acc;
}, []);
cl(result06);



//Create a array of who runs at least 20 years 
let result07 = companies.reduce((acc , cv)=>{
    if (cv.end - cv.start >=20){
      acc.push(cv);
    }
    return acc;
  }, []);
  cl(result07);



  
//catgory of companies must be "Auto" 
let result08 = companies.reduce((acc, cv) => {

    if (cv.category.indexOf("Auto") >-1) {
        acc.push(cv);
    }
    return acc;

}, []);

cl(result08);