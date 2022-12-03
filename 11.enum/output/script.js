"use strict";
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["ERROR"] = 3] = "ERROR";
    RType[RType["FORBIDDEN"] = 4] = "FORBIDDEN";
})(RType || (RType = {}));
;
const response1 = {
    status: 200,
    type: RType.SUCCESS,
    data: {
        'name': 'test',
    }
};
console.log(response1);
