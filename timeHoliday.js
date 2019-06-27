const holiday = {
  start: new Date('2019-12-24T21:00:00'),
  end: new Date('2019-12-25T21:00:00')
};

/*var msg=addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60) // returns 2019-12-01T01:00:00
var msg=addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1) // returns 2019-12-25T21:00:01
var msg=addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60*60) // returns 2019-12-25T21:30:00
var msg=addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1) // returns 2019-12-25T21:00:01
var msg=addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1) // returns 2019-12-24T20:59:59*/

function addBusinessTime(holiday, time, duration) {
  
  time.setSeconds(duration);
  if(time>=holiday.start && time<=holiday.end){
    if(Math.sign(duration)==1){

    var timeDistance =Math.floor((Date.UTC(holiday.end.getFullYear(), holiday.end.getMonth(), holiday.end.getDate()) - Date.UTC(time.getFullYear(), time.getMonth(), time.getDate()) ) /(1000 * 60 * 60 * 24));
      if(time.getHours()<1){
        return new Date(holiday.end.setSeconds(duration));
      }
      else{
        if(holiday.end.getHours()>22){
          return new Date(holiday.end.setSeconds(duration));
        }
        return new Date(time.setTime(time.getTime()+((timeDistance)*1000*60*60*24)))
      }
    }else{
      //return new Date(new Date(holiday.start).setTime(holiday.start.getTime())+(duration*1000))
      return new Date(new Date(holiday.start).setSeconds(duration))
    }
  }
 
  if(time>holiday.end){
   return new Date(new Date(holiday.end).setTime(holiday.end.getTime()+(time.getTime()-holiday.end.getTime())));
  }
 
 return time;
}
//alert(msg)
