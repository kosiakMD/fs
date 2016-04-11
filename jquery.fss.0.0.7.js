//FS - Fast Style
//FSS - Fast Short Style
//FJS - Fast JavaScript Style
//version - 0.0.7
//date - 26.10.2013
//start - $.fss = function(options){...} ---- $.fss();
//alternative - $().FS();
(function( $ ) {
	$.fn.fss = function(options){
		var settings = $.extend({//Defaults:
			attribute : 'fs', //attribute for which there is a sample tag
			separator : /\s*;\s*/g, //separator between the attributes
			appropriator : /\:/g, //appropriate the value for attribute
			units : 'px', //default units if only numbers, eg: 10 = '10px'
			re : [] //Array of RegExps to split the attribute into parts
		}, options ), s = settings;

		var attr = [], value = [];
			s.re[0] = '[A-Z]';//CAPital letterS - required!
			s.re[1] = '\-';//optional
			alert(s.re);
		//handler functions
		handler = ({
			isnan : function(n){//if NaN - add default units
				value = (!isNaN(parseFloat(n)) && isFinite(n)) ? n + '' + s.units : n ;
			},
			core : function(){//main function of parsing and analising
				fs = $this.attr(s.attribute).split(s.separator);
				RE = new RegExp (s.re.join('|'), 'g');
				fs.forEach(function(x,i){//$.each(fs, function(key){...});
					console.log(x);//alert(x);
					//if(x == '') return;
					temp = x.split(s.appropriator);//temp = fs[key].split(s.appropriator);
					console.log(temp);
					attr = new Array();
					//attr = temp[0];//css attribute
					value = temp[1];//value of prev
					//re = /[A-Z]/g;//CAPital letterS
					caps = temp[0].match(RE);//find all CAPital letterS and other seperators (RegExp)
					console.log(caps);
					if (caps) {
						lows = temp[0].split(RE);
						console.log(lows);
						//alert('cpas: ' + caps + '; lows: ' + lows);
						attr[0] = fss[lows[0]] ? fss[lows[0]] : lows[0];
						for(var l = 1, c = 0; l < lows.length; l++, c++){
							cap = new RegExp (s.re[0]);
							if (lows[l]=='')
								continue;
							else if (caps[c].search(cap))
								w = lows[l];
							else
								w = caps[c].toLowerCase() + lows[l];
							sec = secondaries[w];
							attr.push(sec ? sec : (function(){return fss[w] ? fss[w] : w;})());
						}
						attr = attr.join('-');
						console.log(attr);//alert(attr);
					}
/* 	 	
					if (caps){//if caps present
						attr = temp[0].split(re);
						//alert(attr);
						attr[0] = fss[attr[0]] ? fss[attr[0]] : attr[0];
						for (var i=0; i < caps.length; i++) {
							s = secondaries[caps[i] + attr[i+1]];//s - check attr is in secondaries
							c = caps[i].toLowerCase() + attr[i+1];//c - check attr is in fss
							attr[i+1] = /*t =*//* (s) ? s : (function(){return fss[c] ? fss[c] : c;})();//find attr in object secondaries/fss
							//attr[0] += '-' + t;//build full/whole css attribute with "-"
						}
						attr = attr.join('-');
						//alert(attr);
						//attr = attr[0];
						$this.css(attr, values[value] ? values[value] : value);
					}
*/
					else{
						attr = temp[0];
						fss[attr] == 'opacity' ? '' : handler.isnan(value);//attr == 'o'
						attr = fss[attr] ? fss[attr] : attr;
					}
					$this.css(attr, values[value] ? values[value] : value);
				});
			},
			all : function(){//if apply to whole document - all tags with "fs" attribute
				$theese = $('['+s.attribute+']');
			},
			find : function(){//if jQuery-selector - apply to current and all subsidiaries selectors
				$theese = $el.add($el.find('['+s.attribute+']'));
			}
		});

		fss = ({//style attributes
			d : 'display',
			h : 'height',
			w : 'width',
			m : 'margin',
			p : 'padding',
			fl : 'float',
			tp : 'top',
			T : 'top',
			lt : 'left',
			L : 'left',
			rt : 'right',
			R : 'right',
			bm : 'bottom',
			B : 'bottom',
			o : 'opacity',
			ov : 'overflow',
			c : 'color',
			pos : 'position',
			z : 'z-index',
			l : 'line',
			lH : 'line-height',
			b : 'border',
			bW : 'border-width',
			bg : 'background',
			bgC : 'background-color',
			bgI : 'background-image',
			bgS : 'background-size',
			bgR : 'background-repeat',
			bgP : 'background-position',
			bgA : 'background-attachment',
			mT : 'margin-top',
			mR : 'margin-right',
			mL : 'margin-left',
			mB : 'margin-bottom',
			pT : 'padding-top',
			pR : 'padding-right',
			pL : 'padding-left',
			pB : 'padding-bottom',
			bT : 'border-top',
			bR : 'border-right',
			bL : 'border-left',
			bB : 'border-bottom',
			f : 'font',
			fS : 'font-size',
			//size : 'font-size',
			fW : 'font-weight',
			fF : 'font-family',
			t : 'text',
			tA : 'text-align',
			tS : 'text-shadow',
			tD : 'text-decoration',
			tT : 'text-transform',
			lS : 'letter-spacing',
			mn : 'min',
			mx : 'max',
			mnH : 'min-height',
			mnH : 'min-width',
			mxH : 'max-height',
			mxH : 'max-width',
			rp : 'repeat',
			rpX : 'repeat-x',
			rpY : 'repeat-y',
			nRp : 'no-repeat',
			vA : 'vertical-align',
			at : 'attachment',
			s : 'size',
			a : 'align',
			v : 'vertical',
			dec : 'decoration',
			wt : 'weight',
			tr : 'transform'
		});
		values = ({//attributes' values
			a : 'auto',
			n : 'none',
			h : 'hidden',
			v : 'visible',
			s : 'scroll',
			f : 'fixed',
			rel : 'relative',
			abs : 'absolute',
			bl : 'block',
			inbl : 'inline-block',
			in : 'inline',
			m : 'middle',
			tp : 'top',
			T : 'top',
			lt : 'left',
			L : 'left',
			rt : 'right',
			R : 'right',
			bm : 'bottom',
			B : 'bottom',
			bo : 'both',
			j : 'justify',
			'!' : '!important',
			i : 'italic',
			bd : 'bold',
			nm : 'normal',
			u : 'underline',
			up : 'uppercase',
			low : 'lowercase'
		});
		secondaries = ({//parts of attributes after "-" or others
			T : 'top',
			L : 'left',
			R : 'right',
			B : 'bottom',
			A : 'align',
			a : 'align'
		});

		var $el = this;
		$el.selector ? handler.find() : handler.all();
		$theese.each(function(){
			$this = $(this);
			handler.core();
		});
		return this;
	};
}( jQuery ));