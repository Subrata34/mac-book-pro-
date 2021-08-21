
// 8GB unified memory
document.getElementById('memory-8GB').addEventListener('click',function(){
    //console.log('this is my amount ') ;
   const memory8gb= 100;
    const etraMemory=document.getElementById('extra-memory');
    const memory=etraMemory.innerText;
    const memoryAmount=parseFloat(memory);
    const memoryPrice =memory8gb+memoryAmount;
    etraMemory.innerText=memoryPrice;
    const totalAmount=document.getElementById('Total-amount');
    const TotalPrice =totalAmount.innerText;
    const TotalPhonePrice =parseFloat(TotalPrice);
    const sumAmount =TotalPhonePrice +memoryPrice;
    totalAmount.innerText=sumAmount ; 
      
});
//16GB unified memory
document.getElementById('memory-16GB').addEventListener('click',function(){
    //console.log('this is my amount ') ;
   const memory8gb= 180;
    const etraMemory=document.getElementById('extra-memory');
    const memory=etraMemory.innerText;
    const memoryAmount=parseFloat(memory);
    const memoryPrice =memory8gb+memoryAmount;
    etraMemory.innerText=memoryPrice;
    const totalAmount=document.getElementById('Total-amount');
    const TotalPrice =totalAmount.innerText;
    const TotalPhonePrice =parseFloat(TotalPrice);
    const sumAmount =TotalPhonePrice +memoryPrice;
    totalAmount.innerText=sumAmount ; 
      
});
     // 265 SSD storage 
document.getElementById('ssd-storage-265').addEventListener('click',function(){
    //console.log('this is my amount ') ;
   const storage265gb= 300;
    const etraMemory=document.getElementById('storage-memory');
    const memory=etraMemory.innerText;
    const memoryAmount=parseFloat(memory);
    const memoryPrice =storage265gb+memoryAmount;
    etraMemory.innerText=memoryPrice;
    const totalAmount=document.getElementById('Total-amount');
    const TotalPrice =totalAmount.innerText;
    const TotalPhonePrice =parseFloat(TotalPrice);
    const sumAmount =TotalPhonePrice +memoryPrice;
    totalAmount.innerText=sumAmount ; 
      
});
        // 512 SSD storage 
document.getElementById('ssd-storage-512').addEventListener('click',function(){
    //console.log('this is my amount ') ;
    const storage512gb= 400;
    const etraMemory=document.getElementById('storage-memory');
    const memory=etraMemory.innerText;
    const memoryAmount=parseFloat(memory);
    const memoryPrice =storage512gb+memoryAmount;
    etraMemory.innerText=memoryPrice;
    const totalAmount=document.getElementById('Total-amount');
    const TotalPrice =totalAmount.innerText;
    const TotalPhonePrice =parseFloat(TotalPrice);
    const sumAmount =TotalPhonePrice +memoryPrice;
    totalAmount.innerText=sumAmount ; 
      
});
  // 1TB SSD storage 
document.getElementById('ssd-storage-1TB').addEventListener('click',function(){
    //console.log('this is my amount ') ;
   const storage1TB= 500;
    const etraMemory=document.getElementById('storage-memory');
    const memory=etraMemory.innerText;
    const memoryAmount=parseFloat(memory);
    const memoryPrice =storage1TB+memoryAmount;
    etraMemory.innerText=memoryPrice;
    const totalAmount=document.getElementById('Total-amount');
    const TotalPrice =totalAmount.innerText;
    const TotalPhonePrice =parseFloat(TotalPrice);
    const sumAmount =TotalPhonePrice +memoryPrice;
    totalAmount.innerText=sumAmount ; 
      
});
  //delivery charge free
document.getElementById('free-delivery').addEventListener('click',function(){
    
   const deliveryPrice= 0;
    const etraMemory=document.getElementById('delivery-price');
    const memory=etraMemory.innerText;
    const memoryAmount=parseFloat(memory);
    const memoryPrice =deliveryPrice+memoryAmount;
    etraMemory.innerText=memoryPrice;
    const totalAmount=document.getElementById('Total-amount');
    const TotalPrice =totalAmount.innerText;
    const TotalPhonePrice =parseFloat(TotalPrice);
    const sumAmount =TotalPhonePrice +memoryPrice;
    totalAmount.innerText=sumAmount ; 
      
});
document.getElementById('delivery-charge').addEventListener('click',function(){
    
   const chargedelivery= 20;
    const etraMemory=document.getElementById('delivery-price');
    const memory=etraMemory.innerText;
    const memoryAmount=parseFloat(memory);
    const memoryPrice =chargedelivery+memoryAmount;
    etraMemory.innerText=memoryPrice;
    const totalAmount=document.getElementById('Total-amount');
    const TotalPrice =totalAmount.innerText;
    const TotalPhonePrice =parseFloat(TotalPrice);
    const sumAmount =TotalPhonePrice +memoryPrice;
    totalAmount.innerText=sumAmount ; 
      
});
//promo code 
document.getElementById('apply-code').addEventListener('click',function(){
    const promocode =document.getElementById('input-code');
    const promodail=promocode.value ;
    console.log(promodail);
    //const promodail=document.getElementById('input-code');
   // console.log(promodail);
})
