function LineString(){
    var _items = [];
    var _len = 0;
    // 生成串
    this.strAssign = function(str){
        for(var i = 0, len = str.length; i < len; i++){
            _items[i] = str[i];
        }
        _len = len;
        return _items;
    }
    // 复制串
    this.strCopy = function(){
        var newStr = [];
        if(_len > 0){
            for(var i = 0; i < _len; i++){
                newStr.push(_items[i]);
            }
        }
        return newStr;
    }
    // 串长度
    this.strLength = function(){
        return _items.length;
    }
    // 串连接
    this.strConcat = function(){
        for(var i = 0; i < arguments.length; i++){
            console.log('ss:' + arguments[i]);
            _items = _items.concat(arguments[i]);
        }
    }
    // 求子串
    this.subStr = function(starChar, item){
        var newArr = [];
        for(var i = starChar ; i < starChar + item; i++){
            newArr.push(_items[i]);
        }
        return newArr;
    }
    // 插入串
    this.insertStr = function(starPosition, lineStringObj){
        if(starPosition < 0 || starPosition > _len){
            return _items;
        }
        _items.splice(starPosition, 0, ...lineStringObj);
        return _items;
    }
    this.getCharAt = function(char){
        return _items.indexOf(char);
    }
    this.deleteCharAt = function(position){
        return _items.splice(position, 1);
    }
    this.deleteChar = function(char){
        var index = this.getCharAt(char);
        this.deleteCharAt(index);
    }
    this.get = function(){
        return _items;
    }
    this.show = function(){
        console.log(_items);
    }
}
// LineString.constructor = 'LineString'

var lineString1 = new LineString();
lineString1.strAssign('hello world');
var lineString2 = new LineString();
lineString2.strAssign('你好 世界');
var lineStringCopy = lineString1.strCopy();
console.log(lineStringCopy);

lineString2.show();
lineString1.strConcat(lineString2.get());
lineString1.show();
console.log(lineString1.subStr(0, 3));
lineString1.show();
lineString1.insertStr(1, ['aa', 'bb']);
lineString1.show();
lineString1.deleteChar('h');
lineString1.deleteCharAt(0);
lineString1.show();
console.log(lineString1.getCharAt('世'));
