let nama = prompt('Masukkan nama : ');
alert('Hai ' + nama + '!');

let Ubah = ()=>{
    let input = 0;
    let celcius= 0;
    let fahrenheit= 0;
    let kelvin= 0;
    let reamur= 0;
    let pilih;
    input = document.getElementById('nilaiSuhu')
    pilih = document.getElementById('pilih')
        if(pilih.value === 'celcius'){
            celcius = input.value;
            
            
            fahrenheit = (input.value * 9/5) + 32;
            

            kelvin = eval(input.value+ '+' +273.15)
            

            reamur = (input.value) * 4/5;
            

        } else if(pilih.value === 'fahrenheit'){
            celcius = (input.value - 32)* 5/9;

            fahrenheit = input.value;
            

            kelvin = (input.value - 32)* 5/9 + 273.15;
            

            reamur = (input.value - 32)* 4/9;
            

        } else if(pilih.value === 'kelvin'){
            celcius = (input.value - 273.15);
            

            fahrenheit = (input.value - 273.15)* 9/5 + 32;
            

            kelvin = input.value;
            

            reamur = (input.value - 273.15)* 4/5;
            

        } else{
            celcius = (input.value)* 5/4;
            

            fahrenheit = (input.value * 9/4) + 32;
            

            kelvin = (input.value * 5/4) + 273.15 ;
            

            reamur = input.value;
            

        }
    

    if(confirm('Apakah sudah benar?') === true){
        document.getElementById('c').innerHTML = celcius;
        document.getElementById('f').innerHTML = fahrenheit;
        document.getElementById('k').innerHTML = kelvin;
        document.getElementById('r').innerHTML = reamur;
    } else{
        celcius= 0;
        fahrenheit= 0;
        kelvin= 0;
        reamur= 0;
    }

}







    
