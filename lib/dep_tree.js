const _ = require("lodash");

class DepTree {
	
    constructor( val ) {
    	this.val = val ;
    	this.deps = [] ;
    	this.orphan = true ;
    }
    
    getRootValue() {
    	return val ;
    }

    addDep( dep ) {
    	this.orphan = false ;
    	this.deps.push( dep ) ;
    }
    
    isOrphan() {
    	return this.orphan ;
    }
    
    getDepOrder() {
    	
    	var flatDeps = [] ;

     	console.log( "this.deps", this.deps );
    	 _.forEach( this.deps, function ( node ) {
    		 flatDeps = _.concat( flatDeps, node.getDepOrder() ) ;
         	
         } )
         
    	return flatDeps ;
    }
}

module.exports = DepTree;