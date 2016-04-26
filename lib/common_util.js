/* start module: common_util */
$pyjs['loaded_modules']['common_util'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['common_util']['__was_initialized__']) return $pyjs['loaded_modules']['common_util'];
	var $m = $pyjs['loaded_modules']['common_util'];
	$m['__repr__'] = function() { return '<module: common_util>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'common_util';
	$m['__name__'] = __mod_name__;


	$m['contextlib'] = $p['___import___']('contextlib', null);
	$m['json'] = $p['___import___']('json', null);
	$m['logging'] = $p['___import___']('logging', null);
	$m['os'] = $p['___import___']('os', null);
	$m['re'] = $p['___import___']('re', null);
	$m['shutil'] = $p['___import___']('shutil', null);
	$m['sys'] = $p['___import___']('sys', null);
	$m['tempfile'] = $p['___import___']('tempfile', null);
	$m['time'] = $p['___import___']('time', null);
	$m['VerboseCompileRegexOrAbort'] = function(regex) {
		var $pyjs_try_err,e;
		try {
			return $m['re']['compile'](regex);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['getattr']($m['re'], 'error')['__name__'])||$p['_isinstance']($pyjs_try_err,$p['getattr']($m['re'], 'error'))) {
				e = $pyjs_try_err;
				$m['sys']['stderr']['write']('invalid regex: {}\n{}\n'['format'](regex, e));
				$m['sys']['exit'](2);
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		return null;
	};
	$m['VerboseCompileRegexOrAbort']['__name__'] = 'VerboseCompileRegexOrAbort';

	$m['VerboseCompileRegexOrAbort']['__bind_type__'] = 0;
	$m['VerboseCompileRegexOrAbort']['__args__'] = [null,null,['regex']];
	$m['PollFor'] = function(condition, condition_name, interval) {
		if (typeof interval == 'undefined') interval=arguments['callee']['__args__'][4][1];
		var result;
		while ($p['bool'](true)) {
			result = condition();
			$m['logging']['info']($p['sprintf']('Polling condition %s is %s', $p['tuple']([condition_name, ($p['bool'](result)? ('met') : ('not met'))])));
			if ($p['bool'](result)) {
				return result;
			}
			$m['time']['sleep'](interval);
		}
		return null;
	};
	$m['PollFor']['__name__'] = 'PollFor';

	$m['PollFor']['__bind_type__'] = 0;
	$m['PollFor']['__args__'] = [null,null,['condition'],['condition_name'],['interval', 5]];
	$m['SerializeAttributesToJsonDict'] = function(json_dict, instance, attributes) {

		json_dict['update'](function(){
			var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,attr,$iter1_array;
	$collcomp1 = $p['dict']();
		$iter1_iter = attributes;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			attr = $iter1_nextval['$nextval'];
			$collcomp1['__setitem__'](attr, $p['getattr'](instance, attr));
		}

	return $collcomp1;}());
		return json_dict;
	};
	$m['SerializeAttributesToJsonDict']['__name__'] = 'SerializeAttributesToJsonDict';

	$m['SerializeAttributesToJsonDict']['__bind_type__'] = 0;
	$m['SerializeAttributesToJsonDict']['__args__'] = [null,null,['json_dict'],['instance'],['attributes']];
	$m['DeserializeAttributesFromJsonDict'] = function(json_dict, instance, attributes) {
		var $iter2_nextval,$iter2_type,attr,$iter2_iter,$iter2_idx,$iter2_array;
		$iter2_iter = attributes;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			attr = $iter2_nextval['$nextval'];
			$p['getattr'](instance, attr);
			$p['setattr'](instance, attr, json_dict['__getitem__'](attr));
		}
		return instance;
	};
	$m['DeserializeAttributesFromJsonDict']['__name__'] = 'DeserializeAttributesFromJsonDict';

	$m['DeserializeAttributesFromJsonDict']['__bind_type__'] = 0;
	$m['DeserializeAttributesFromJsonDict']['__args__'] = [null,null,['json_dict'],['instance'],['attributes']];
	$m['TemporaryDirectory'] = function() {
		var $pyjs_try_err,name;
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
				name = $m['tempfile']['mkdtemp']();
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$yield_value = name;
						$yielding = true;
						$generator_state[1] = 2;
						return $yield_value;
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				} finally {
					if ($yielding === true) return $yield_value;
					if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
						for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
						$m['shutil']['rmtree'](name);
						$generator_state[2]=1;
					}
					if ($generator_state[2] == 1) {
					}
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$m['TemporaryDirectory']['__name__'] = 'TemporaryDirectory';

	$m['TemporaryDirectory']['__bind_type__'] = 0;
	$m['TemporaryDirectory']['__args__'] = [null,null];
	$m['TemporaryDirectory'] = $m['contextlib']['contextmanager']($p['staticmethod']($m['TemporaryDirectory']));
	return this;
}; /* end common_util */


/* end module: common_util */


/*
PYJS_DEPS: ['contextlib', 'json', 'logging', 'os', 're', 'shutil', 'sys', 'tempfile', 'time']
*/
