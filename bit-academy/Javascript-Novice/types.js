let data = ["Hello", 3, 3.2, 3, true, false, 3.0 + 3, 3 + "3"];

for(let index = 0; index < data.length; index++){
    let datatype = typeof data[index];
    if(datatype == "number"){
        {
            if(Number. isInteger(data[index]))
            {
                    datatype = "number int";
            }
            else{
                datatype = "number float";
            }
        }
    }
    console.log(data[index] + "is a" + datatype);
}