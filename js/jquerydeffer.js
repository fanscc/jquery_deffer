  getCodeData: function () {
      var self = this 
      var dtd = new $.Deferred()
      var tempModel = new Talent.Model()
      tempModel.url = 'Channel/ResumeSearch/GetRobotChannelAuthCode'
      tempModel.save({
         name:'21'
        }
     }).done(function (resp) {
        dtd.resolve(resp.Data)   
      })

      return dtd.promise()
    },
   changeCodeImg: function () {
      var self = this
      self.getCodeData().done(function (codeData) {
       
      })
    },
    //第二种
	  wait: function (dtd){      
	        dtd ? dtd.resolve() : null       
	    },
	   onRender: function() {
	        var self = this;
	        var dtd = $.Deferred();
	    		self.wait(dtd);
	    		dtd.promise(self.wait);
	        self.wait.done(function(){
	        
	      }).fail(function(){
		       	  throw new Error('save GetLagouAdAddtional info error')
		     })
	    },   
