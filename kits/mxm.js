"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mxm = /** @class */ (function () {
    function Mxm() {
    }
    return Mxm;
}());
var mString = /** @class */ (function (_super) {
    __extends(mString, _super);
    function mString() {
        return _super.call(this) || this;
    }
    mString.prototype.trim = function (i, type) {
        //type 1全文去空格， 2前后去空格， 3前去空格， 4后去空格
        switch (type) {
            case 1:
                return i.replace(/\s+/g, '');
            case 2:
                return i.replace(/(^\s*)|(\s*$)/g, "");
            case 3:
                return i.replace(/(^\s*)/g, '');
            case 4:
                return i.replace(/(\s*$)/g, '');
            default:
                return i;
        }
    };
    mString.prototype.chageCase = function (str, type) {
        //1 首字母大写 2首字母小写  3大小写替换  4全部大写 5全部小写
        function ToggleCase(str) {
            var itemText = '';
            str.split('').map(function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else {
                    itemText += item;
                }
            });
            return itemText;
        }
        switch (type) {
            case 1:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
                });
            case 2:
                return str.replace(/\b\w+\b/g, function (word) {
                    return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
                });
            case 3:
                return ToggleCase(str);
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    };
    mString.prototype.repeatStr = function (str, count) {
        var text = '';
        for (var i = 0; i < count; i++) {
            text += str;
        }
        return text;
    };
    mString.prototype.replace = function (str, find, replaceText) {
        var arr = [];
        if (typeof find === 'string') {
            if (replaceText) {
                var reg = new RegExp(find, "g");
                return str.replace(reg, replaceText);
            }
            else {
                var reg = new RegExp(find, "g");
                var length_1 = find.length;
                return str.replace(reg, this.repeatStr("*", length_1));
            }
        }
        else if (find instanceof Array) {
            if (find.length == 1 && find[0] > 0) {
                if (replaceText) {
                    var newstr = '';
                    newstr = str.slice(0, find[0]) + replaceText;
                    return newstr;
                }
                else {
                    var newstr = '';
                    newstr = str.slice(0, find[0]) + this.repeatStr("*", str.slice(find[0]).length);
                    return newstr;
                }
            }
            else if (find.length == 1 && find[0] < 0) {
                if (replaceText) {
                    var newstr = '';
                    newstr = str.slice(find[0]) + replaceText;
                    return newstr;
                }
                else {
                    var newstr = '';
                    newstr = this.repeatStr("*", str.slice(find[0]).length) + str.slice(find[0]);
                    return newstr;
                }
            }
            else if (find.length == 2) {
                if (replaceText) {
                    var newstr = '';
                    newstr = str.slice(find[0], find[1]) + replaceText;
                    return newstr;
                }
                else {
                    var newstr = '';
                    newstr = this.repeatStr("*", str.slice(find[0], find[1]).length) + str.slice(find[0]);
                    return newstr;
                }
            }
            else if (find.length == 2) {
                throw 'find 只接受 starPoint,endPoint两个indexNumber';
            }
            else {
                throw 'index 不可以为0';
            }
        }
        else {
            return str;
        }
    };
    mString.prototype.checkInputType = function (str, type) {
        switch (type) {
            case 'email':
                return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
            case 'phone':
                return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
            case 'tel':
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'english':
                return /^[a-zA-Z]+$/.test(str);
            case 'chinese':
                return /^[\u4E00-\u9FA5]+$/.test(str);
            default:
                return true;
        }
    };
    mString.prototype.countApear = function (str, key) {
        return str.split(key).length - 1;
    };
    return mString;
}(Mxm));
var mArray = /** @class */ (function (_super) {
    __extends(mArray, _super);
    function mArray() {
        return _super.call(this) || this;
    }
    mArray.prototype.noRepeat = function (arr) {
        return arr.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });
    };
    mArray.prototype.max = function (arr) {
        return Math.max.apply(null, arr);
    };
    mArray.prototype.min = function (arr) {
        return Math.min.apply(null, arr);
    };
    mArray.prototype.sum = function (arr) {
        return arr.reduce(function (pre, cur) {
            return pre + cur;
        });
    };
    mArray.prototype.average = function (arr) {
        return;
    };
    return mArray;
}(Mxm));
var m = new Mxm();
console.log();
