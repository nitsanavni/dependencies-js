const _ = require("lodash");
const DepTree = require("../lib/dep_tree");

class Solver {
	
    constructor(dependencies) {
    	this.rootNode = new DepTree( "ROOT" ) ;
    	this.allNodes = {} ;
        this.dependencies = dependencies;
    }

    solve() {
    	
    	var top, bot ;
    	var selfRef = this ;
    	
        _.forEach( this.dependencies, function( depArr ) {

        	top = selfRef.getNodeRef( depArr[ 0 ] ) ;
        	bot = selfRef.getNodeRef( depArr[ 1 ] ) ;
        	
        	top.addDep( bot ) ;
        	
        }) ;
        
        _.forOwn( this.allNodes, function ( node ) {
        	
        	if ( node.isOrphan() ) {
        		selfRef.rootNode.addDep( node ) ;
        	}
        	
        } )
           
        return this.rootNode.getDepOrder() ;
    }
    
    getNodeRef( val ) {
    	return this.allNodes[ val ] || new DepTree( val ) ;    	
    }
    
    
}

module.exports = Solver;