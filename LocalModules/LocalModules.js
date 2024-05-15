const isOddEven = (number)=>{
    if(number%2==0)
        console.log("Number is even.");
    else
        console.log("Number is odd.");
};

const numCheck = (number)=>{
    if(number>0)
        console.log("Number is positive.");
    else
        console.log("Number is negative.");
};

const primeNum = (number)=>{
    count=0;
    for(i=1;i<=number;i++){
        if(number%i==0){
            count++;
        }
    }
    if(count==2)
        console.log("Number is prime.");
    else
        console.log("Number is not prime.");
};

const armstrong = (number)=>{
    m=0;
    sum=0;
    temp=number;
    while(number>0){
        m=number%10;
        sum=sum+(m*m*m);
        number=parseInt(number/10);
    }
    if(sum==temp)
        console.log("it is a armstrong number.");
    else
        console.log("it is not armstrong number.");
};

const palindrome = (number)=>{
    r=0;
    sum=0;
    temp=number;
    while(number>0){
        r=number%10;
        sum=(sum*10)+r;
        number=parseInt(number/10);
    }
    if(sum==temp)
        console.log("it is a palindrome number.");
    else
        console.log("it is not palindrome number.");
}

const numDigit = (number) =>{
    digit=0;
    while(number!=0){
        count=number%10;
        digit++;
        number=parseInt(number/10);
    }
    console.log(digit);
}

const factorial = (number) =>{
    fact=1;
    for(i=1;i<=number;i++){
        fact=fact*i;
    }
    console.log(fact);
}

const sumDigit = (number)=>{
    r=0,sum=0;
    while(number>0){
        r=number%10;
        sum+=r;
        number=parseInt(number/10);
    }
    console.log("sumDigit is:-",sum);
};

const leapyear = (year)=>{
    if(year%4==0 || year%400==0 && year%100!=0)
        console.log(year + "is leap year.");
    else
        console.log(year + "is not leap year.");
};

const max2 = (number1,number2)=>{
    if(number1>number2)
        console.log(number1 + "is max.");
    else
        console.log(number2 + "is max.");
};

const max3 = (number1,number2,number3)=>{
    if(number1>number2 && number1>number3)
        console.log(number1 +" is max.");
    else if(number2>number3)
        console.log(number2 + "is max.");
    else
        console.log(number3 + "is max.");
};

module.exports.isOddEven=isOddEven;
module.exports.numCheck=numCheck;
module.exports.primeNum=primeNum;
module.exports.armstrong=armstrong;
module.exports.factorial=factorial;
module.exports.sumDigit=sumDigit;
module.exports.numDigit=numDigit;
module.exports.leapyear=leapyear;
module.exports.max2=max2;
module.exports.max3=max3;
module.exports.palindrome=palindrome;