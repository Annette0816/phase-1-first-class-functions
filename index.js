function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction(params) {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        
    }
}