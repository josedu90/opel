var App = {
	landing: function(){
		var myFullpage = new fullpage('#fullpage', {
				autoScrolling: false,
		  		fitToSection: false,
		        scrollingSpeed: 800,
		        navigation: true,
		        scrollBar: true,
		        verticalCentered: true,
		        navigationPosition: 'right',
		        easing: 'easeInOutCubic',
				easingcss3: 'ease',
				scrollBar: true,
				scrollOverflow: true,
				scrollX: true,
				afterLoad: function(origin, destination, direction){
					console.log(destination.index);
					
					
						
					
					//$('#floods-cont').appendChild(flood1);
				}
		});
		
		var isMobile = false; //initiate as false
		// device detection
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		    isMobile = true;
		    
		    
		    
		    $('.slider-mobile-content').slick({
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1
			});
			
			/*$('.slider-showroom-mobile').slick({
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1
			});*/
      		
      		
      		/*$('.cont-caract-mobile').slick({
				infinite: false,
				slidesToShow: 1,
				slidesToScroll: 1
			});*/
			
			
			fullpage_api.destroy();
		}
	
	},
	 events: {
        init: function(){
        	console.log('app loaded');
        	
            App.landing();
            
            
            setTimeout(function() {
            	$('.preloader').removeClass('active');
	          	setTimeout(function() {
		            $('.landing-cont .top').addClass('active');
		            setTimeout(function() {
		                $('.landing-cont .bottom').addClass('active');
		            }, 600);
		        }, 600);
      		},2300);

      		$('.btn-legal').on('click', function(){
      			console.log('ok');
      			$('.modal').addClass('active');
     			$('.cerrar-modal').on('click', function(){
     				$('.modal').removeClass('active');
     			});
      		});
			$('.btn-reserva').on('click', function(){
      			$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/reserva-inicio.html"></iframe>');
      		});
      		
      		$('.btn-test-expo').on('click', function(){
	      		exponea.showbanner('5e70c8b2584e45dd3e8630fc');
      		});
      		
      		$('.btn-vid').on('click', function(){
      			console.log('video');
      			$('.modal-video').addClass('active');
      			$('.cont-video .videoWrapper').html('<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HDPrA4hsnKU?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
     			$('.btn-closevid').on('click', function(){
     				$('.modal-video').removeClass('active');
     				setTimeout(function(){
	     				$('.cont-video .videoWrapper').html('');
     				},300);
     			});
      		});
	  		
	  		$('.hover-modelo').each(function(){
		  		var $this = $(this),
		  			_det = $this.attr('data-info'),
		  			_tit = $this.attr('data-tit');
		  			
		  		$this.on('click', function(){
			  		$('.modal-detalle').addClass('active');
			  		$('.modal-detalle').find('h3').html(_tit);
			  		$('.detalle-version').removeClass('active');
			  		
			  		if(_det == 'line'){
				  		$('.dtv-line').addClass('active');
			  		}else if(_det == 'at8'){
				  		$('.dtv-at8').addClass('active');
			  		}else if(_det == 'mt'){
				  		$('.dtv-mt').addClass('active');
			  		}
			  		
			  		$('.cerrar-detalle').on('click', function(){
				  		$('.modal-detalle').removeClass('active');
			  		});
		  		});
	  		});
	  		
	  		$('.btn-casa').on('click', function(){
		  		fullpage_api.moveTo(1);
	  		});
	  		
	  		$('.arrow-down').on('click', function(){
		  		fullpage_api.moveTo(2);
	  		});
	  		
	  		$('.btn-cart').on('click', function(){
		  		fullpage_api.moveTo(4);
		  		$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/versiones-y-unboxing.html"></iframe>');
	  		});
	  		
	  		
	  		$('.btn-plus').each(function(){
		  		var $this = $(this),
		  			_plus = $this.attr('data-plus');
		  			
		  		$this.on('click', function(){
			  		console.log(_plus)
			  		
			  		if(_plus == 'plus1'){
				  		$('.btn-plus.plus1').removeClass('active');
				  		$('.bl1 .text-cont.textA').removeClass('active');
				  		$('.bl1 .text-cont.textB').addClass('active');
				  		$('.comp-block.bl1 .btn-base').addClass('active');
			  		}else if(_plus == 'plus2'){
				  		$('.btn-plus.plus2').removeClass('active');
				  		$('.bl2 .text-cont.textA').removeClass('active');
				  		$('.bl2 .text-cont.textB').addClass('active');
				  		$('.comp-block.bl2 .btn-base').addClass('active');
			  		}else if(_plus == 'plus3'){
				  		$('.btn-plus.plus3').removeClass('active');
				  		$('.bl3 .text-cont.textA').removeClass('active');
				  		$('.bl3 .text-cont.textB').addClass('active');
				  		$('.comp-block.bl3 .btn-base').addClass('active');
			  		}
			  		
			  	});
			 });
	  		
	  		
	  		$('.ico-mobile').on('click', function(){
		  		$('.menu-nav-mobile').addClass('active');
				$('.ico-mobile').hide();
				$('.ico-cerrar-mobile').show();
				
				$('.ico-cerrar-mobile').on('click', function(){
			  		$('.menu-nav-mobile').removeClass('active');
					$('.ico-mobile').show();
					$('.ico-cerrar-mobile').hide();
		  		});
	  		});

	  		/*$('.btn-reservar-v').each(function(){
	  			var $this = $(this);
		  		
		  		$this.on('click', function(){
			  		if($this.hasClass('12MT5')){
				  		$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/12MT5.html"></iframe>');
				  	}else if($this.hasClass('12MT6')){
		  				$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/12MT6.html"></iframe>');
		  			}else if($this.hasClass('15MT6')){
		  				$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/15MT6.html"></iframe>');
		  			}else if($this.hasClass('edition-AT8')){
		  				$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/edition-AT8.html"></iframe>');
		  			}else if($this.hasClass('edition-MT5')){
		  				$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/edition-MT5.html"></iframe>');
		  			}else if($this.hasClass('GS')){
						$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/GS.html"></iframe>');
		  			}
		  		});
		  	});*/
		  	
		  	$('.btn-cotizar').on('click', function(){
			  	$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/boton-cotiza-el-tuyo-ahora.html"></iframe>');
		  	});
		  	
		  	$('.btn-comp.testdrive').on('click', function(){
			  	$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/agendar-testDrive.html"></iframe>');
		  	})
		  	
		  	$('.btnCotizaCompromiso').on('click', function(){
			  	$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/cotizar-aqui-compromisos.html"></iframe>');
		  	})

		  	
		  	$('.testdrive').on('click', function(){
			  	exponea.showBanner('603019953322a22019afde45');
		  	})
	  		
	  		$('.btn-menu').each(function(){
		  		var $this = $(this),
		  			_sect = $this.attr('data-sect');
		  		
		  		$this.on('click', function(){
			  		console.log(_sect);
			  		
			  		if($('.menu-nav-mobile').hasClass('active')){
				  		$('.menu-nav-mobile').removeClass('active');
				  		$('.ico-cerrar-mobile').hide();
				  		$('.ico-mobile').show();
			  		}
			  		
			  		if(_sect == '1'){
				  		fullpage_api.moveTo(1);
			  		}else if(_sect == '2'){
				  		fullpage_api.moveTo(2);
				  		$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/versiones-y-unboxing.html"></iframe>');
			  		}else if(_sect == '3'){
				  		fullpage_api.moveTo(3);
				  		$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/showroom.html"></iframe>');
			  		}else if(_sect == '4'){
				  		fullpage_api.moveTo(4);
				  		$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/caracteristicas.html"></iframe>');
				  	}else if(_sect == '5'){
				  		fullpage_api.moveTo(5);
				  		$('body').append('<iframe class="flood" src="https://store.opel.cl/2020/landing-full/tag/datos.html"></iframe>');
				  	}




			  	});
		  		
	  		});
	  			
		  		
	  		

            
        }
	 }
}
$(function(){
    //setTimeout(function() {
        App.events.init();
    //}, 300);
});