
    function Calc(a , b)
    {
        this._a = 0;
        this._b = 0;
        this.uncorectVal = 'uncorect value !';
        this.divineByZero = 'divine by zero!';

        this.setA = function(a)
        {
            
            if(parseInt(a) || parseFloat(a) || 0 == a){
                this._a = +a;
            }else{
                return this._a = this.uncorectVal ;
            }
        };

        this.setB = function(b)
        {
            
            if(parseInt(b) || parseFloat(b) || 0 == b){
                this._b = +b;
            }else{
                return this._b = this.uncorectVal ;
            }
            
        };

        this.getA = function()
        {
            return this._a;
        };

        this.getB  = function()
        {
            return this._b;
        };

        this.plus = function()
        {
            return this._a + this._b;
        }

        this.minus = function()
        {
            return this._a - this._b;
        }
        this.multiple = function()
        {
            return this._a * this._b;
        }
        
        this.devine = function()
        {
            if(0 == this._b){
                return this.divineByZero;
            }else{
                return this._a / this._b;
            }
        }

        this.showRes =  function()
        {   
            validation = this.uncorectVal ;
            A = this.setA(a);
            B = this.setB(b);
            if(validation == A || validation == B){
                var str = '\nbaseline values ('+this._a+') and ('+this._b+')\n' ;
                console.log(str);
                document.getElementById('showResult').innerText += str;
            }else{
                var plus = this.plus();
                var minus = this.minus();
                var multiple = this.multiple();
                var devine = this.devine();
                var str = '\nbaseline values ('+this._a+') and ('+this._b+')\nPlus = '+plus
                +'\nMinus = '+minus+'\nMultiple = '+multiple+'\nDevine = '+devine +'\n-----------------------------\n';
                console.log(str);
                document.getElementById('showResult').innerText += str;
            }
        }
       
        
    }


var calc = new Calc('345' ,'0');

a = calc.showRes();

var calc = new Calc(5 , 20);

b = calc.showRes();



