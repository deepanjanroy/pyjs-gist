/* start module: graph */
$pyjs['loaded_modules']['graph'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['graph']['__was_initialized__']) return $pyjs['loaded_modules']['graph'];
	var $m = $pyjs['loaded_modules']['graph'];
	$m['__repr__'] = function() { return '<module: graph>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'graph';
	$m['__name__'] = __mod_name__;
	var $lambda3;

	$m['collections'] = $p['___import___']('collections', null);
	$m['common_util'] = $p['___import___']('common_util', null);
	$m['Node'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'graph';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['cost'] = 0;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('ToJsonDict', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['common_util']['SerializeAttributesToJsonDict']($p['dict']([]), self, $p['list'](['cost']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['ToJsonDict'] = $method;
		$method = $pyjs__bind_method2('FromJsonDict', function(json_dict) {
    var cls = this['prototype'];

			return $m['common_util']['DeserializeAttributesFromJsonDict'](json_dict, cls(), $p['list'](['cost']));
		}
	, 2, [null,null,['cls'],['json_dict']]);
		$cls_definition['FromJsonDict'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Node', $p['tuple']($bases), $data);
	})();
	$m['Edge'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'graph';
		$method = $pyjs__bind_method2('__init__', function(from_node, to_node) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				from_node = arguments[1];
				to_node = arguments[2];
			}

			self['from_node'] = from_node;
			self['to_node'] = to_node;
			self['cost'] = 0;
			return null;
		}
	, 1, [null,null,['self'],['from_node'],['to_node']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('ToJsonDict', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['common_util']['SerializeAttributesToJsonDict']($p['dict']([]), self, $p['list'](['from_node', 'to_node', 'cost']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['ToJsonDict'] = $method;
		$method = $pyjs__bind_method2('FromJsonDict', function(json_dict) {
    var cls = this['prototype'];
			var result;
			result = cls(null, null);
			return $m['common_util']['DeserializeAttributesFromJsonDict'](json_dict, result, $p['list'](['from_node', 'to_node', 'cost']));
		}
	, 2, [null,null,['cls'],['json_dict']]);
		$cls_definition['FromJsonDict'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Edge', $p['tuple']($bases), $data);
	})();
	$m['DirectedGraph'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'graph';
		$cls_definition['__GRAPH_NODE_INDEX'] = '__graph_node_index';
		$cls_definition['__TO_NODE_INDEX'] = '__to_node_index';
		$cls_definition['__FROM_NODE_INDEX'] = '__from_node_index';
		$method = $pyjs__bind_method2('__init__', function(nodes, edges) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				nodes = arguments[1];
				edges = arguments[2];
			}
			var node,$iter2_iter,$iter5_idx,$iter2_nextval,$iter1_nextval,$iter1_type,$lambda1,$iter5_nextval,edge,$iter5_array,$iter1_iter,$iter2_idx,$iter1_array,$iter5_type,$iter2_type,$iter5_iter,$iter2_array,$iter1_idx;
			self['_nodes'] = $p['set'](nodes);
			var 			$lambda1 = function(e) {
				var $and1,$and2;
				return ($p['bool']($and1=$p['getattr'](self, '_nodes')['__contains__']($p['getattr'](e, 'from_node')))?$p['getattr'](self, '_nodes')['__contains__']($p['getattr'](e, 'to_node')):$and1);
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['e']];
			self['_edges'] = $p['set']($p['filter']($lambda1, edges));
			if (!( $p['all'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter1_iter = $p['getattr'](self, '_nodes');
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							node = $iter1_nextval['$nextval'];
							$yield_value = $p['isinstance'](node, $m['Node']);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
) )) {
			   throw $p['AssertionError']();
			 }
			if (!( $p['all'](function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
				var $generator = function () {};
				$generator['next'] = function (noStop) {
				
					var $res;
					$yield_value = $exc = null;
					try {
						$res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res == 'undefined') {
							if (noStop === true) {
								$generator_state[0] = -1;
								return;
							}
							throw $p['StopIteration']();
						}
					} catch (e) {
				
						$is_executing=false;
						$generator_state[0] = -1;
						if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
							return;
						}
						throw e;
					}
					return $res;
				};
				$generator['__iter__'] = function () {return $generator;};
				$generator['send'] = function ($val) {
				
					$yield_value = $val;
					$exc = null;
					try {
						var $res = $generator['$genfunc']();
						if (typeof $res == 'undefined') throw $p['StopIteration']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw e;
					}
					$is_executing=false;
					return $res;
				};
				$generator['$$throw'] = function ($exc_type, $exc_value) {
				
					$yield_value = null;
					$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
															($p['isinstance']($exc_value, $exc_type)
															 ? $exc_value : $exc_type($exc_value)));
					try {
						var $res = $generator['$genfunc']();
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						throw (e);
					}
					$is_executing=false;
					return $res;
				};
				$generator['close'] = function () {
				
					$yield_value = null;
					$exc=$p['GeneratorExit']();
					try {
						var $res = $generator['$genfunc']();
						$is_executing=false;
						if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
					} catch (e) {
				
						$generator_state[0] = -1;
						$is_executing=false;
						if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
						throw (e);
					}
					return null;
				};
				$generator['$genfunc'] = function () {
					var $yielding = false;
					if ($is_executing) throw $p['ValueError']('generator already executing');
					$is_executing = true;
				
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter2_iter = $p['getattr'](self, '_edges');
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							edge = $iter2_nextval['$nextval'];
							$yield_value = $p['isinstance'](edge, $m['Edge']);
							$yielding = true;
							$generator_state[1] = 1;
							return $yield_value;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if (typeof $exc != 'undefined' && $exc !== null) {
								$yielding = null;
								$generator_state[1] = -1;
								throw $exc;
							}
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

					return;
				};
				return $generator;
			}()
) )) {
			   throw $p['AssertionError']();
			 }
			self['_in_edges'] = function(){
				var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,n,$iter3_iter,$iter3_array;
	$collcomp1 = $p['dict']();
			$iter3_iter = $p['getattr'](self, '_nodes');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				n = $iter3_nextval['$nextval'];
				$collcomp1['__setitem__'](n, $p['list']([]));
			}

	return $collcomp1;}();
			self['_out_edges'] = function(){
				var $iter4_nextval,$collcomp2,n,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp2 = $p['dict']();
			$iter4_iter = $p['getattr'](self, '_nodes');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				n = $iter4_nextval['$nextval'];
				$collcomp2['__setitem__'](n, $p['list']([]));
			}

	return $collcomp2;}();
			$iter5_iter = $p['getattr'](self, '_edges');
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				edge = $iter5_nextval['$nextval'];
				$p['getattr'](self, '_out_edges')['__getitem__']($p['getattr'](edge, 'from_node'))['append'](edge);
				$p['getattr'](self, '_in_edges')['__getitem__']($p['getattr'](edge, 'to_node'))['append'](edge);
			}
			return null;
		}
	, 1, [null,null,['self'],['nodes'],['edges']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('OutEdges', function(node) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				node = arguments[1];
			}

			return $p['getattr'](self, '_out_edges')['__getitem__'](node);
		}
	, 1, [null,null,['self'],['node']]);
		$cls_definition['OutEdges'] = $method;
		$method = $pyjs__bind_method2('InEdges', function(node) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				node = arguments[1];
			}

			return $p['getattr'](self, '_in_edges')['__getitem__'](node);
		}
	, 1, [null,null,['self'],['node']]);
		$cls_definition['InEdges'] = $method;
		$method = $pyjs__bind_method2('Nodes', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_nodes');
		}
	, 1, [null,null,['self']]);
		$cls_definition['Nodes'] = $method;
		$method = $pyjs__bind_method2('Edges', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, '_edges');
		}
	, 1, [null,null,['self']]);
		$cls_definition['Edges'] = $method;
		$method = $pyjs__bind_method2('RootNodes', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $lambda2;
			var 			$lambda2 = function(n) {

				return !$p['bool'](self['InEdges'](n));
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['n']];
			return $p['filter']($lambda2, $p['getattr'](self, '_nodes'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['RootNodes'] = $method;
		$method = $pyjs__bind_method2('UpdateEdge', function(edge, new_from_node, new_to_node) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				edge = arguments[1];
				new_from_node = arguments[2];
				new_to_node = arguments[3];
			}

			if (!( $p['getattr'](self, '_edges')['__contains__'](edge) )) {
			   throw $p['AssertionError']();
			 }
			if (!( $p['getattr'](self, '_nodes')['__contains__'](new_from_node) )) {
			   throw $p['AssertionError']();
			 }
			if (!( $p['getattr'](self, '_nodes')['__contains__'](new_to_node) )) {
			   throw $p['AssertionError']();
			 }
			$p['getattr'](self, '_in_edges')['__getitem__']($p['getattr'](edge, 'to_node'))['remove'](edge);
			$p['getattr'](self, '_out_edges')['__getitem__']($p['getattr'](edge, 'from_node'))['remove'](edge);
			edge['from_node'] = new_from_node;
			edge['to_node'] = new_to_node;
			$p['getattr'](self, '_in_edges')['__getitem__']($p['getattr'](edge, 'to_node'))['append'](edge);
			$p['getattr'](self, '_out_edges')['__getitem__']($p['getattr'](edge, 'from_node'))['append'](edge);
			return null;
		}
	, 1, [null,null,['self'],['edge'],['new_from_node'],['new_to_node']]);
		$cls_definition['UpdateEdge'] = $method;
		$method = $pyjs__bind_method2('TopologicalSort', function(roots) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				roots = arguments[1];
			}
			if (typeof roots == 'undefined') roots=arguments['callee']['__args__'][3][1];
			var node,$iter9_idx,sources,$iter9_iter,$iter9_nextval,sorted_nodes,$add1,$sub2,$sub1,$iter7_type,$iter9_type,$augexpr1,$and3,$iter7_iter,remaining_in_edges,$and4,$augsub1,$iter7_idx,successor,e,$iter7_nextval,nodes_subset,$iter7_array,$add2,edge,$iter9_array;
			sorted_nodes = $p['list']([]);
			if ($p['bool']((roots === null))) {
				nodes_subset = $p['getattr'](self, '_nodes');
			}
			else {
				nodes_subset = self['ReachableNodes'](roots);
			}
			remaining_in_edges = function(){
				var $iter6_idx,$iter6_type,$collcomp3,n,$iter6_array,$iter6_iter,$iter6_nextval;
	$collcomp3 = $p['dict']();
			$iter6_iter = nodes_subset;
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				n = $iter6_nextval['$nextval'];
				$collcomp3['__setitem__'](n, 0);
			}

	return $collcomp3;}();
			$iter7_iter = $p['getattr'](self, '_edges');
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				edge = $iter7_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and3=nodes_subset['__contains__']($p['getattr'](edge, 'from_node')))?nodes_subset['__contains__']($p['getattr'](edge, 'to_node')):$and3))) {
					var $augsub1 = $p['getattr'](edge, 'to_node');
					var $augexpr1 = remaining_in_edges;
					$augexpr1['__setitem__']($augsub1, $p['__op_add']($add1=$augexpr1['__getitem__']($augsub1),$add2=1));
				}
			}
			sources = function(){
				var node,count,$iter8_idx,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval;
	$collcomp4 = $p['list']();
			$iter8_iter = remaining_in_edges['items']();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter8_nextval['$nextval'], 2, null);
				node = $tupleassign1[0];
				count = $tupleassign1[1];
				if ($p['bool']($p['op_eq'](count, 0))) {
					$collcomp4['append'](node);
				}
			}

	return $collcomp4;}();
			while ($p['bool'](sources)) {
				node = sources['pop'](0);
				sorted_nodes['append'](node);
				$iter9_iter = self['OutEdges'](node);
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					e = $iter9_nextval['$nextval'];
					successor = $p['getattr'](e, 'to_node');
					if ($p['bool'](!nodes_subset['__contains__'](successor))) {
						continue;
					}
					if (!( ($p['cmp'](remaining_in_edges['__getitem__'](successor), 0) == 1) )) {
					   throw $p['AssertionError']();
					 }
					remaining_in_edges['__setitem__'](successor, $p['__op_sub']($sub1=remaining_in_edges['__getitem__'](successor),$sub2=1));
					if ($p['bool']($p['op_eq'](remaining_in_edges['__getitem__'](successor), 0))) {
						sources['append'](successor);
					}
				}
			}
			return sorted_nodes;
		}
	, 1, [null,null,['self'],['roots', null]]);
		$cls_definition['TopologicalSort'] = $method;
		$method = $pyjs__bind_method2('ReachableNodes', function(roots, should_stop) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				roots = arguments[1];
				should_stop = arguments[2];
			}
			if (typeof should_stop == 'undefined') should_stop=arguments['callee']['__args__'][4][1];
			var node,e,$iter11_iter,$iter11_type,$and5,fifo,$and6,$iter11_array,visited,$iter11_nextval,$iter11_idx;
			visited = $p['set']();
			fifo = $m['collections']['deque'](function(){
				var $iter10_nextval,$collcomp5,$iter10_array,n,$iter10_type,$iter10_iter,$iter10_idx;
	$collcomp5 = $p['list']();
			$iter10_iter = roots;
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				n = $iter10_nextval['$nextval'];
				if ($p['bool'](!$p['bool'](should_stop(n)))) {
					$collcomp5['append'](n);
				}
			}

	return $collcomp5;}());
			while ($p['bool'](!$p['op_eq']($p['len'](fifo), 0))) {
				node = fifo['pop']();
				if ($p['bool'](should_stop(node))) {
					continue;
				}
				visited['add'](node);
				$iter11_iter = self['OutEdges'](node);
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					e = $iter11_nextval['$nextval'];
					if ($p['bool'](($p['bool']($and5=!visited['__contains__']($p['getattr'](e, 'to_node')))?!$p['bool'](should_stop($p['getattr'](e, 'to_node'))):$and5))) {
						visited['add']($p['getattr'](e, 'to_node'));
					}
					fifo['appendleft']($p['getattr'](e, 'to_node'));
				}
			}
			return $p['list'](visited);
		}
		var 		$lambda3 = function(n) {

			return false;
		};
		$lambda3['__name__'] = '$lambda3';

		$lambda3['__bind_type__'] = 0;
		$lambda3['__args__'] = [null,null,['n']];
	, 1, [null,null,['self'],['roots'],['should_stop', $lambda3]]);
		$cls_definition['ReachableNodes'] = $method;
		$method = $pyjs__bind_method2('Cost', function(roots, path_list, costs_out) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				roots = arguments[1];
				path_list = arguments[2];
				costs_out = arguments[3];
			}
			if (typeof roots == 'undefined') roots=arguments['callee']['__args__'][3][1];
			if (typeof path_list == 'undefined') path_list=arguments['callee']['__args__'][4][1];
			if (typeof costs_out == 'undefined') costs_out=arguments['callee']['__args__'][5][1];
			var $lambda4,$add5,cost,$iter13_idx,$iter15_idx,$iter15_iter,max_cost,$iter13_type,node,$iter15_array,predecessors,$iter13_nextval,$iter13_iter,i,$iter13_array,costs,$add6,$iter15_nextval,$iter15_type;
			costs = function(){
				var $collcomp6,$iter12_type,$iter12_array,n,$iter12_iter,$iter12_idx,$iter12_nextval;
	$collcomp6 = $p['dict']();
			$iter12_iter = $p['getattr'](self, '_nodes');
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				n = $iter12_nextval['$nextval'];
				$collcomp6['__setitem__'](n, 0);
			}

	return $collcomp6;}();
			$iter13_iter = self['TopologicalSort'](roots);
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				node = $iter13_nextval['$nextval'];
				cost = 0;
				if ($p['bool'](self['InEdges'](node))) {
					cost = $p['max'](function(){
						var $iter14_array,$iter14_type,$add4,$collcomp7,$add3,$iter14_iter,e,$iter14_idx,$iter14_nextval;
	$collcomp7 = $p['list']();
					$iter14_iter = self['InEdges'](node);
					$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
					while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
						e = $iter14_nextval['$nextval'];
						$collcomp7['append']($p['__op_add']($add3=costs['__getitem__']($p['getattr'](e, 'from_node')),$add4=$p['getattr'](e, 'cost')));
					}

	return $collcomp7;}());
				}
				costs['__setitem__'](node, $p['__op_add']($add5=cost,$add6=$p['getattr'](node, 'cost')));
			}
			max_cost = $p['max'](costs['values']());
			if ($p['bool']((costs_out !== null))) {
				$p['__delslice'](costs_out, 0, null)
				costs_out['extend'](costs);
			}
			if (!( ($p['cmp'](max_cost, 0) == 1) )) {
			   throw $p['AssertionError']();
			 }
			if ($p['bool']((path_list !== null))) {
				$p['__delslice'](path_list, 0, null)
				node = function(){
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
					var $generator = function () {};
					$generator['next'] = function (noStop) {
					
						var $res;
						$yield_value = $exc = null;
						try {
							$res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res == 'undefined') {
								if (noStop === true) {
									$generator_state[0] = -1;
									return;
								}
								throw $p['StopIteration']();
							}
						} catch (e) {
					
							$is_executing=false;
							$generator_state[0] = -1;
							if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
								return;
							}
							throw e;
						}
						return $res;
					};
					$generator['__iter__'] = function () {return $generator;};
					$generator['send'] = function ($val) {
					
						$yield_value = $val;
						$exc = null;
						try {
							var $res = $generator['$genfunc']();
							if (typeof $res == 'undefined') throw $p['StopIteration']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw e;
						}
						$is_executing=false;
						return $res;
					};
					$generator['$$throw'] = function ($exc_type, $exc_value) {
					
						$yield_value = null;
						$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
																($p['isinstance']($exc_value, $exc_type)
																 ? $exc_value : $exc_type($exc_value)));
						try {
							var $res = $generator['$genfunc']();
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							throw (e);
						}
						$is_executing=false;
						return $res;
					};
					$generator['close'] = function () {
					
						$yield_value = null;
						$exc=$p['GeneratorExit']();
						try {
							var $res = $generator['$genfunc']();
							$is_executing=false;
							if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
						} catch (e) {
					
							$generator_state[0] = -1;
							$is_executing=false;
							if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
							throw (e);
						}
						return null;
					};
					$generator['$genfunc'] = function () {
						var $yielding = false;
						if ($is_executing) throw $p['ValueError']('generator already executing');
						$is_executing = true;
					
					if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
						for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[0] = -1;
							throw $exc;
						}
						$iter15_iter = $p['getattr'](self, '_nodes');
						$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
						$generator_state[0]=1;
					}
					if ($generator_state[0] == 1) {
						$generator_state[1] = 0;
						$generator_state[0]=2;
					}
					if ($generator_state[0] == 2) {
						for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
							if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
								for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
								i = $iter15_nextval['$nextval'];
								$generator_state[3] = 0;
								$generator_state[1]=1;
							}
							if ($generator_state[1] == 1) {
								if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']($p['op_eq'](costs['__getitem__'](i), max_cost))))) {
									$generator_state[2]=1;
									if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
										for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
										$yield_value = i;
										$yielding = true;
										$generator_state[3] = 1;
										return $yield_value;
										$generator_state[3]=1;
									}
									if ($generator_state[3] == 1) {
										if (typeof $exc != 'undefined' && $exc !== null) {
											$yielding = null;
											$generator_state[3] = -1;
											throw $exc;
										}
										$generator_state[3]=2;
									}
									if ($generator_state[3] == 2) {
									}
								}
								$generator_state[2]=0;
								$generator_state[1]=2;
							}
							if ($generator_state[1] == 2) {
							}
						}
						$generator_state[0]=3;
					}
					if ($generator_state[0] == 3) {
						$generator_state[0]=4;
					}
					if ($generator_state[0] == 4) {
					}

						return;
					};
					return $generator;
				}()
['next']();
				path_list['append'](node);
				while ($p['bool'](self['InEdges'](node))) {
					predecessors = function(){
						var $iter16_array,e,$iter16_type,$collcomp8,$iter16_idx,$iter16_nextval,$iter16_iter;
	$collcomp8 = $p['list']();
					$iter16_iter = self['InEdges'](node);
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						e = $iter16_nextval['$nextval'];
						$collcomp8['append']($p['getattr'](e, 'from_node'));
					}

	return $collcomp8;}();
					var 					$lambda4 = function(costliest_node, next_node) {

						return ($p['bool'](($p['cmp'](costs['__getitem__'](next_node), costs['__getitem__'](costliest_node)) == 1))? (next_node) : (costliest_node));
					};
					$lambda4['__name__'] = '$lambda4';

					$lambda4['__bind_type__'] = 0;
					$lambda4['__args__'] = [null,null,['costliest_node'],['next_node']];
					node = $p['reduce']($lambda4, predecessors);
					path_list['insert'](0, node);
				}
			}
			return max_cost;
		}
	, 1, [null,null,['self'],['roots', null],['path_list', null],['costs_out', null]]);
		$cls_definition['Cost'] = $method;
		$method = $pyjs__bind_method2('ToJsonDict', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter18_type,node,$iter18_iter,$iter19_idx,node_to_index,edge_dict,$iter18_array,index,edge,edge_dicts,$iter19_nextval,$iter19_array,$iter19_iter,$iter18_idx,$iter19_type,node_dict,node_dicts,$iter18_nextval;
			node_dicts = $p['list']([]);
			node_to_index = function(){
				var $iter17_nextval,index,$iter17_iter,node,$collcomp9,$iter17_array,$iter17_idx,$iter17_type;
	$collcomp9 = $p['dict']();
			$iter17_iter = $p['enumerate']($p['getattr'](self, '_nodes'));
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = $p['__ass_unpack']($iter17_nextval['$nextval'], 2, null);
				index = $tupleassign2[0];
				node = $tupleassign2[1];
				$collcomp9['__setitem__'](node, index);
			}

	return $collcomp9;}();
			$iter18_iter = node_to_index['items']();
			$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
			while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = $p['__ass_unpack']($iter18_nextval['$nextval'], 2, null);
				node = $tupleassign3[0];
				index = $tupleassign3[1];
				node_dict = node['ToJsonDict']();
				if (!( !node_dict['__contains__']($p['getattr'](self, '__GRAPH_NODE_INDEX')) )) {
				   throw $p['AssertionError']();
				 }
				node_dict['update']($p['dict']([[$p['getattr'](self, '__GRAPH_NODE_INDEX'), index]]));
				node_dicts['append'](node_dict);
			}
			edge_dicts = $p['list']([]);
			$iter19_iter = $p['getattr'](self, '_edges');
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				edge = $iter19_nextval['$nextval'];
				edge_dict = edge['ToJsonDict']();
				if (!( !edge_dict['__contains__']($p['getattr'](self, '__TO_NODE_INDEX')) )) {
				   throw $p['AssertionError']();
				 }
				if (!( !edge_dict['__contains__']($p['getattr'](self, '__FROM_NODE_INDEX')) )) {
				   throw $p['AssertionError']();
				 }
				edge_dict['update']($p['dict']([[$p['getattr'](self, '__TO_NODE_INDEX'), node_to_index['__getitem__']($p['getattr'](edge, 'to_node'))], [$p['getattr'](self, '__FROM_NODE_INDEX'), node_to_index['__getitem__']($p['getattr'](edge, 'from_node'))]]));
				edge_dicts['append'](edge_dict);
			}
			return $p['dict']([['nodes', node_dicts], ['edges', edge_dicts]]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['ToJsonDict'] = $method;
		$method = $pyjs__bind_method2('FromJsonDict', function(json_dict, node_class, edge_class) {
    var cls = this['prototype'];
			var $iter21_idx,$iter21_nextval,edge,$iter21_iter,edge_dict,$iter21_type,index_to_node,edges,result,$iter21_array;
			index_to_node = function(){
				var $iter20_iter,$iter20_nextval,$iter20_type,$iter20_idx,node_dict,$collcomp10,$iter20_array;
	$collcomp10 = $p['dict']();
			$iter20_iter = json_dict['__getitem__']('nodes');
			$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
			while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
				node_dict = $iter20_nextval['$nextval'];
				$collcomp10['__setitem__'](node_dict['__getitem__']($p['getattr'](cls, '__GRAPH_NODE_INDEX')), node_class['FromJsonDict'](node_dict));
			}

	return $collcomp10;}();
			edges = $p['list']([]);
			$iter21_iter = json_dict['__getitem__']('edges');
			$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
			while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
				edge_dict = $iter21_nextval['$nextval'];
				edge = edge_class['FromJsonDict'](edge_dict);
				edge['from_node'] = index_to_node['__getitem__'](edge_dict['__getitem__']($p['getattr'](cls, '__FROM_NODE_INDEX')));
				edge['to_node'] = index_to_node['__getitem__'](edge_dict['__getitem__']($p['getattr'](cls, '__TO_NODE_INDEX')));
				edges['append'](edge);
			}
			result = $m['DirectedGraph'](index_to_node['values'](), edges);
			return result;
		}
	, 2, [null,null,['cls'],['json_dict'],['node_class'],['edge_class']]);
		$cls_definition['FromJsonDict'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DirectedGraph', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end graph */


/* end module: graph */


/*
PYJS_DEPS: ['collections', 'common_util']
*/
