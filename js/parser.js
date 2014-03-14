function get_litecoin($address) {
		$return = array();
		$data = get_request('http://explorer.litecoin.net/address/'.$address);
		if (!empty($data) 
		  && strstr($data, 'Transactions in: ') 
		  && strstr($data, 'Received: ')) {
		  	$return += array(
				'count' => (int) parse($data,'Transactions in: ','<br />'),
				'amount' => (float) parse($data,'Received: ','<br />')
			);
		  	return $return;
		}
	}

	function get_request($url,$timeout=4) {
		if (function_exists('curl_version')) {
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, $url);
			curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
			curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, $timeout);
			curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
			curl_setopt($curl, CURLOPT_USERAGENT,'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13');
			$return = curl_exec($curl);
			curl_close($curl);
			return $return;
		} else {
			return @file_get_contents($url);
		}
	}

	function parse($string,$start,$stop) {
		if (!strstr($string, $start)) return;
		if (!strstr($string, $stop)) return;
		$string = substr($string, strpos($string,$start)+strlen($start));
		$string = substr($string, 0, strpos($string,$stop));
		return $string;
	}

