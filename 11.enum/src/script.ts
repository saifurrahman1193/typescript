enum RType { SUCCESS, FAILURE, UNAUTHENTICATED, ERROR, FORBIDDEN };

interface APIResponse<T>
{
    status: number;
    type: RType;
    data: T;
}

const response1 : APIResponse<object>  = {
    status: 200,
    type: RType.SUCCESS,
    data: {
        'name': 'test',
    }
}

console.log(response1)