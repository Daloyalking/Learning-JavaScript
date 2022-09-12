let challenge='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,1));
console.log(challenge.slice(3));
console.log(challenge.includes("0"));
console.log(challenge.split('|'));

let listOfItems='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(listOfItems.split(','));
console.log(challenge.replace("JavaScript","Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let shortSentence='You cannot end a sentence with because because because is a conjunction';
console.log(shortSentence.indexOf("because"));
console.log(shortSentence.lastIndexOf("because"));
console.log(shortSentence.search("because"));

let usingTrim=' 30 Days Of JavaScript ';
console.log(usingTrim.trim());

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("pt"));
console.log(challenge.match("a"));

console.log(`Is "10"=10"? ${'10'==10} `);

let string1="python";
let string2="Jargon";
console.log(`Is "on" in both ${string1} and ${string2}?: ${string1.includes("on")==string2.includes("on")}`);


let randomNumber=Math.floor((Math.random()*100)+1);
console.log(`Random number between 0 and 100 is: ${randomNumber}`);


let randomNumber1=Math.floor((Math.random()*50)+50);
console.log(`Random number between 50 and 100 is: ${randomNumber1}`);


let string3='You cannot end a sentence with because because because is a conjunction'
console.log(`${string3.substr(0,30)} ${string3.substr(55)}`);

//Access the 'JavaScript' string characters using a random number.
let accessString='JavaScript';
let randomResult=Math.floor(Math.random()*accessString.length);
let javaIndex=accessString[randomResult];
console.log("Result of going through JAvaScript "+javaIndex);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(/@|%|\$|&|#/gi,""));

let annualIncome='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let annualamount=annualIncome.match(/\d+/g);
let annualIncomeResult=(annualamount[0]*12)+(annualamount[1])+(annualamount[2]*12);
console.log("The person total annual income is : "+annualIncomeResult);
 