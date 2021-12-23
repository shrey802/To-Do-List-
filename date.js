exports.Getdate = function(){

const date = new Date()

//this variable {date} stores today's date
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'

}
//this object {options} is used for formatting the data- weekday,day,month .
return date.toLocaleDateString("en-US", options)
//this variable {thisday} is used to store the options object in English

}
exports.Daydata = function(){
   const date = new Date()

   //this variable {date} stores today's date
   const options = {
     weekday: 'long',
   }
   //this object {options} is used for formatting the data- weekday,day,month .
   return date.toLocaleDateString("en-US", options)
   //this variable {thisday} is used to store the options object in English

 }
