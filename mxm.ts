class Mxm {

}

class mString extends Mxm {
    constructor(){
        super()
    }
    trim(i:string,type:number){
        //type 1全文去空格， 2前后去空格， 3前去空格， 4后去空格
        switch(type){
            case 1:
                return i.replace(/\s+/g,'');
            case 2:
                return i.replace(/(^\s*)|(\s*$)/g,"");
            case 3:
                return i.replace(/(^\s*)/g,'')
            case 4:
                return i.replace(/(\s*$)/g,'')
            default:
                return i
        }
    }
    chageCase(str:string,type:number){
        //1 首字母大写 2首字母小写  3大小写替换  4全部大写 5全部小写
        function ToggleCase(str:string):string{
            let itemText:string = '';
            str.split('').map((item)=>{
                if(/^([a-z]+)/.test(item)){
                    itemText += item.toUpperCase()
                }else if(/^([A-Z]+)/.test(item)){
                    itemText += item.toLowerCase()
                }else{
                    itemText += item;
                }
            })
                return itemText
        }
        switch(type){
            case 1:
                return str.replace(/\b\w+\b/g,(word)=>{
                    return word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase()
                })
            case 2:
                return str.replace(/\b\w+\b/g,(word)=>{
                    return word.substring(0,1).toLowerCase()+word.substring(1).toUpperCase()
                })
            case 3:
                return ToggleCase(str)
            case 4:
                return str.toUpperCase()
            case 5:
                return str.toLowerCase() 
            default:
                return str
        }
    }
    repeatStr(str:string,count:number){
        let text:string='';
        for(let i=0; i< count; i++){
            text += str
        }
        return text
    }
    replace(str:string,find:any,replaceText?:string){
        let arr:any =[]
       if(typeof find === 'string'){
           if(replaceText){
            let reg = new RegExp(find,"g")
            return str.replace(reg,replaceText)
           }else{
            let reg = new RegExp(find,"g")
            let length = find.length
            return str.replace(reg,this.repeatStr("*",length))
           }
       }else if(find instanceof Array) {
            if(find.length == 1 && find[0]>0){
                if(replaceText){
                    let newstr:string = ''
                    newstr = str.slice(0,find[0])+replaceText
                    return newstr
                }else{
                    let newstr:string = ''
                    newstr = str.slice(0,find[0])+this.repeatStr("*",str.slice(find[0]).length)
                    return newstr
                }
            }else if(find.length == 1 && find[0]<0){
                if(replaceText){
                    let newstr:string = ''
                    newstr = str.slice(find[0])+replaceText
                    return newstr
                }else{
                    let newstr:string = ''
                    newstr = this.repeatStr("*",str.slice(find[0]).length)+str.slice(find[0])
                    return newstr
                }
            }else if(find.length == 2){
                if(replaceText){
                    let newstr:string = ''
                    newstr = str.slice(find[0],find[1])+replaceText
                    return newstr
                }else{
                    let newstr:string = ''
                    newstr = this.repeatStr("*",str.slice(find[0],find[1]).length)+str.slice(find[0])
                    return newstr
                }
            }else if(find.length == 2){
                throw 'find 只接受 starPoint,endPoint两个indexNumber'
                }
            else{
                throw 'index 不可以为0'
            }
       }else{
           return str
       }
    }
    checkInputType(str:string,type:string){
        switch(type){
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
            case 'phone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(str);  
            case 'tel':
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'english':
                return /^[a-zA-Z]+$/.test(str);
            case 'chinese':
                return  /^[\u4E00-\u9FA5]+$/.test(str);
            default:
                return true
        }
    }
    countApear(str:string,key:string){
        return str.split(key).length -1
    }
}


class mArray extends Mxm{
    constructor(){
        super()
    }
    noRepeat(arr:Array<number|string>){
        return arr.filter((item,index,self)=>{
            return self.indexOf(item) === index
        })
    }
    max(arr:Array<number>){
        return Math.max.apply(null,arr)
    }
    min(arr:Array<number>){
        return Math.min.apply(null,arr)
    }
    sum(arr:Array<number>){
        return arr.reduce((pre,cur)=>{
            return pre+ cur
        })
    }
    average(arr:Array<number>){
        return 
    }
}

let m = new Mxm()
console.log(
    
)
