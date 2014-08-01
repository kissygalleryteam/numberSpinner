/**
 * @fileoverview
 * @author
 * @module numberspinner
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Numberspinner
     * @constructor
     * @extends Base
     */
    function Numberspinner(comConfig) {
        var self = this;
        //调用父类构造函数
        Numberspinner.superclass.constructor.call(self, comConfig);
    }
    S.extend(Numberspinner, Base, /** @lends Numberspinner.prototype*/{

    }, {ATTRS : /** @lends Numberspinner*/{

    }});
    return Numberspinner;
}, {requires:['node', 'base']});



