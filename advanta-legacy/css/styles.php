<?php
	require 'lessc.inc.php';
	header('Content-Type: text/css');
	define('STYLES_DIR', '');
	$files = array('styles');

	function compress($buffer) {
		$buffer = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $buffer);
		$buffer = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $buffer);
		return $buffer;
	}

	function auto_compile_less($less_fname) {
		$cache_fname = $less_fname.".cache";
		if (file_exists($cache_fname)) {
			$cache = unserialize(file_get_contents($cache_fname));
		} else {
			$cache = $less_fname;
		}

		$new_cache = lessc::cexecute($cache);
		if (!is_array($cache) || $new_cache['updated'] > $cache['updated']) {
			$new_cache['compiled'] = compress($new_cache['compiled']);
			file_put_contents($cache_fname, serialize($new_cache));
		}
		return $new_cache['compiled'];
	}
	foreach ($files as $file) {
		echo auto_compile_less(STYLES_DIR.$file.'.less');
	}
?>