var date= new Date();
 var dummy =  date.getDay();
 console.log('dummy', dummy);
 dummy = dummy - 0;
 date.setDate(date.getDate() - dummy );
 console.log("prev week last day : "+ date.getDate());
 date.setDate(date.getDate() - 6);
console.log("previous week first day : "+ date.getDate());